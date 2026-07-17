<?php
/**
 * Universal template.
 *
 * Every front-end URL renders this same shell: the React app mounts into #root
 * and React Router decides which page to show based on the URL. Because this is
 * index.php, it is WordPress's fallback for the front page, all pages, and 404s,
 * so a single template serves the whole single-page app.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
	<div id="root"></div>
<?php wp_footer(); ?>
</body>
</html>
