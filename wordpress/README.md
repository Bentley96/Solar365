# WordPress integration

This folder holds the server-side pieces for when the site is converted into a
WordPress theme. It is not used by the Vite dev build directly — it's PHP that
runs inside WordPress.

## `inc/quote-form.php`

Handles every enquiry form on the site (quote flyout, homepage quote form,
contact page). They all POST to the WordPress REST route it registers:

```
POST /wp-json/solar365/v1/quote
```

On each submission it:

1. Stores the lead as a `quote_request` post (visible under **Enquiries** in
   wp-admin), and
2. Emails it to the sales team via `wp_mail()`.

### Email routing

| Field | Address(es)                                  |
| ----- | -------------------------------------------- |
| To    | sales@solar-365.co.uk                        |
| Cc    | jordan@solar-365.co.uk                       |
| Bcc   | lewis@solar-365.co.uk, lucie@solar-365.co.uk |

Reply-To is the person who submitted the form, so replying goes to the customer.
To change recipients, edit the `solar365_quote_to/cc/bcc()` functions at the top
of `inc/quote-form.php`.

### Wiring it into the theme

Add to the theme's `functions.php`:

```php
require get_template_directory() . '/inc/quote-form.php';
```

(Place `quote-form.php` at `wp-content/themes/<your-theme>/inc/quote-form.php`.)

### Choosing the mail transport (SMTP or Mailgun)

`wp_mail()` is transport-agnostic — pick one:

- **Mailgun** – install the official *Mailgun for WordPress* plugin, add your
  Mailgun domain + API key, and every `wp_mail()` call is routed through Mailgun.
  No code changes needed.
- **Standard SMTP** – either install *WP Mail SMTP* and configure it in
  wp-admin, or set the `SOLAR365_SMTP_*` constants in `wp-config.php` and
  uncomment the `phpmailer_init` hook near the bottom of `inc/quote-form.php`.

Also set the sender in `wp-config.php` for good deliverability:

```php
define( 'SOLAR365_FROM_EMAIL', 'noreply@solar-365.co.uk' );
define( 'SOLAR365_FROM_NAME', 'Solar 365 Website' );
```

## Front-end endpoint

The React forms POST to the endpoint via `src/lib/quote.ts`. It defaults to the
same-origin route `/wp-json/solar365/v1/quote`, which is correct once the built
app is served from within the theme. For local dev against a remote WordPress
install, set `VITE_QUOTE_ENDPOINT` to the full URL.
