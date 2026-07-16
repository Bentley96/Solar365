<?php
/**
 * Solar 365 theme functions.
 *
 * This is a "thin" theme: the front-end is a React single-page app built with
 * Vite. WordPress serves the built bundle, handles the enquiry-form mailer, and
 * manages the route pages. There is no PHP templating of the site content.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Enquiry / quote form REST endpoint + wp_mail() delivery.
require get_template_directory() . '/inc/quote-form.php';

/**
 * The front-end routes handled by React Router. WordPress pages are created for
 * each (on activation) so deep links resolve with a 200 and correct <title>.
 * Keys are page slugs; values are page titles. 'home' becomes the front page.
 */
function solar365_routes() {
	return array(
		'home'                    => 'Home',
		'about-solar'             => 'About Solar',
		'residential-solar'       => 'Residential Solar',
		'commercial-solar'        => 'Commercial Solar',
		'air-source-heat-pumps'   => 'Air Source Heat Pumps',
		'solar-maintenance'       => 'Solar Maintenance',
		'residential-roofing'     => 'Residential Roofing',
		'supporting-our-community' => 'Supporting Our Community',
		'case-studies'            => 'Case Studies',
		'gallery'                 => 'Gallery',
		'contact'                 => 'Contact',
		'faqs'                    => 'FAQs',
		'privacy-policy'          => 'Privacy Policy',
	);
}

/**
 * Basic theme support.
 */
add_action( 'after_setup_theme', 'solar365_setup' );
function solar365_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'style', 'script' ) );
}

/**
 * Read the Vite build manifest (maps source entry -> hashed output files).
 *
 * @return array
 */
function solar365_manifest() {
	static $manifest = null;
	if ( null !== $manifest ) {
		return $manifest;
	}
	$path = get_template_directory() . '/dist/.vite/manifest.json';
	$manifest = file_exists( $path ) ? json_decode( file_get_contents( $path ), true ) : array();
	return is_array( $manifest ) ? $manifest : array();
}

/**
 * Find the entry chunk in the manifest (keyed by src/main.tsx, or whichever
 * chunk is flagged isEntry as a fallback).
 *
 * @return array|null
 */
function solar365_entry() {
	$manifest = solar365_manifest();
	if ( isset( $manifest['src/main.tsx'] ) ) {
		return $manifest['src/main.tsx'];
	}
	foreach ( $manifest as $chunk ) {
		if ( ! empty( $chunk['isEntry'] ) ) {
			return $chunk;
		}
	}
	return null;
}

/**
 * Expose the theme's real /dist/ URL to the app before it loads, so images
 * resolve at runtime regardless of the theme folder name or install path.
 * Printed early in <head> so it is defined before the footer module executes.
 */
add_action( 'wp_head', 'solar365_asset_base', 1 );
function solar365_asset_base() {
	$dist = get_template_directory_uri() . '/dist/';
	echo '<script>window.__SOLAR365_DIST__=' . wp_json_encode( $dist ) . ';</script>' . "\n";
}

/**
 * Enqueue the built React app (ES module) and its CSS.
 */
add_action( 'wp_enqueue_scripts', 'solar365_enqueue_app' );
function solar365_enqueue_app() {
	$entry = solar365_entry();
	if ( ! $entry ) {
		return; // Not built yet.
	}

	$dist_uri = get_template_directory_uri() . '/dist/';
	$dist_dir = get_template_directory() . '/dist/';

	if ( ! empty( $entry['css'] ) ) {
		foreach ( $entry['css'] as $i => $css ) {
			$ver = file_exists( $dist_dir . $css ) ? filemtime( $dist_dir . $css ) : null;
			wp_enqueue_style( 'solar365-app-' . $i, $dist_uri . $css, array(), $ver );
		}
	}

	if ( ! empty( $entry['file'] ) ) {
		$ver = file_exists( $dist_dir . $entry['file'] ) ? filemtime( $dist_dir . $entry['file'] ) : null;
		wp_enqueue_script( 'solar365-app', $dist_uri . $entry['file'], array(), $ver, true );
	}
}

/**
 * Load the entry as a native ES module (Vite output requires type="module").
 *
 * The `?ver=` query is stripped deliberately: the entry's lazy-loaded chunks
 * import the entry back by its plain filename (no query), so if WordPress served
 * the entry as `main.js?ver=123` the browser would load it a SECOND time as
 * `main.js` — two module instances, two copies of React, and hooks would fail
 * with "dispatcher is null" on every lazy page. Vite's content hash in the
 * filename already busts caches, so no version query is needed.
 */
add_filter( 'script_loader_tag', 'solar365_module_script', 10, 3 );
function solar365_module_script( $tag, $handle, $src ) {
	if ( 'solar365-app' === $handle ) {
		$src = remove_query_arg( 'ver', $src );
		return '<script type="module" crossorigin src="' . esc_url( $src ) . '"></script>' . "\n";
	}
	return $tag;
}

/**
 * Trim WordPress front-end cruft the SPA doesn't use (emoji detection script).
 */
add_action( 'init', 'solar365_trim_frontend' );
function solar365_trim_frontend() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
}

/**
 * Warn in wp-admin if the front-end hasn't been built yet.
 */
add_action( 'admin_notices', 'solar365_build_notice' );
function solar365_build_notice() {
	if ( solar365_entry() ) {
		return;
	}
	echo '<div class="notice notice-warning"><p><strong>Solar 365 theme:</strong> the front-end app has not been built. Run <code>npm run build</code> and upload the generated <code>dist</code> folder into the theme.</p></div>';
}

/**
 * On theme activation, create a page for each React route (so deep links work
 * and return a 200), set the static front page, and flush permalinks.
 */
add_action( 'after_switch_theme', 'solar365_scaffold_pages' );
function solar365_scaffold_pages() {
	$home_id = 0;

	foreach ( solar365_routes() as $slug => $title ) {
		$existing = get_page_by_path( $slug );
		if ( $existing ) {
			$page_id = $existing->ID;
		} else {
			$page_id = wp_insert_post(
				array(
					'post_type'    => 'page',
					'post_status'  => 'publish',
					'post_title'   => $title,
					'post_name'    => $slug,
					'post_content' => '',
				)
			);
		}
		if ( 'home' === $slug && $page_id && ! is_wp_error( $page_id ) ) {
			$home_id = $page_id;
		}
	}

	// Individual case-study pages live under /case-studies/<slug> so their deep
	// links resolve with a 200. Created as children of the case-studies page.
	$parent = get_page_by_path( 'case-studies' );
	if ( $parent ) {
		$case_studies = array(
			'curtain-factory-outlet' => 'The Curtain Factory Outlet',
			'ja-autos'               => 'JA Autos',
			'farm-installation'      => 'Farm Solar Installation',
		);
		foreach ( $case_studies as $slug => $title ) {
			if ( ! get_page_by_path( 'case-studies/' . $slug ) ) {
				wp_insert_post(
					array(
						'post_type'   => 'page',
						'post_status' => 'publish',
						'post_title'  => $title,
						'post_name'   => $slug,
						'post_parent' => $parent->ID,
						'post_content' => '',
					)
				);
			}
		}
	}

	if ( $home_id ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $home_id );
	}

	// Pretty permalinks are required for the route slugs to resolve.
	if ( '' === get_option( 'permalink_structure' ) ) {
		update_option( 'permalink_structure', '/%postname%/' );
	}
	flush_rewrite_rules();
}
