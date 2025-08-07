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


<!-- Header area start -->
<header class="header__area-7">
    <div class="header__inner-2">
        
        <div class="header__logo-2">
            <div class="logo-dark"><?php echo axtra_logo( $logo_type, $dark_logo, $dark_logo_dimension, $logo_text, $logo_typography ); ?></div>
            <div class="logo-light"><?php echo axtra_logo( $logo_type, $light_logo, $light_logo_dimension, $logo_text, $logo_typography ); ?></div>
        </div>
        
        <div class="header__nav-2">
            <ul class="main-menu-4 menu-anim">
            <?php wp_nav_menu( array( 'theme_location' => 'main_menu', 'container_id' => 'navbar-collapse-1',
                'container_class'=>'navbar-collapse collapse navbar-right',
                'menu_class'=>'nav navbar-nav',
                'fallback_cb'=>false,
                'items_wrap' => '%3$s',
                'container'=>false,
                'depth'=>'3',
                'walker'=> new Bootstrap_walker()
            ) ); ?>
            </ul>
        </div>
        <?php if($options->get('show_sidebar_info')){ ?>
        <div class="header__nav-icon-7">
            <button class="menu-icon-2" id="open_offcanvas"><img class="h-22" src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/icon/menu-dark.svg" alt="<?php esc_attr_e('Menubar Icon', 'axtra'); ?>"></button>
        </div>
        <?php } ?>
    </div>
</header>
<!-- Header area end -->

<!-- Header Sidebar Settings -->
<?php if($options->get('show_sidebar_info')){ ?>
	<?php get_template_part('templates/header/sidebar_settings'); ?>
<?php } ?>
