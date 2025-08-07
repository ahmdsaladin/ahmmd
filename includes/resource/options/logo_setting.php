<?php
return array(
	'title'      => esc_html__( 'Logo Setting', 'axtra' ),
	'id'         => 'logo_setting',
	'desc'       => '',
	'subsection' => false,
	'fields'     => array(
		array(
			'id'       => 'image_favicon',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Favicon', 'axtra' ),
			'subtitle' => esc_html__( 'Insert site favicon image', 'axtra' ),
			'default'  => array( 'url' => get_template_directory_uri() . '/assets/images/favicon.png' ),
		),
		
		//Home One Logo
		array(
            'id' => 'normal_logo_show',
            'type' => 'switch',
            'title' => esc_html__('Enable Light Color Logo', 'axtra'),
            'default' => true,
        ),
		array(
			'id'       => 'light_color_logo',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Light Color Logo Image', 'axtra' ),
			'subtitle' => esc_html__( 'Insert site Light Color logo image', 'axtra' ),
			'required' => array( 'normal_logo_show', '=', true ),
		),
		array(
			'id'       => 'light_color_logo_dimension',
			'type'     => 'dimensions',
			'title'    => esc_html__( 'Light Color Logo Dimentions', 'axtra' ),
			'subtitle' => esc_html__( 'Select Light Color Logo Dimentions', 'axtra' ),
			'units'    => array( 'em', 'px', '%' ),
			'default'  => array( 'Height' => '' ),
			'required' => array( 'normal_logo_show', '=', true ),
		),
		
		//Dark Logo
		array(
            'id' => 'normal_logo_show2',
            'type' => 'switch',
            'title' => esc_html__('Enable Dark Color Logo Image', 'axtra'),
            'default' => true,
        ),
		array(
			'id'       => 'dark_color_logo',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Dark Color Logo Image', 'axtra' ),
			'subtitle' => esc_html__( 'Insert site Sticky/Siderbar Logo Image', 'axtra' ),
			'required' => array( 'normal_logo_show2', '=', true ),
		),
		array(
			'id'       => 'dark_color_logo_dimension',
			'type'     => 'dimensions',
			'title'    => esc_html__( 'Dark Color Logo Image Dimentions', 'axtra' ),
			'subtitle' => esc_html__( 'Select Dark Color Logo Image Dimentions', 'axtra' ),
			'units'    => array( 'em', 'px', '%' ),
			'default'  => array( 'Height' => '' ),
			'required' => array( 'normal_logo_show2', '=', true ),
		),
		
		//Vertical Light Color Logo
		array(
            'id' => 'normal_logo_show3',
            'type' => 'switch',
            'title' => esc_html__('Enable Vertical Light Color Logo', 'axtra'),
            'default' => true,
        ),
		array(
			'id'       => 'vertical_light_logo',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Vertical Light Color Logo Image', 'axtra' ),
			'subtitle' => esc_html__( 'Insert site Vertical Light Color logo image', 'axtra' ),
			'required' => array( 'normal_logo_show3', '=', true ),
		),
		array(
			'id'       => 'vertical_light_logo_dimension',
			'type'     => 'dimensions',
			'title'    => esc_html__( 'Vertical Light Color Logo Dimentions', 'axtra' ),
			'subtitle' => esc_html__( 'Select Vertical Light Color Logo Dimentions', 'axtra' ),
			'units'    => array( 'em', 'px', '%' ),
			'default'  => array( 'Height' => '' ),
			'required' => array( 'normal_logo_show3', '=', true ),
		),
		
		//Vertical Dark Color Logo
		array(
            'id' => 'normal_logo_show4',
            'type' => 'switch',
            'title' => esc_html__('Enable Vertical Dark Color Logo', 'axtra'),
            'default' => true,
        ),
		array(
			'id'       => 'vertical_dark_logo',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Vertical Dark Color Logo Image', 'axtra' ),
			'subtitle' => esc_html__( 'Insert site Vertical Dark Color logo image', 'axtra' ),
			'required' => array( 'normal_logo_show4', '=', true ),
		),
		array(
			'id'       => 'vertical_dark_logo_dimension',
			'type'     => 'dimensions',
			'title'    => esc_html__( 'Vertical Dark Color Logo Dimentions', 'axtra' ),
			'subtitle' => esc_html__( 'Select Vertical Dark Color Logo Dimentions', 'axtra' ),
			'units'    => array( 'em', 'px', '%' ),
			'default'  => array( 'Height' => '' ),
			'required' => array( 'normal_logo_show4', '=', true ),
			
		),
		
		array(
			'id'       => 'logo_settings_section_end',
			'type'     => 'section',
			'indent'      => false,
		),
	),
);
