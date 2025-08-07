<?php

return array(
	'title'  => esc_html__( 'Blog Page Settings', 'axtra' ),
	'id'     => 'blog_setting',
	'desc'   => '',
	'icon'   => 'el el-indent-left',
	'fields' => array(
		array(
			'id'      => 'blog_source_type',
			'type'    => 'button_set',
			'title'   => esc_html__( 'Blog Source Type', 'axtra' ),
			'options' => array(
				'd' => esc_html__( 'Default', 'axtra' ),
				'e' => esc_html__( 'Elementor', 'axtra' ),
			),
			'default' => 'd',
		),
		array(
			'id'       => 'blog_elementor_template',
			'type'     => 'select',
			'title'    => __( 'Template', 'axtra' ),
			'data'     => 'posts',
			'args'     => [
				'post_type' => [ 'elementor_library' ],
				'posts_per_page'=> -1,
			],
			'required' => [ 'blog_source_type', '=', 'e' ],
		),

		array(
			'id'       => 'blog_default_st',
			'type'     => 'section',
			'title'    => esc_html__( 'Blog Default', 'axtra' ),
			'indent'   => true,
			'required' => [ 'blog_source_type', '=', 'd' ],
		),
		array(
			'id'       => 'blog_grid_view',
			'type'     => 'switch',
			'title'    => esc_html__( 'ON/OFF Grid View', 'axtra' ),
			'desc'     => esc_html__( 'Enable To Show The Grid View', 'axtra' ),
			'default' => false,
		),
		array(
			'id'       => 'blog_grid_column',
			'type'     => 'select',
			'title'    => esc_html__( 'Grid Column', 'axtra' ),
			'desc'     => esc_html__( 'Select Column to show at blog listing page', 'axtra' ),
			'default' => 'col-xxl-4 col-xl-4 col-lg-4 col-md-4',
			'options' => array(
				'col-xxl-6 col-xl-6 col-lg-6 col-md-6'   => '2 Column',
				'col-xxl-4 col-xl-4 col-lg-4 col-md-4'   => '3 Column',
				'col-xxl-3 col-xl-3 col-lg-3 col-md-3'   => '4 Column',
			),
			'required' => array( 'blog_grid_view', '=', true ),
		),
		array(
			'id'      => 'blog_page_banner',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Banner', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show banner on blog', 'axtra' ),
			'default' => true,
		),
		array(
			'id'       => 'blog_banner_title',
			'type'     => 'text',
			'title'    => esc_html__( 'Banner Section Title', 'axtra' ),
			'desc'     => esc_html__( 'Enter the title to show in banner section', 'axtra' ),
			'required' => array( 'blog_page_banner', '=', true ),
		),
		array(
			'id'       => 'blog_page_background',
			'type'     => 'media',
			'url'      => true,
			'title'    => esc_html__( 'Background Image', 'axtra' ),
			'desc'     => esc_html__( 'Insert background image for banner', 'axtra' ),
			'required' => array( 'blog_page_banner', '=', true ),
		),

		array(
			'id'       => 'blog_sidebar_layout',
			'type'     => 'image_select',
			'title'    => esc_html__( 'Layout', 'axtra' ),
			'subtitle' => esc_html__( 'Select main content and sidebar alignment.', 'axtra' ),
			'options'  => array(

				'left'  => array(
					'alt' => esc_html__( '2 Column Left', 'axtra' ),
					'img' => get_template_directory_uri() . '/assets/images/redux/2cl.png',
				),
				'full'  => array(
					'alt' => esc_html__( '1 Column', 'axtra' ),
					'img' => get_template_directory_uri() . '/assets/images/redux/1col.png',
				),
				'right' => array(
					'alt' => esc_html__( '2 Column Right', 'axtra' ),
					'img' => get_template_directory_uri() . '/assets/images/redux/2cr.png',
				),
			),

			'default' => 'right',
		),

		array(
			'id'       => 'blog_page_sidebar',
			'type'     => 'select',
			'title'    => esc_html__( 'Sidebar', 'axtra' ),
			'desc'     => esc_html__( 'Select sidebar to show at blog listing page', 'axtra' ),
			'required' => array(
				array( 'blog_sidebar_layout', '=', array( 'left', 'right' ) ),
			),
			'options'  => axtra_get_sidebars(),
		),
		array(
			'id'      => 'blog_post_comments',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Post Comments', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show post comments on posts listing', 'axtra' ),
			'default' => true,
		),

		array(
			'id'      => 'blog_post_author',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Author', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show author on posts listing', 'axtra' ),
			'default' => true,
		),
		array(
			'id'      => 'blog_post_date',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Post Date', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show post data on posts listing', 'axtra' ),
			'default' => true,
		),
		array(
			'id'       => 'blog_default_ed',
			'type'     => 'section',
			'indent'   => false,
			'required' => [ 'blog_source_type', '=', 'd' ],
		),
	),
);