<?php

return array(
	'title'      => esc_html__( 'Single Post Settings', 'axtra' ),
	'id'         => 'single_post_setting',
	'desc'       => '',
	'subsection' => true,
	'fields'     => array(
		array(
			'id'      => 'single_source_type',
			'type'    => 'button_set',
			'title'   => esc_html__( 'Single Post Source Type', 'axtra' ),
			'options' => array(
				'd' => esc_html__( 'Default', 'axtra' ),
				'e' => esc_html__( 'Elementor', 'axtra' ),
			),
			'default' => 'd',
		),
		
		array(
			'id'       => 'single_default_st',
			'type'     => 'section',
			'title'    => esc_html__( 'Post Default', 'axtra' ),
			'indent'   => true,
			'required' => [ 'single_source_type', '=', 'd' ],
		),
		array(
			'id'      => 'single_post_date',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Date', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show post publish date on posts detail page', 'axtra' ),
			'default' => true,
		),
		array(
			'id'      => 'single_post_author',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Author', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show author on posts detail page', 'axtra' ),
			'default' => true,
		),
		array(
			'id'      => 'single_post_comments',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Comments', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show number of comments on posts single page', 'axtra' ),
			'default' => true,
		),
		array(
			'id'      => 'facebook_sharing',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Facebook Post Share', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show Post Share to Facebook', 'axtra' ),
			'default' => false,
		),
		array(
			'id'      => 'twitter_sharing',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Twitter Post Share', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show Post Share to Twitter', 'axtra' ),
			'default' => false,
		),
		array(
			'id'      => 'linkedin_sharing',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Linkedin Post Share', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show Post Share to Linkedin', 'axtra' ),
			'default' => false,
		),
		array(
			'id'      => 'pinterest_sharing',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Pinterest Post Share', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show Post Share to Pinterest', 'axtra' ),
			'default' => false,
		),
		array(
			'id'      => 'reddit_sharing',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Reddit Post Share', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show Post Share to Reddit', 'axtra' ),
			'default' => false,
		),
		array(
			'id'      => 'tumblr_sharing',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Tumblr Post Share', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show Post Share to Tumblr', 'axtra' ),
			'default' => false,
		),
		array(
			'id'      => 'digg_sharing',
			'type'    => 'switch',
			'title'   => esc_html__( 'Show Digg Post Share', 'axtra' ),
			'desc'    => esc_html__( 'Enable to show Post Share to Digg', 'axtra' ),
			'default' => false,
		),
		
		array(
			'id'       => 'single_section_default_ed',
			'type'     => 'section',
			'indent'   => false,
			'required' => [ 'single_source_type', '=', 'd' ],
		),
	),
);





