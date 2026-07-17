<?php
/**
 * Solar 365 — website enquiry / quote form handler.
 *
 * Registers a REST endpoint that every form on the site POSTs to (the quote
 * flyout, the homepage quote form, and the contact page all share it). Each
 * submission is:
 *
 *   1. Stored as a `quote_request` post (so leads are never lost), and
 *   2. Emailed to the sales team via wp_mail().
 *
 * Routing:
 *   To:  sales@solar-365.co.uk
 *   Cc:  jordan@solar-365.co.uk
 *   Bcc: lewis@solar-365.co.uk, lucie@solar-365.co.uk
 *
 * The email transport (standard SMTP or Mailgun) is NOT hard-coded here —
 * wp_mail() uses whatever the site is configured with. See the notes at the
 * bottom of this file for both options.
 *
 * Include it from the theme's functions.php:
 *
 *     require get_template_directory() . '/inc/quote-form.php';
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // No direct access.
}

/**
 * Recipients. Change these to update who receives form submissions.
 */
function solar365_quote_to() {
	return 'sales@solar-365.co.uk';
}
function solar365_quote_cc() {
	return array( 'jordan@solar-365.co.uk' );
}
function solar365_quote_bcc() {
	return array( 'lewis@solar-365.co.uk', 'lucie@solar-365.co.uk' );
}

/**
 * Sender. Should be an address on a domain you send from (matters for SMTP /
 * Mailgun deliverability and SPF/DKIM alignment). Override with the
 * SOLAR365_FROM_EMAIL / SOLAR365_FROM_NAME constants in wp-config.php.
 */
function solar365_quote_from_email() {
	return defined( 'SOLAR365_FROM_EMAIL' ) ? SOLAR365_FROM_EMAIL : 'noreply@solar-365.co.uk';
}
function solar365_quote_from_name() {
	return defined( 'SOLAR365_FROM_NAME' ) ? SOLAR365_FROM_NAME : 'Solar 365 Website';
}

/**
 * Register a lightweight custom post type to store leads in wp-admin.
 */
add_action( 'init', 'solar365_register_quote_cpt' );
function solar365_register_quote_cpt() {
	register_post_type(
		'quote_request',
		array(
			'labels'       => array(
				'name'          => __( 'Enquiries', 'solar365' ),
				'singular_name' => __( 'Enquiry', 'solar365' ),
			),
			'public'       => false,
			'show_ui'      => true,
			'show_in_menu' => true,
			'menu_icon'    => 'dashicons-email',
			'supports'     => array( 'title' ),
			'capability_type' => 'post',
		)
	);
}

/**
 * Where complaints & feedback submissions are emailed. Customer services rather
 * than sales.
 */
function solar365_complaint_to() {
	return 'customerservices@solar-365.co.uk';
}

/**
 * Register the REST routes the front-end forms POST to.
 */
add_action( 'rest_api_init', 'solar365_register_quote_route' );
function solar365_register_quote_route() {
	register_rest_route(
		'solar365/v1',
		'/quote',
		array(
			'methods'             => 'POST',
			'callback'            => 'solar365_handle_quote',
			'permission_callback' => '__return_true', // Public form endpoint.
		)
	);
	register_rest_route(
		'solar365/v1',
		'/complaint',
		array(
			'methods'             => 'POST',
			'callback'            => 'solar365_handle_complaint',
			'permission_callback' => '__return_true',
		)
	);
}

/**
 * Handle a complaints & feedback submission: validate, store, email customer
 * services.
 *
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error
 */
