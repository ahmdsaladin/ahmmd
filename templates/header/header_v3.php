<?php
$options = axtra_WSH()->option();
$allowed_html = wp_kses_allowed_html( 'post' );

//Vertical Light Color Logo Settings
$vertical_light_logo = $options->get( 'vertical_light_logo' );
$vertical_light_logo_dimension = $options->get( 'vertical_light_logo_dimension' );

//Light Color Logo Settings
$light_logo = $options->get( 'light_color_logo' );
$light_logo_dimension = $options->get( 'light_color_logo_dimension' );

$logo_type = '';
$logo_text = '';
$logo_typography = ''; ?>



<!-- Testimonial Play Cursor -->
<div class="cursor" id="client_cursor"><?php esc_html_e('Play', 'axtra'); ?></div>

<!-- Header area start -->
<header class="header__area">
    <div class="header__inner">
        <div class="header__logo">
            <div class="logo-primary"><?php echo axtra_logo( $logo_type, $vertical_light_logo, $vertical_light_logo_dimension, $logo_text, $logo_typography ); ?></div>
            <div class="logo-secondary"><?php echo axtra_logo( $logo_type, $light_logo, $light_logo_dimension, $logo_text, $logo_typography ); ?></div>
        </div>
    	
        <?php if($options->get('show_sidebar_info')){ ?>
        <div class="header__nav-icon">
        	<button id="open_offcanvas"><img class="h-22" src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/icon/menu-white.svg" alt="<?php esc_attr_e('Menubar Icon', 'axtra'); ?>"></button>
        </div>
    	<?php } ?>
		<?php if($options->get('show_phone_no_v3')){ ?>
        <div class="header__support">
        	<p><?php echo wp_kses($options->get('phone_title_v3'), true); ?> <a href="tel:<?php echo esc_attr($options->get('phone_no_v3'), true); ?>"><?php echo wp_kses($options->get('phone_no_v3'), true); ?></a></p>
        </div>
        <?php } ?>
    </div>
</header>
<!-- Header area end -->

<!-- Header Sidebar Settings -->
<?php if($options->get('show_sidebar_info')){ ?>
	<?php get_template_part('templates/header/sidebar_settings'); ?>
<?php } ?>
