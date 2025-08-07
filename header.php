<?php
/**
 * The header for our theme
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @package AXTRA
 * @since   1.0
 * @version 1.0
 */
$options = axtra_WSH()->option();
$allowed_html = wp_kses_allowed_html( 'post' );
$icon_href = $options->get( 'image_favicon' ); 
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<?php if ( ! function_exists( 'has_site_icon' ) || ! has_site_icon() ): ?>
    <?php if($icon_href):?>
		<link rel="shortcut icon" href="<?php echo esc_url($icon_href['url']); ?>" type="image/x-icon">
		<link rel="icon" href="<?php echo esc_url($icon_href['url']); ?>" type="image/x-icon">
	<?php endif; ?>
    <?php endif; ?>
	<!-- responsive meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- For IE -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>> 

<?php
	if ( ! function_exists( 'wp_body_open' ) ) {
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}?>

<?php if( $options->get( 'show_cursor' ) ):?>
<!-- Cursor Animation -->
<div class="cursor1"></div>
<div class="cursor2"></div>
<?php endif; ?>

<?php if( $options->get( 'theme_preloader' ) ):?>
<!-- Preloader -->
<div class="preloader">
    <div class="loading">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
        <div class="bar bar4"></div>
        <div class="bar bar5"></div>
        <div class="bar bar6"></div>
        <div class="bar bar7"></div>
        <div class="bar bar8"></div>
    </div>
</div>
<?php endif; ?>

<?php if($options->get('show_layout_switcher')){ ?>
<!-- Switcher Area Start -->
<div class="switcher__area">
    <div class="switcher__icon">
        <button id="switcher_open"><i class="fa-solid fa-gear"></i></button>
        <button id="switcher_close"><i class="fa-solid fa-xmark"></i></button>
    </div>

    <div class="switcher__items">
        <div class="switcher__item">
            <div class="switch__title-wrap">
            	<h2 class="switcher__title"><?php esc_html_e('Cursor', 'axtra'); ?></h2>
            </div>
            <div class="switcher__btn">
                <select name="cursor-style" id="cursor_style">
                    <option value="1"><?php esc_html_e('default', 'axtra'); ?></option>
                    <option selected value="2"><?php esc_html_e('animated', 'axtra'); ?></option>
                </select>
            </div>
        </div>
    
        <div class="switcher__item">
            <div class="switch__title-wrap">
            	<h2 class="switcher__title"><?php esc_html_e('mode', 'axtra'); ?></h2>
            </div>
            <div class="switcher__btn mode-type wc-col-2">
                <button class="active" data-mode="light"><?php esc_html_e('light', 'axtra'); ?></button>
                <button data-mode="dark"><?php esc_html_e('dark', 'axtra'); ?></button>
            </div>
        </div>
        
        <div class="switcher__item">
            <div class="switch__title-wrap">
              <h2 class="switcher__title"><?php esc_html_e( 'Language Support', 'axtra' );?></h2>
            </div>
            <div class="switcher__btn lang_dir wc-col-2">
              <button class="active" data-mode="ltr"><?php esc_html_e( 'LTR', 'axtra' );?></button>
              <button data-mode="rtl"><?php esc_html_e( 'RTL', 'axtra' );?></button>
            </div>
        </div>
        
    </div>
</div>
<!-- Switcher Area End -->
<?php } ?>

<?php if($options->get('show_smooth_scroll')){ ?>
<!-- Scroll Smoother -->
<div class="has-smooth" id="has_smooth"></div>
<?php } ?>

<?php if($options->get('show_scroll_top_btn')){ ?>
<!-- Go Top Button -->
<button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>
<?php } ?>

<!-- Header Settings -->
<?php do_action( 'axtra_main_header' ); ?>	

<!-- Main Classes -->

<div id="smooth-wrapper">
	<div id="smooth-content">
		<main>