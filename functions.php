<?php

require_once get_template_directory() . '/includes/loader.php';

add_action( 'after_setup_theme', 'axtra_setup_theme' );
add_action( 'after_setup_theme', 'axtra_load_default_hooks' );


function axtra_setup_theme() {

	load_theme_textdomain( 'axtra', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );
	add_theme_support( 'custom-header' );
	add_theme_support( 'custom-background' );
	add_theme_support( 'woocommerce' );
	add_theme_support( 'wc-product-gallery-lightbox' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'post', 'page-attributes' );
    
	// Set the default content width.
	$GLOBALS['content_width'] = 525;
	
	/*---------- Register image sizes ----------*/
	
	//Register image sizes
	add_image_size( 'axtra_550x670', 550, 670, true ); //axtra_550x670 Our Projects
	add_image_size( 'axtra_945x1000', 945, 1000, true ); //axtra_945x1000 Our Projects
	add_image_size( 'axtra_520x700', 520, 700, true ); //axtra_520x700 Our Projects
	add_image_size( 'axtra_390x450', 390, 450, true ); //axtra_945x1000 Latest News
	add_image_size( 'axtra_700x576', 700, 576, true ); //axtra_700x576 Our Projects
	add_image_size( 'axtra_390x260', 390, 260, true ); //axtra_390x260 Latest News
	add_image_size( 'axtra_432x550', 432, 550, true ); //axtra_432x550 Our Team
	add_image_size( 'axtra_770x980', 770, 980, true ); //axtra_770x980 Our Projects
	add_image_size( 'axtra_520x700', 520, 700, true ); //axtra_520x700 Our Projects
	add_image_size( 'axtra_765x1000', 765, 1000, true ); //axtra_765x1000 Team Detail
	add_image_size( 'axtra_1170x500', 1170, 500, true ); //axtra_1170x500 Our Blog
	add_image_size( 'axtra_542x689', 542, 689, true ); //axtra_1170x500 Our Blog
	add_image_size( 'extra_655x830', 655, 830, true ); //extra_655x830 Select Work
	add_image_size( 'extra_655x450', 655, 450, true ); //extra_655x450 Select Work
	add_image_size( 'extra_440x580', 440, 580, true ); //extra_440x580 Select Work
	add_image_size( 'extra_330x400', 330, 400, true ); //extra_330x400 Select Work
	add_image_size( 'axtra_419x750', 419, 750, true ); //axtra_419x750 showcase_carousel
	add_image_size( 'extra_1820x500', 1820, 500, true ); //extra_1820x500 Portfolio Masonry
	add_image_size( 'extra_850x500', 850, 500, true ); //extra_850x500 Portfolio Masonry
	
	
	
	
	/*---------- Register image sizes ends ----------*/
	
	
	
	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'main_menu' => esc_html__( 'Main Menu', 'axtra' ),
		'sidebar_menu' => esc_html__( 'Header Sidebar Menu', 'axtra' ),
		'footer_menu' => esc_html__( 'Footer Menu', 'axtra' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Add theme support for Custom Logo.
	add_theme_support( 'custom-logo', array(
		'width'      => 250,
		'height'     => 250,
		'flex-width' => true,
	) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/*
	 * This theme styles the visual editor to resemble the theme style,
	 * specifically font, colors, and column width.
 	 */
	add_editor_style();
	add_action( 'admin_init', 'axtra_admin_init', 2000000 );
}

/**
 * [axtra_admin_init]
 *
 * @param  array $data [description]
 *
 * @return [type]       [description]
 */


function axtra_admin_init() {
	remove_action( 'admin_notices', array( 'ReduxFramework', '_admin_notices' ), 99 );
}

/*---------- Sidebar settings ----------*/

/**
 * [axtra_widgets_init]
 *
 * @param  array $data [description]
 *
 * @return [type]       [description]
 */
function axtra_widgets_init() {

	global $wp_registered_sidebars;

	$theme_options = get_theme_mod( 'axtra' . '_options-mods' );

	register_sidebar( array(
		'name'          => esc_html__( 'Default Sidebar', 'axtra' ),
		'id'            => 'default-sidebar',
		'description'   => esc_html__( 'Widgets in this area will be shown on the right-hand side.', 'axtra' ),
		'before_widget' => '<div id="%1$s" class="widget wow wcfadeUp %2$s">',
		'after_widget'  => '</div>',
		'before_title' => '<h6 class="widget__title-2">',
	    'after_title' => '</h6>'
	) );
	register_sidebar(array(
		'name' => esc_html__('Footer Widget', 'axtra'),
		'id' => 'footer-sidebar',
		'description' => esc_html__('Widgets in this area will be shown in Footer Area.', 'axtra'),
		'before_widget'=>'<div id="%1$s" class="footer-widget footer__widget %2$s">',
		'after_widget'=>'</div>',
		'before_title' => '<h2 class="footer__widget-title">',
		'after_title' => '</h2>'
	));
	if ( class_exists( '\Elementor\Plugin' )){
	register_sidebar(array(
		'name' => esc_html__('Footer Two Widget', 'axtra'),
		'id' => 'footer-sidebar2',
		'description' => esc_html__('Widgets in this area will be shown in Footer Area.', 'axtra'),
		'before_widget'=>'<div class="col-lg-3 col-md-6 col-sm-12 footer-column"><div id="%1$s" class="footer-widget footer__item-6 %2$s">',
		'after_widget'=>'</div></div>',
		'before_title' => '<h2 class="footer__item-title">',
		'after_title' => '</h2>'
	));
	register_sidebar(array(
		'name' => esc_html__('Footer Three Widget', 'axtra'),
		'id' => 'footer-sidebar3',
		'description' => esc_html__('Widgets in this area will be shown in Footer Area.', 'axtra'),
		'before_widget'=>'<div id="%1$s" class="footer-widget categories_item %2$s">',
		'after_widget'=>'</div>',
		'before_title' => '<h4 class="cat_title">',
		'after_title' => '</h4>'
	));
	register_sidebar(array(
	  'name' => esc_html__( 'Blog Listing', 'axtra' ),
	  'id' => 'blog-sidebar',
	  'description' => esc_html__( 'Widgets in this area will be shown on the right-hand side.', 'axtra' ),
	  'before_widget'=>'<div id="%1$s" class="widget wow wcfadeUp %2$s">',
	  'after_widget'=>'</div>',
	  'before_title' => '<h6 class="widget__title-2">',
	  'after_title' => '</h6>'
	));
	}
	if ( ! is_object( axtra_WSH() ) ) {
		return;
	}

	$sidebars = axtra_set( $theme_options, 'custom_sidebar_name' );

	foreach ( array_filter( (array) $sidebars ) as $sidebar ) {

		if ( axtra_set( $sidebar, 'topcopy' ) ) {
			continue;
		}

		$name = $sidebar;
		if ( ! $name ) {
			continue;
		}
		$slug = str_replace( ' ', '_', $name );

		register_sidebar( array(
			'name'          => $name,
			'id'            => sanitize_title( $slug ),
			'before_widget' => '<div id="%1$s" class="%2$s widget wow wcfadeUp">',
			'after_widget'  => '</div>',
			'before_title'  => '<h6 class="widget__title-2">',
			'after_title'   => '</h6>',
		) );
	}

	update_option( 'wp_registered_sidebars', $wp_registered_sidebars );
}

add_action( 'widgets_init', 'axtra_widgets_init' );

/*---------- Sidebar settings ends ----------*/

/*---------- Gutenberg settings ----------*/

function axtra_gutenberg_editor_palette_styles() {
    add_theme_support( 'editor-color-palette', array(
        array(
            'name' => esc_html__( 'strong yellow', 'axtra' ),
            'slug' => 'strong-yellow',
            'color' => '#f7bd00',
        ),
        array(
            'name' => esc_html__( 'strong white', 'axtra' ),
            'slug' => 'strong-white',
            'color' => '#fff',
        ),
		array(
            'name' => esc_html__( 'light black', 'axtra' ),
            'slug' => 'light-black',
            'color' => '#242424',
        ),
        array(
            'name' => esc_html__( 'very light gray', 'axtra' ),
            'slug' => 'very-light-gray',
            'color' => '#797979',
        ),
        array(
            'name' => esc_html__( 'very dark black', 'axtra' ),
            'slug' => 'very-dark-black',
            'color' => '#000000',
        ),
    ) );
	
	add_theme_support( 'editor-font-sizes', array(
		array(
			'name' => esc_html__( 'Small', 'axtra' ),
			'size' => 10,
			'slug' => 'small'
		),
		array(
			'name' => esc_html__( 'Normal', 'axtra' ),
			'size' => 15,
			'slug' => 'normal'
		),
		array(
			'name' => esc_html__( 'Large', 'axtra' ),
			'size' => 24,
			'slug' => 'large'
		),
		array(
			'name' => esc_html__( 'Huge', 'axtra' ),
			'size' => 36,
			'slug' => 'huge'
		)
	) );
	
}
add_action( 'after_setup_theme', 'axtra_gutenberg_editor_palette_styles' );

/*---------- Gutenberg settings ends ----------*/

/*---------- Enqueue Styles and Scripts ----------*/

function axtra_enqueue_scripts() {
	$options = axtra_WSH()->option();
	
	
    //styles
    wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css' );
	wp_enqueue_style( 'axtra-all', get_template_directory_uri() . '/assets/css/all.min.css' );
	wp_enqueue_style( 'swiper-bundle', get_template_directory_uri() . '/assets/css/swiper-bundle.min.css' );
	wp_enqueue_style( 'progressbar', get_template_directory_uri() . '/assets/css/progressbar.css' );
	wp_enqueue_style( 'axtra-meanmenu', get_template_directory_uri() . '/assets/css/meanmenu.min.css' );
	wp_enqueue_style( 'axtra-main', get_stylesheet_uri() );
	wp_enqueue_style( 'axtra-main-style', get_template_directory_uri() . '/assets/css/master.css' );
	wp_enqueue_style( 'axtra-custom', get_template_directory_uri() . '/assets/css/custom.css' );
	wp_enqueue_style( 'axtra-tut', get_template_directory_uri() . '/assets/css/tut.css' );
	wp_enqueue_style( 'axtra-gutenberg', get_template_directory_uri() . '/assets/css/gutenberg.css' );
	
    //scripts
	wp_enqueue_script( 'jquery-ui-core');
	wp_enqueue_script( 'bootstrap-bundle', get_template_directory_uri().'/assets/js/bootstrap.bundle.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'swiper-bundle', get_template_directory_uri().'/assets/js/swiper-bundle.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'counter', get_template_directory_uri().'/assets/js/counter.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'gsap', get_template_directory_uri().'/assets/js/gsap.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'scroll-trigge', get_template_directory_uri().'/assets/js/ScrollTrigger.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'scroll-to-plugin', get_template_directory_uri().'/assets/js/ScrollToPlugin.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'scroll-smoother', get_template_directory_uri().'/assets/js/ScrollSmoother.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'split-text', get_template_directory_uri().'/assets/js/SplitText.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'chroma', get_template_directory_uri().'/assets/js/chroma.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'mixitup', get_template_directory_uri().'/assets/js/mixitup.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'vanilla-tilt', get_template_directory_uri().'/assets/js/vanilla-tilt.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'meanmenu', get_template_directory_uri().'/assets/js/jquery.meanmenu.min.js', array( 'jquery' ), '2.1.2', true );
	wp_enqueue_script( 'axtra-main-script', get_template_directory_uri().'/assets/js/main.js', array(), false, true );
	if( is_singular() ) wp_enqueue_script('comment-reply');
}
add_action( 'wp_enqueue_scripts', 'axtra_enqueue_scripts' );

/*---------- Enqueue styles and scripts ends ----------*/

/*---------- Google fonts ----------*/

function axtra_fonts_url() {
	
	$fonts_url = '';
	
		$font_families['Kanit']      = 'Kanit:300,400,500,600,700&display=swap';
		
		$font_families = apply_filters( 'AXTRA/includes/classes/header_enqueue/font_families', $font_families );

		$query_args = array(
			'family' => urlencode( implode( '|', $font_families ) ),
			'subset' => urlencode( 'latin,latin-ext' ),
		);

		$protocol  = is_ssl() ? 'https' : 'http';
		$fonts_url = add_query_arg( $query_args, $protocol . '://fonts.googleapis.com/css' );

		return esc_url_raw($fonts_url);

}

function axtra_theme_styles() {
    wp_enqueue_style( 'axtra-theme-fonts', axtra_fonts_url(), array(), null );
}

add_action( 'wp_enqueue_scripts', 'axtra_theme_styles' );
add_action( 'admin_enqueue_scripts', 'axtra_theme_styles' );

/*---------- Google fonts ends ----------*/

/*---------- More functions ----------*/

// 1) axtra_set function

/**
 * [axtra_set description]
 *
 * @param  array $data [description]
 *
 * @return [type]       [description]
 */
if ( ! function_exists( 'axtra_set' ) ) {
	function axtra_set( $var, $key, $def = '' ) {

		if ( is_object( $var ) && isset( $var->$key ) ) {
			return $var->$key;
		} elseif ( is_array( $var ) && isset( $var[ $key ] ) ) {
			return $var[ $key ];
		} elseif ( $def ) {
			return $def;
		} else {
			return false;
		}
	}
}

// 2) axtra_add_editor_styles function

function axtra_add_editor_styles() {
    add_editor_style( 'editor-style.css' );
}
add_action( 'admin_init', 'axtra_add_editor_styles' );

// 3) Add specific CSS class by filter body class.

add_filter( 'body_class', 'custom_class' );
function custom_class( $classes ) {
	$options     = axtra_WSH()->option();
	$dark_meta = get_post_meta( get_the_ID(), 'yt_dark_layout');
	$rtl_support_option = $options->get( 'rtl_support');
	$dark_option = $options->get( 'yt_dark_layout' );
	$dark_layout = ( $dark_meta ) ? $dark_meta['0'] : $dark_option;
	
	$header_meta = get_post_meta( get_the_ID(), 'header_style_settings');
	$header_option = $options->get( 'header_style_settings' );
	$header = ( $header_meta ) ? $header_meta['0'] : $header_option;
	
	if ( $dark_layout ) {
        $classes[] = 'dark';
    }elseif( $rtl_support_option ){
		$classes[] = 'dir-rtl';
	}
	elseif( $header == 'header_v9' ){
		$classes[] = 'cf-custom-class';
	}
	return $classes;
}

add_filter('doing_it_wrong_trigger_error', function () {return false;}, 10, 0);