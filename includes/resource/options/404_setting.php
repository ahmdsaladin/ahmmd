<?php

return array(
	'title'      => esc_html__( '404 Page Settings', 'axtra' ),
	'id'         => '404_setting',
	'desc'       => '',
	'subsection' => true,
	'fields'     => array(
		array(
			'id'      => '404_source_type',
			'type'    => 'button_set',
			'title'   => esc_html__( '404 Source Type', 'axtra' ),
			'options' => array(
				'd' => esc_html__( 'Default', 'axtra' ),
				'e' => esc_html__( 'Elementor', 'axtra' ),
			),
			'default' => 'd',
		),
		array(
			'id'       => '404_elementor_template',
			'type'     => 'select',
			'title'    => __( 'Template', 'axtra' ),
			'data'     => 'posts',
			'args'     => [
				'post_type' => [ 'elementor_library' ],
			],
			'required' => [ '404_source_type', '=', 'e' ],
		),
		array(
			'id'       => '404_default_st',
			'type'     => 'section',
			'title'    => esc_html__( '404 Default', 'axtra' ),
			'indent'   => true,
			'required' => [ '404_source_type', '=', 'd' ],
		),
		array(
			'id'       => 'error_image',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( '404 Error Image', 'axtra' ),
			'desc'     => esc_html__( 'Insert 404 image', 'axtra' ),
			'default'  => '',
		),
		array(
			'id'    => '404_page_tagline',
			'type'  => 'textarea',
			'title' => esc_html__( '404 Page Tag Line', 'axtra' ),
			'desc'  => esc_html__( 'Enter 404 page Tag Line that you want to show.', 'axtra' ),
		),
		array(
			'id'    => '404_page_text',
			'type'  => 'textarea',
			'title' => esc_html__( '404 Page Description', 'axtra' ),
			'desc'  => esc_html__( 'Enter 404 page description that you want to show.', 'axtra' ),
		),		
		array(
			'id'    => 'back_home_btn',
			'type'  => 'switch',
			'title' => esc_html__( 'Show Button', 'axtra' ),
			'desc'  => esc_html__( 'Enable to show back to home button.', 'axtra' ),
			'default'  => true,
		),
		array(
			'id'       => 'back_home_btn_label',
			'type'     => 'text',
			'title'    => esc_html__( 'Button Label', 'axtra' ),
			'desc'     => esc_html__( 'Enter back to home button label that you want to show.', 'axtra' ),
			'default'  => esc_html__( 'Back To Homepage', 'axtra' ),
			'required' => array( 'back_home_btn', '=', true ),
		),
		array(
			'id'     => '404_post_settings_end',
			'type'   => 'section',
			'indent' => false,
		),
	),
);