function solar365_handle_complaint( WP_REST_Request $request ) {
	$params = $request->get_json_params();
	if ( empty( $params ) ) {
		$params = $request->get_params();
	}

	$name    = isset( $params['name'] ) ? sanitize_text_field( $params['name'] ) : '';
	$phone   = isset( $params['phone'] ) ? sanitize_text_field( $params['phone'] ) : '';
	$email   = isset( $params['email'] ) ? sanitize_email( $params['email'] ) : '';
	$message = isset( $params['message'] ) ? sanitize_textarea_field( $params['message'] ) : '';

	if ( '' === $name || ! is_email( $email ) || '' === $message ) {
		return new WP_Error(
			'solar365_invalid',
			__( 'Please provide your name, a valid email address and the details of your complaint.', 'solar365' ),
			array( 'status' => 400 )
		);
	}

	// Store the submission (reuses the enquiries store, tagged as a complaint).
	$post_id = wp_insert_post(
		array(
			'post_type'   => 'quote_request',
			'post_status' => 'publish',
			'post_title'  => sprintf( 'Complaint — %s', $name ),
		),
		true
	);
	if ( ! is_wp_error( $post_id ) ) {
		update_post_meta( $post_id, 'submission_type', 'complaint' );
		foreach ( compact( 'name', 'phone', 'email', 'message' ) as $key => $value ) {
			update_post_meta( $post_id, $key, $value );
		}
	}

	$rows  = solar365_quote_row( __( 'Name', 'solar365' ), $name );
	$rows .= solar365_quote_row( __( 'Phone', 'solar365' ), $phone );
	$rows .= solar365_quote_row( __( 'Email', 'solar365' ), $email );
	$rows .= solar365_quote_row( __( 'Complaint', 'solar365' ), $message );

	$body = '<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">'
		. '<h2 style="color:#0f172a;">' . esc_html__( 'New Complaint / Feedback', 'solar365' ) . '</h2>'
		. '<table style="border-collapse:collapse;width:100%;background:#f8fafc;border-radius:8px;">' . $rows . '</table>'
		. '<p style="color:#64748b;font-size:12px;margin-top:16px;">' . esc_html__( 'Sent automatically from the Solar 365 website complaints form.', 'solar365' ) . '</p>'
		. '</div>';

	$headers = array(
		'Content-Type: text/html; charset=UTF-8',
		sprintf( 'From: %s <%s>', solar365_quote_from_name(), solar365_quote_from_email() ),
		sprintf( 'Reply-To: %s <%s>', $name, $email ),
	);

	$subject = sprintf( __( 'Complaint / Feedback — %s', 'solar365' ), $name );
	$sent    = wp_mail( solar365_complaint_to(), $subject, $body, $headers );

	if ( ! $sent ) {
		return new WP_Error(
			'solar365_mail_failed',
			__( 'Your message was received but we could not send the notification email. Please call us if you do not hear back.', 'solar365' ),
			array( 'status' => 502 )
		);
	}

	return new WP_REST_Response( array( 'success' => true ), 200 );
}

/**
 * Handle a submission: validate, store, email.
 *
 * @param WP_REST_Request $request
 * @return WP_REST_Response|WP_Error
 */
function solar365_handle_quote( WP_REST_Request $request ) {
	$params = $request->get_json_params();
	if ( empty( $params ) ) {
		$params = $request->get_params();
	}

	$name              = isset( $params['name'] ) ? sanitize_text_field( $params['name'] ) : '';
	$phone             = isset( $params['phone'] ) ? sanitize_text_field( $params['phone'] ) : '';
	$email             = isset( $params['email'] ) ? sanitize_email( $params['email'] ) : '';
	$postcode          = isset( $params['postcode'] ) ? sanitize_text_field( $params['postcode'] ) : '';
	$installation_type = isset( $params['installation_type'] ) ? sanitize_text_field( $params['installation_type'] ) : '';
	$message           = isset( $params['message'] ) ? sanitize_textarea_field( $params['message'] ) : '';

	if ( '' === $name || '' === $phone || ! is_email( $email ) ) {
		return new WP_Error(
			'solar365_invalid',
			__( 'Please provide your name, phone number and a valid email address.', 'solar365' ),
			array( 'status' => 400 )
		);
	}

	// 1. Store the lead.
	$post_id = wp_insert_post(
		array(
			'post_type'   => 'quote_request',
			'post_status' => 'publish',
			'post_title'  => sprintf( '%s — %s', $name, $installation_type ? $installation_type : __( 'General enquiry', 'solar365' ) ),
		),
		true
	);

	if ( ! is_wp_error( $post_id ) ) {
		foreach ( compact( 'name', 'phone', 'email', 'postcode', 'installation_type', 'message' ) as $key => $value ) {
			update_post_meta( $post_id, $key, $value );
		}
	}

	// 2. Email the sales team.
	$rows = '';
	$rows .= solar365_quote_row( __( 'Name', 'solar365' ), $name );
	$rows .= solar365_quote_row( __( 'Phone', 'solar365' ), $phone );
	$rows .= solar365_quote_row( __( 'Email', 'solar365' ), $email );
	$rows .= solar365_quote_row( __( 'Postcode', 'solar365' ), $postcode );
	$rows .= solar365_quote_row( __( 'Interested in', 'solar365' ), $installation_type );
	if ( '' !== $message ) {
		$rows .= solar365_quote_row( __( 'Message', 'solar365' ), $message );
	}

	$body = '<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">'
		. '<h2 style="color:#0f172a;">' . esc_html__( 'New Website Enquiry', 'solar365' ) . '</h2>'
		. '<table style="border-collapse:collapse;width:100%;background:#f8fafc;border-radius:8px;">' . $rows . '</table>'
		. '<p style="color:#64748b;font-size:12px;margin-top:16px;">' . esc_html__( 'Sent automatically from the Solar 365 website.', 'solar365' ) . '</p>'
		. '</div>';

	$headers = array(
		'Content-Type: text/html; charset=UTF-8',
		sprintf( 'From: %s <%s>', solar365_quote_from_name(), solar365_quote_from_email() ),
		sprintf( 'Reply-To: %s <%s>', $name, $email ),
	);
	foreach ( solar365_quote_cc() as $cc ) {
		$headers[] = 'Cc: ' . $cc;
	}
	foreach ( solar365_quote_bcc() as $bcc ) {
		$headers[] = 'Bcc: ' . $bcc;
	}

	$subject = sprintf(
		/* translators: 1: installation type, 2: name */
		__( 'New Enquiry: %1$s — %2$s', 'solar365' ),
		$installation_type ? $installation_type : __( 'General', 'solar365' ),
		$name
	);

	$sent = wp_mail( solar365_quote_to(), $subject, $body, $headers );

	if ( ! $sent ) {
		return new WP_Error(
			'solar365_mail_failed',
			__( 'Your enquiry was received but we could not send the notification email. Please call us if you do not hear back.', 'solar365' ),
			array( 'status' => 502 )
		);
	}

	return new WP_REST_Response( array( 'success' => true ), 200 );
}

