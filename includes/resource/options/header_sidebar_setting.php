<?php
$styles = [];
foreach(range(1, 28) as $val) {
    $styles[$val] = sprintf(esc_html__('Style %s', 'axtra'), $val);
}

return  array(
    'title'      => esc_html__( 'Header Sidebar Setting', 'axtra' ),
    'id'         => 'header_sidebar_setting',
    'desc'       => '',
    'icon'       => 'el el-wrench',
    'fields'     => array(
        array(
            'id' => 'show_sidebar_info',
            'type' => 'switch',
            'title' => esc_html__('Enable Header Sidebar Info', 'axtra'),
            'default' => false,
        ),
		//Follow Us
		array(
            'id' => 'show_sidebar_follow_us',
            'type' => 'switch',
            'title' => esc_html__('Enable Social Information', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_info', '=', true ),
        ),
		array(
            'id' => 'show_sidebar_social_title',
            'type' => 'switch',
            'title' => esc_html__('Enable Social Title', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_follow_us', '=', true ),
        ),
		array(
			'id'      => 'sidebar_social_title',
			'type'    => 'text',
			'title'   => __( 'Social Title', 'axtra' ),
			'required' => array( 'show_sidebar_social_title', '=', true ),
		),
		//Dribbble Info
		array(
            'id' => 'show_sidebar_dribbble_info',
            'type' => 'switch',
            'title' => esc_html__('Enable dribbble Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_follow_us', '=', true ),
        ),
		array(
			'id'      => 'sidebar_dribbble_title',
			'type'    => 'text',
			'title'   => __( 'Dribbble Title', 'axtra' ),
			'required' => array( 'show_sidebar_dribbble_info', '=', true ),
		),
		array(
			'id'      => 'sidebar_dribbble_link',
			'type'    => 'text',
			'title'   => __( 'Dribbble Link', 'axtra' ),
			'required' => array( 'show_sidebar_dribbble_info', '=', true ),
		),
		//Behance Info
		array(
            'id' => 'show_sidebar_behance_info',
            'type' => 'switch',
            'title' => esc_html__('Enable Behance Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_follow_us', '=', true ),
        ),
		array(
			'id'      => 'sidebar_behance_title',
			'type'    => 'text',
			'title'   => __( 'Behance Title', 'axtra' ),
			'required' => array( 'show_sidebar_behance_info', '=', true ),
		),
		array(
			'id'      => 'sidebar_behance_link',
			'type'    => 'text',
			'title'   => __( 'Behance Link', 'axtra' ),
			'required' => array( 'show_sidebar_behance_info', '=', true ),
		),
		//Instagram Info
		array(
            'id' => 'show_sidebar_instagram_info',
            'type' => 'switch',
            'title' => esc_html__('Enable Instagram Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_follow_us', '=', true ),
        ),
		array(
			'id'      => 'sidebar_instagram_title',
			'type'    => 'text',
			'title'   => __( 'Instagram Title', 'axtra' ),
			'required' => array( 'show_sidebar_instagram_info', '=', true ),
		),
		array(
			'id'      => 'sidebar_instagram_link',
			'type'    => 'text',
			'title'   => __( 'Instagram Link', 'axtra' ),
			'required' => array( 'show_sidebar_instagram_info', '=', true ),
		),
		//Facebook Info
		array(
            'id' => 'show_sidebar_facebook_info',
            'type' => 'switch',
            'title' => esc_html__('Enable facebook Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_follow_us', '=', true ),
        ),
		array(
			'id'      => 'sidebar_facebook_title',
			'type'    => 'text',
			'title'   => __( 'Facebook Title', 'axtra' ),
			'required' => array( 'show_sidebar_facebook_info', '=', true ),
		),
		array(
			'id'      => 'sidebar_facebook_link',
			'type'    => 'text',
			'title'   => __( 'Facebook Link', 'axtra' ),
			'required' => array( 'show_sidebar_facebook_info', '=', true ),
		),
		//Twitter Info
		array(
            'id' => 'show_sidebar_twitter_info',
            'type' => 'switch',
            'title' => esc_html__('Enable Twitter Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_follow_us', '=', true ),
        ),
		array(
			'id'      => 'sidebar_twitter_title',
			'type'    => 'text',
			'title'   => __( 'Twitter Title', 'axtra' ),
			'required' => array( 'show_sidebar_twitter_info', '=', true ),
		),
		array(
			'id'      => 'sidebar_twitter_link',
			'type'    => 'text',
			'title'   => __( 'Twitter Link', 'axtra' ),
			'required' => array( 'show_sidebar_twitter_info', '=', true ),
		),
		//YouTube Info
		array(
            'id' => 'show_sidebar_youTube_info',
            'type' => 'switch',
            'title' => esc_html__('Enable YouTube Info', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_follow_us', '=', true ),
        ),
		array(
			'id'      => 'sidebar_youTube_title',
			'type'    => 'text',
			'title'   => __( 'YouTube Title', 'axtra' ),
			'required' => array( 'show_sidebar_youTube_info', '=', true ),
		),
		array(
			'id'      => 'sidebar_youTube_link',
			'type'    => 'text',
			'title'   => __( 'YouTube Link', 'axtra' ),
			'required' => array( 'show_sidebar_youTube_info', '=', true ),
		),
		//Sidebar Menu
		array(
            'id' => 'show_sidebar_menu',
            'type' => 'switch',
            'title' => esc_html__('Enable Sidebar Menu List', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_info', '=', true ),
        ),
		//Sidebar Search Form
		array(
            'id' => 'show_sidebar_search_form',
            'type' => 'switch',
            'title' => esc_html__('Enable Sidebar Search Form', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_info', '=', true ),
        ),
		//Sidebar Contact Information
		array(
            'id' => 'show_contact_info_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable Contact Information', 'axtra'),
            'default' => false,
			'required' => array( 'show_sidebar_info', '=', true ),
        ),
		//Title
		array(
            'id' => 'show_sidebar_info_title_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable Contact Info Title', 'axtra'),
            'default' => false,
			'required' => array( 'show_contact_info_v1', '=', true ),
        ),
		array(
			'id'      => 'sidebar_info_title_v1',
			'type'    => 'text',
			'title'   => __( 'Title', 'axtra' ),
			'required' => array( 'show_sidebar_info_title_v1', '=', true ),
		),
		//Phone Number
		array(
            'id' => 'show_sidebar_phone_no_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable Sidebar Phone Number', 'axtra'),
            'default' => false,
			'required' => array( 'show_contact_info_v1', '=', true ),
        ),
		array(
			'id'      => 'sidebar_phone_no_v1',
			'type'    => 'text',
			'title'   => __( 'Phone Number', 'axtra' ),
			'required' => array( 'show_sidebar_phone_no_v1', '=', true ),
		),
		//Email Address
		array(
            'id' => 'show_sidebar_email_address_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable Sidebar Email Address', 'axtra'),
            'default' => false,
			'required' => array( 'show_contact_info_v1', '=', true ),
        ),
		array(
			'id'      => 'sidebar_email_address_v1',
			'type'    => 'text',
			'title'   => __( 'Email Address', 'axtra' ),
			'required' => array( 'show_sidebar_email_address_v1', '=', true ),
		),
		//Address
		array(
            'id' => 'show_sidebar_address_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable Sidebar Address', 'axtra'),
            'default' => false,
			'required' => array( 'show_contact_info_v1', '=', true ),
        ),
		array(
			'id'      => 'sidebar_address_v1',
			'type'    => 'text',
			'title'   => __( 'Address', 'axtra' ),
			'required' => array( 'show_sidebar_address_v1', '=', true ),
		),
		//Shape Image
		array(
            'id' => 'show_shape_image_v1',
            'type' => 'switch',
            'title' => esc_html__('Enable Sidebar Shape Image', 'axtra'),
            'default' => false,
			'required' => array( 'show_contact_info_v1', '=', true ),
        ),
    ),
);

