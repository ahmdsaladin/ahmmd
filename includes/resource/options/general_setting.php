<?php
$styles = [];
foreach(range(1, 28) as $val) {
    $styles[$val] = sprintf(esc_html__('Style %s', 'axtra'), $val);
}

return  array(
    'title'      => esc_html__( 'General Setting', 'axtra' ),
    'id'         => 'general_setting',
    'desc'       => '',
    'icon'       => 'el el-wrench',
    'fields'     => array(
        array(
            'id' => 'theme_preloader',
            'type' => 'switch',
            'title' => esc_html__('Enable Preloader', 'axtra'),
            'default' => false,
        ),
		array(
            'id' => 'show_cursor',
            'type' => 'switch',
            'title' => esc_html__('Enable Cursor', 'axtra'),
            'default' => false,
        ),
		array(
            'id' => 'show_layout_switcher',
            'type' => 'switch',
            'title' => esc_html__('ON/OFF Layout Switcher', 'axtra'),
            'default' => false,
        ),
		array(
            'id' => 'show_smooth_scroll',
            'type' => 'switch',
            'title' => esc_html__('ON/OFF Smooth Scroll', 'axtra'),
            'default' => false,
        ),
		array(
            'id' => 'show_scroll_top_btn',
            'type' => 'switch',
            'title' => esc_html__('ON/OFF Scroll To Top Arrow', 'axtra'),
            'default' => false,
        ),
		array(
            'id' => 'rtl_support',
            'type' => 'switch',
            'title' => esc_html__('ON/OFF RTL', 'axtra'),
            'default' => false,
        ),
    ),
);
