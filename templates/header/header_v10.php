<?php
$options = axtra_WSH()->option();
$allowed_html = wp_kses_allowed_html( 'post' );

//Dark Color Logo Settings
$dark_logo = $options->get( 'dark_color_logo' );
$dark_logo_dimension = $options->get( 'dark_color_logo_dimension' );

//Light Color Logo Settings
$light_logo = $options->get( 'light_color_logo' );
$light_logo_dimension = $options->get( 'light_color_logo_dimension' );

$logo_type = '';
$logo_text = '';
$logo_typography = ''; ?>

	<!-- Body BG -->
    <div class="body-bg"></div>
	
    <!-- Header area start -->
    <header class="header__area-2">
        <div class="header__inner-5">
            <div class="header__logo-5">
            	<div class="logo-dark"><?php echo axtra_logo( $logo_type, $light_logo, $light_logo_dimension, $logo_text, $logo_typography ); ?></div>
            	<div class="logo-light"><?php echo axtra_logo( $logo_type, $dark_logo, $dark_logo_dimension, $logo_text, $logo_typography ); ?></div>
            </div>
            
            <?php if($options->get('show_sidebar_info')){ ?>
            <div class="header__nav-icon-5">
            	<button id="open_offcanvas"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/portfolio/11/icon.png" alt="<?php esc_attr_e('Menubar Icon', 'axtra'); ?>"></button>
            </div>
            <?php } ?>
        </div>
    </header>
    <!-- Header area end -->
    
	<!-- Header Sidebar Settings -->
	<?php if($options->get('show_sidebar_info')){ ?>
        <?php get_template_part('templates/header/sidebar_settings'); ?>
    <?php } ?>    
    