/**
 * Render one HTML table row for the notification email.
 */
function solar365_quote_row( $label, $value ) {
	return '<tr>'
		. '<td style="padding:6px 12px;font-weight:600;color:#0f172a;">' . esc_html( $label ) . '</td>'
		. '<td style="padding:6px 12px;color:#334155;">' . nl2br( esc_html( $value ) ) . '</td>'
		. '</tr>';
}

/*
 * -----------------------------------------------------------------------------
 * Choosing the mail transport
 * -----------------------------------------------------------------------------
 *
 * wp_mail() above is transport-agnostic. Pick ONE of the following:
 *
 * OPTION A — Mailgun (recommended)
 *   Install the official "Mailgun for WordPress" plugin, enter your Mailgun
 *   domain + API key, and it automatically routes every wp_mail() call through
 *   the Mailgun API. Nothing else to change here.
 *
 * OPTION B — Standard SMTP
 *   Either install "WP Mail SMTP" and configure it in wp-admin, OR drive SMTP
 *   directly from wp-config.php constants and uncomment the hook below.
 *
 *   Add to wp-config.php:
 *     define( 'SOLAR365_SMTP_HOST', 'smtp.example.com' );
 *     define( 'SOLAR365_SMTP_PORT', 587 );
 *     define( 'SOLAR365_SMTP_SECURE', 'tls' );      // 'tls' or 'ssl'
 *     define( 'SOLAR365_SMTP_USER', 'smtp-user' );
 *     define( 'SOLAR365_SMTP_PASS', 'smtp-password' );
 */

// add_action( 'phpmailer_init', 'solar365_configure_smtp' );
function solar365_configure_smtp( $phpmailer ) {
	if ( ! defined( 'SOLAR365_SMTP_HOST' ) ) {
		return;
	}
	$phpmailer->isSMTP();
	$phpmailer->Host       = SOLAR365_SMTP_HOST;
	$phpmailer->Port       = defined( 'SOLAR365_SMTP_PORT' ) ? SOLAR365_SMTP_PORT : 587;
	$phpmailer->SMTPSecure = defined( 'SOLAR365_SMTP_SECURE' ) ? SOLAR365_SMTP_SECURE : 'tls';
	if ( defined( 'SOLAR365_SMTP_USER' ) && defined( 'SOLAR365_SMTP_PASS' ) ) {
		$phpmailer->SMTPAuth = true;
		$phpmailer->Username = SOLAR365_SMTP_USER;
		$phpmailer->Password = SOLAR365_SMTP_PASS;
	}
}
