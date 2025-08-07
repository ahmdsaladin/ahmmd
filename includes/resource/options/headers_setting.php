<?php
return array(
	'title'      => esc_html__( 'Header Setting', 'axtra' ),
	'id'         => 'headers_setting',
	'desc'       => '',
	'subsection' => false,
	'fields'     => array(
		array(
			'id'      => 'header_source_type',
			'type'    => 'button_set',
			'title'   => esc_html__( 'Header Source Type', 'axtra' ),
			'options' => array(
				'd' => esc_html__( 'Default', 'axtra' ),
				'e' => esc_html__( 'Elementor', 'axtra' ),
			),
			'default' => 'd',
		),
		array(
			'id'       => 'header_elementor_template',
			'type'     => 'select',
			'title'    => __( 'Template', 'axtra' ),
			'data'     => 'posts',
			'args'     => [
				'post_type' => [ 'elementor_library' ],
				'posts_per_page'	=> -1
			],
			'required' => [ 'header_source_type', '=', 'e' ],
		),
		array(
			'id'       => 'header_style_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Settings', 'axtra' ),
			'required' => array( 'header_source_type', '=', 'd' ),
		),
		array(
			'id' => 'yt_dark_layout',
			'type' => 'switch',
			'title' => esc_html__('ON/OFF Dark Scheme', 'axtra'),
			'desc' => esc_html__('Enable to Show Dark Scheme', 'axtra'),
		),
		//Header Settings
		array(
		    'id'       => 'header_style_settings',
		    'type'     => 'image_select',
		    'title'    => esc_html__( 'Choose Header Styles', 'axtra' ),
		    'subtitle' => esc_html__( 'Choose Header Styles', 'axtra' ),
		    'options'  => array(

			    'header_v1'  => array(
				    'alt' => esc_html__( 'Header Style 1', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v1.png',
			    ),
			    'header_v2'  => array(
				    'alt' => esc_html__( 'Header Style 2', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v2.png',
			    ),
				'header_v3'  => array(
				    'alt' => esc_html__( 'Header Style 3', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v3.png',
			    ),
				'header_v4'  => array(
				    'alt' => esc_html__( 'Header Style 4', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v4.png',
			    ),
				'header_v5'  => array(
				    'alt' => esc_html__( 'Header Style 5', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v5.png',
			    ),
				'header_v6'  => array(
				    'alt' => esc_html__( 'Header Style 6', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v6.png',
			    ),
				'header_v7'  => array(
				    'alt' => esc_html__( 'Header Style 7', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v7.png',
			    ),
				'header_v8'  => array(
				    'alt' => esc_html__( 'Header Style 8', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v8.png',
			    ),
				'header_v9'  => array(
				    'alt' => esc_html__( 'Header Style 9', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v9.png',
			    ),
				'header_v10'  => array(
				    'alt' => esc_html__( 'Header Style 10', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v10.png',
			    ),
				'header_v11'  => array(
				    'alt' => esc_html__( 'Header Style 11', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/header/header_v11.png',
			    ),
			),
			'required' => array( 'header_source_type', '=', 'd' ),
			'default' => 'header_v7',
	    ),

		/***********************************************************************
								Header Version 1 Start
		************************************************************************/
		array(
			'id'       => 'header_v1_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style One Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v1' ),
		),
		//Search Form Icon
		array(
            'id' => 'show_search_form_v1',
            'type' => 'switch',
            'title' => esc_html__('ON/OFF Search Form Icon', 'axtra'),
            'default' => false,
            'required' => array( 'header_style_settings', '=', 'header_v1' ),
        ),
		/***********************************************************************
								Header Version 2 Start
		************************************************************************/
		array(
			'id'       => 'header_v2_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Two Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v2' ),
		),
		
        /***********************************************************************
								Header Version 3 Start
		************************************************************************/
		array(
			'id'       => 'header_v3_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Three Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v3' ),
		),
		//Phone Number
		array(
            'id' => 'show_phone_no_v3',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Phone Information', 'axtra'),
            'default' => false,
            'required' => array( 'header_style_settings', '=', 'header_v3' ),
        ),
		array(
			'id'      => 'phone_title_v3',
			'type'    => 'text',
			'title'   => __( 'Phone Title', 'axtra' ),
			'required' => array( 'show_phone_no_v3', '=', true ),
		),
		array(
			'id'      => 'phone_no_v3',
			'type'    => 'text',
			'title'   => __( 'Phone Number', 'axtra' ),
			'required' => array( 'show_phone_no_v3', '=', true ),
		),
		
		/***********************************************************************
								Header Version 4 Start
		************************************************************************/
		array(
			'id'       => 'header_v4_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Four Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v4' ),
		),
		/***********************************************************************
								Header Version 5 Start
		************************************************************************/
		array(
			'id'       => 'header_v5_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Five Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v5' ),
		),
		/***********************************************************************
								Header Version 6 Start
		************************************************************************/
		array(
			'id'       => 'header_v6_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Six Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v6' ),
		),
		/***********************************************************************
								Header Version 7 Start
		************************************************************************/
		array(
			'id'       => 'header_v7_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Seven Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v7' ),
		),
		//Phone Number
		array(
            'id' => 'show_phone_no_v7',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Phone Information', 'axtra'),
            'default' => false,
            'required' => array( 'header_style_settings', '=', 'header_v7' ),
        ),
		array(
			'id'      => 'phone_title_v7',
			'type'    => 'text',
			'title'   => __( 'Phone Title', 'axtra' ),
			'required' => array( 'show_phone_no_v7', '=', true ),
		),
		array(
			'id'      => 'phone_no_v7',
			'type'    => 'text',
			'title'   => __( 'Phone Number', 'axtra' ),
			'required' => array( 'show_phone_no_v7', '=', true ),
		),
		/***********************************************************************
								Header Version 8 Start
		************************************************************************/
		array(
			'id'       => 'header_v8_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Eight Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v8' ),
		),
		//Search Form Icon
		array(
            'id' => 'show_search_form_v8',
            'type' => 'switch',
            'title' => esc_html__('ON/OFF Search Form Icon', 'axtra'),
            'default' => false,
            'required' => array( 'header_style_settings', '=', 'header_v8' ),
        ),
		
		/***********************************************************************
								Header Version 9 Start
		************************************************************************/
		array(
			'id'       => 'header_v9_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Nine Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v9' ),
		),
		
		/***********************************************************************
								Header Version 10 Start
		************************************************************************/
		array(
			'id'       => 'header_v10_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Ten Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v10' ),
		),
		
		/***********************************************************************
								Header Version 11 Start
		************************************************************************/
		array(
			'id'       => 'header_v11_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Header Style Eleven Settings', 'axtra' ),
			'required' => array( 'header_style_settings', '=', 'header_v11' ),
		),
		
		array(
			'id'       => 'header_style_section_end',
			'type'     => 'section',
			'indent'      => false,
			'required' => [ 'header_source_type', '=', 'd' ],
		),
	),
);
