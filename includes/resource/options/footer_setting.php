<?php

return array(
	'title'      => esc_html__( 'Footer Setting', 'axtra' ),
	'id'         => 'footer_setting',
	'desc'       => '',
	'subsection' => false,
	'fields'     => array(
		array(
			'id'      => 'footer_source_type',
			'type'    => 'button_set',
			'title'   => esc_html__( 'Footer Source Type', 'axtra' ),
			'options' => array(
				'd' => esc_html__( 'Default', 'axtra' ),
				'e' => esc_html__( 'Elementor', 'axtra' ),
			),
			'default' => 'd',
		),
		array(
			'id'       => 'footer_elementor_template',
			'type'     => 'select',
			'title'    => __( 'Template', 'axtra' ),
			'data'     => 'posts',
			'args'     => [
				'post_type' => [ 'elementor_library' ],
				'posts_per_page'	=> -1
			],
			'required' => [ 'footer_source_type', '=', 'e' ],
		),
		array(
			'id'       => 'footer_style_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Footer Settings', 'axtra' ),
			'required' => array( 'footer_source_type', '=', 'd' ),
		),
		array(
		    'id'       => 'footer_style_settings',
		    'type'     => 'image_select',
		    'title'    => esc_html__( 'Choose Footer Styles', 'axtra' ),
		    'subtitle' => esc_html__( 'Choose Footer Styles', 'axtra' ),
		    'options'  => array(

			    'footer_v1'  => array(
				    'alt' => esc_html__( 'Footer Style 1', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/footer/footer_v1.png',
			    ),
				'footer_v2'  => array(
				    'alt' => esc_html__( 'Footer Style 2', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/footer/footer_v2.png',
			    ),
				'footer_v3'  => array(
				    'alt' => esc_html__( 'Footer Style 3', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/footer/footer_v3.png',
			    ),
				'footer_v4'  => array(
				    'alt' => esc_html__( 'Footer Style 4', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/footer/footer_v4.png',
			    ),
				'footer_v5'  => array(
				    'alt' => esc_html__( 'Footer Style 5', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/footer/footer_v5.png',
			    ),
				'footer_v6'  => array(
				    'alt' => esc_html__( 'Footer Style 6', 'axtra' ),
				    'img' => get_template_directory_uri() . '/assets/images/redux/footer/footer_v6.png',
			    ),
			),
			'required' => array( 'footer_source_type', '=', 'd' ),
			'default' => 'footer_v1',
	    ),
		
		
		/***********************************************************************
								Footer Version 1 Start
		************************************************************************/
		array(
			'id'       => 'footer_v1_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Footer Style One Settings', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v1' ),
		),
		array(
			'id'       => 'footer_logo_img',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Footer Logo Image', 'axtra' ),
			'subtitle' => esc_html__( 'Insert Footer logo image', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v1' ),
		),
		array(
			'id'      => 'footer_text_v1',
			'type'    => 'textarea',
			'title'   => __( 'Description', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v1' ),
		),
		
		//Social Ifno
		array(
            'id' => 'show_footer_social_info',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Social Icons', 'axtra'),
            'default' => false,
			'required' => array( 'footer_style_settings', '=', 'footer_v1' ),
        ),
		
		//Facebook Info
		array(
            'id' => 'show_footer_facebook_info_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Facebook Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_footer_social_info', '=', true ),
        ),
		array(
			'id'      => 'footer_facebook_title_v1',
			'type'    => 'text',
			'title'   => __( 'Facebook Title', 'axtra' ),
			'required' => array( 'show_footer_facebook_info_v1', '=', true ),
		),
		array(
			'id'      => 'footer_facebook_link_v1',
			'type'    => 'text',
			'title'   => __( 'Facebook Link', 'axtra' ),
			'required' => array( 'show_footer_facebook_info_v1', '=', true ),
		),
		
		//Twitter Info
		array(
            'id' => 'show_footer_twitter_info_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Twitter Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_footer_social_info', '=', true ),
        ),
		array(
			'id'      => 'footer_twitter_title_v1',
			'type'    => 'text',
			'title'   => __( 'Twitter Title', 'axtra' ),
			'required' => array( 'show_footer_twitter_info_v1', '=', true ),
		),
		array(
			'id'      => 'footer_twitter_link_v1',
			'type'    => 'text',
			'title'   => __( 'Twitter Link', 'axtra' ),
			'required' => array( 'show_footer_twitter_info_v1', '=', true ),
		),
		
		//Linkedin Info
		array(
            'id' => 'show_footer_linkedin_info_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Linkedin Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_footer_social_info', '=', true ),
        ),
		array(
			'id'      => 'footer_linkedin_title_v1',
			'type'    => 'text',
			'title'   => __( 'Linkedin Title', 'axtra' ),
			'required' => array( 'show_footer_linkedin_info_v1', '=', true ),
		),
		array(
			'id'      => 'footer_linkedin_link_v1',
			'type'    => 'text',
			'title'   => __( 'Linkedin Link', 'axtra' ),
			'required' => array( 'show_footer_linkedin_info_v1', '=', true ),
		),
		
		//Instagram Info
		array(
            'id' => 'show_footer_instagram_info_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Instagram Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_footer_social_info', '=', true ),
        ),
		array(
			'id'      => 'footer_instagram_title_v1',
			'type'    => 'text',
			'title'   => __( 'Instagram Title', 'axtra' ),
			'required' => array( 'show_footer_instagram_info_v1', '=', true ),
		),
		array(
			'id'      => 'footer_instagram_link_v1',
			'type'    => 'text',
			'title'   => __( 'Instagram Link', 'axtra' ),
			'required' => array( 'show_footer_instagram_info_v1', '=', true ),
		),
		
		//Lets Talk Button
		array(
            'id' => 'show_talk_btn_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Lets Talk Button', 'axtra'),
            'default' => false,
			'required' => array( 'footer_style_settings', '=', 'footer_v1' ),
        ),
		array(
			'id'      => 'footer_btn_title_v1',
			'type'    => 'text',
			'title'   => __( 'Talk Button Title', 'axtra' ),
			'required' => array( 'show_talk_btn_v1', '=', true ),
		),
		array(
			'id'      => 'footer_btn_link_v1',
			'type'    => 'text',
			'title'   => __( 'Talk Button Link', 'axtra' ),
			'required' => array( 'show_talk_btn_v1', '=', true ),
		),
		
		//Copyright
		array(
			'id'      => 'footer_v1_copyright_text',
			'type'    => 'textarea',
			'title'   => __( 'Copyright Text', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v1' ),
		),
		
		//Footer Menu
		array(
            'id' => 'show_footer_menu_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Footer Menu', 'axtra'),
            'default' => true,
			'required' => array( 'footer_style_settings', '=', 'footer_v1' ),
        ),
		
		/***********************************************************************
								Footer Version 2 Start
		************************************************************************/
		array(
			'id'       => 'footer_v2_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Footer Style Two Settings', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v2' ),
		),
		//Footer Topbar Info
		array(
            'id' => 'show_footer_topbar_v2',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Footer Top', 'axtra'),
            'default' => false,
            'required' => array( 'footer_style_settings', '=', 'footer_v2' ),
        ),
		array(
			'id'      => 'footer_cta_title_v2',
			'type'    => 'text',
			'title'   => __( 'Title', 'axtra' ),
			'required' => array( 'show_footer_topbar_v2', '=', true ),
		),
		array(
			'id'      => 'footer_cta_text_v2',
			'type'    => 'textarea',
			'title'   => __( 'Text', 'axtra' ),
			'required' => array( 'show_footer_topbar_v2', '=', true ),
		),
		
		//Footer Middle Info
		array(
            'id' => 'show_footer_form_area',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Footer Form Section', 'axtra'),
            'default' => false,
            'required' => array( 'footer_style_settings', '=', 'footer_v2' ),
        ),
		//London Info
		array(
			'id'      => 'footer_country_name_v2',
			'type'    => 'text',
			'title'   => __( 'Country Name V1', 'axtra' ),
			'required' => array( 'show_footer_form_area', '=', true ),
		),
		array(
			'id'      => 'footer_country_address_v2',
			'type'    => 'text',
			'title'   => __( 'Country Addrss V1', 'axtra' ),
			'required' => array( 'show_footer_form_area', '=', true ),
		),
		//New York Info
		array(
			'id'      => 'footer_country_name_v2_2',
			'type'    => 'text',
			'title'   => __( 'Country Name V2', 'axtra' ),
			'required' => array( 'show_footer_form_area', '=', true ),
		),
		array(
			'id'      => 'footer_country_address_v2_2',
			'type'    => 'text',
			'title'   => __( 'Country Addrss V2', 'axtra' ),
			'required' => array( 'show_footer_form_area', '=', true ),
		),
		//Mailchimp Form
		array(
            'id' => 'show_newsletter_form_url_v2',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Footer Mailchimp Form', 'axtra'),
            'default' => false,
			'required' => array( 'show_footer_form_area', '=', true ),
        ),
		array(
			'id'      => 'newsletter_form_url_v2',
			'type'    => 'text',
			'title'   => __( 'Mailchimp Form Url', 'axtra' ),
			'required' => array( 'show_newsletter_form_url_v2', '=', true ),
		),
		
		//Copyright
		array(
			'id'      => 'footer_v2_copyright_text',
			'type'    => 'textarea',
			'title'   => __( 'Copyright Text', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v2' ),
		),
		
		//Footer Menu
		array(
            'id' => 'show_footer_menu_v2',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Footer Menu', 'axtra'),
            'default' => false,
			'required' => array( 'footer_style_settings', '=', 'footer_v2' ),
        ),
		
		/***********************************************************************
								Footer Version 3 Start
		************************************************************************/
		array(
			'id'       => 'footer_v3_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Footer Style Three Settings', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v3' ),
		),
		//Footer BG Image
		array(
			'id'       => 'footer_bg_img_3',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Footer BG Image', 'axtra' ),
			'subtitle' => esc_html__( 'Insert Footer BG image', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v3' ),
		),
		
		//Copyright
		array(
			'id'      => 'footer_v3_copyright_text',
			'type'    => 'textarea',
			'title'   => __( 'Copyright Text', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v3' ),
		),
		
		//Footer Mailchimp Form
		array(
            'id' => 'show_newsletter_form_url_v3',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Footer Mailchimp Form', 'axtra'),
            'default' => false,
			'required' => array( 'footer_style_settings', '=', 'footer_v3' ),
        ),
		array(
			'id'      => 'newsletter_form_url_v3',
			'type'    => 'text',
			'title'   => __( 'Mailchimp Form Url', 'axtra' ),
			'required' => array( 'show_newsletter_form_url_v3', '=', true ),
		),
		
		/***********************************************************************
								Footer Version 4 Start
		************************************************************************/
		array(
			'id'       => 'footer_v4_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Footer Style Four Settings', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v4' ),
		),
		
		//Footer Line Pattern 
		array(
            'id' => 'show_line_pattern_v4',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Footer Line Pattern', 'axtra'),
            'default' => false,
			'required' => array( 'footer_style_settings', '=', 'footer_v4' ),
        ),
		
		//Copyright
		array(
			'id'      => 'footer_v4_copyright_text',
			'type'    => 'textarea',
			'title'   => __( 'Copyright Text', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v4' ),
		),
		
		//Footer Menu
		array(
            'id' => 'show_footer_menu_v4',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Footer Menu', 'axtra'),
            'default' => false,
			'required' => array( 'footer_style_settings', '=', 'footer_v4' ),
        ),		
		
		/***********************************************************************
								Footer Version 5 Start
		************************************************************************/
		array(
			'id'       => 'footer_v5_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Footer Style Five Settings', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v5' ),
		),
		array(
			'id'       => 'footer_dark_icon_logo_img',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Footer Dark Icon Logo Image', 'axtra' ),
			'subtitle' => esc_html__( 'Insert Footer Dark Icon logo image', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v5' ),
		),
		array(
			'id'       => 'footer_light_icon_logo_img',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Footer Light Icon Logo Image', 'axtra' ),
			'subtitle' => esc_html__( 'Insert Footer Light Icon logo image', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v5' ),
		),
		
		//Social Ifno
		array(
            'id' => 'show_footer_social_info_v5',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Social Icons', 'axtra'),
            'default' => false,
			'required' => array( 'footer_style_settings', '=', 'footer_v5' ),
        ),
		
		//Facebook Info
		array(
            'id' => 'show_footer_facebook_info_v5',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Facebook Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_footer_social_info_v5', '=', true ),
        ),
		array(
			'id'      => 'footer_facebook_title_v5',
			'type'    => 'text',
			'title'   => __( 'Facebook Title', 'axtra' ),
			'required' => array( 'show_footer_facebook_info_v5', '=', true ),
		),
		array(
			'id'      => 'footer_facebook_link_v5',
			'type'    => 'text',
			'title'   => __( 'Facebook Link', 'axtra' ),
			'required' => array( 'show_footer_facebook_info_v5', '=', true ),
		),
		
		//Twitter Info
		array(
            'id' => 'show_footer_twitter_info_v5',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Twitter Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_footer_social_info_v5', '=', true ),
        ),
		array(
			'id'      => 'footer_twitter_title_v5',
			'type'    => 'text',
			'title'   => __( 'Twitter Title', 'axtra' ),
			'required' => array( 'show_footer_twitter_info_v5', '=', true ),
		),
		array(
			'id'      => 'footer_twitter_link_v5',
			'type'    => 'text',
			'title'   => __( 'Twitter Link', 'axtra' ),
			'required' => array( 'show_footer_twitter_info_v5', '=', true ),
		),
		
		//Behance Info
		array(
            'id' => 'show_footer_behance_info_v5',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Behance Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_footer_social_info_v5', '=', true ),
        ),
		array(
			'id'      => 'footer_behance_title_v5',
			'type'    => 'text',
			'title'   => __( 'Behance Title', 'axtra' ),
			'required' => array( 'show_footer_behance_info_v5', '=', true ),
		),
		array(
			'id'      => 'footer_behance_link_v5',
			'type'    => 'text',
			'title'   => __( 'Behance Link', 'axtra' ),
			'required' => array( 'show_footer_behance_info_v5', '=', true ),
		),
		
		//Dribbble Info
		array(
            'id' => 'show_footer_dribbble_info_v5',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Dribbble Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_footer_social_info_v5', '=', true ),
        ),
		array(
			'id'      => 'footer_dribbble_title_v5',
			'type'    => 'text',
			'title'   => __( 'Dribbble Title', 'axtra' ),
			'required' => array( 'show_footer_dribbble_info_v5', '=', true ),
		),
		array(
			'id'      => 'footer_dribbble_link_v5',
			'type'    => 'text',
			'title'   => __( 'Dribbble Link', 'axtra' ),
			'required' => array( 'show_footer_dribbble_info_v5', '=', true ),
		),
				
		//Copyright
		array(
			'id'      => 'footer_v5_copyright_text',
			'type'    => 'textarea',
			'title'   => __( 'Copyright Text', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v5' ),
		),
		
		/***********************************************************************
								Footer Version 6 Start
		************************************************************************/
		array(
			'id'       => 'footer_v6_settings_section_start',
			'type'     => 'section',
			'indent'      => true,
			'title'    => esc_html__( 'Footer Style Six Settings', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v6' ),
		),
		//Title Ifno
		array(
            'id' => 'show_footer_topbar_v6',
            'type' => 'switch',
            'title' => esc_html__('Enable/Disable Title Section', 'axtra'),
            'default' => false,
			'required' => array( 'footer_style_settings', '=', 'footer_v6' ),
        ),
		//Title Info
		array(
			'id'      => 'footer_cta_title_v6',
			'type'    => 'text',
			'title'   => __( 'Main Title', 'axtra' ),
			'required' => array( 'show_footer_topbar_v6', '=', true ),
		),
		
		//Button Info
		array(
			'id'      => 'footer_btn_title_v6',
			'type'    => 'text',
			'title'   => __( 'Button Title', 'axtra' ),
			'required' => array( 'show_footer_topbar_v6', '=', true ),
		),
		array(
			'id'      => 'footer_btn_link_v6',
			'type'    => 'text',
			'title'   => __( 'Button Link', 'axtra' ),
			'required' => array( 'show_footer_topbar_v6', '=', true ),
		),
		
		//Copyright
		array(
			'id'      => 'footer_v6_copyright_text',
			'type'    => 'textarea',
			'title'   => __( 'Copyright Text', 'axtra' ),
			'required' => array( 'footer_style_settings', '=', 'footer_v6' ),
		),
		
		array(
			'id'       => 'footer_default_ed',
			'type'     => 'section',
			'indent'   => false,
			'required' => [ 'footer_source_type', '=', 'd' ],
		),
	),
);
