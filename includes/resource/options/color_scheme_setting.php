<?php
$styles = [];
foreach(range(1, 28) as $val) {
    $styles[$val] = sprintf(esc_html__('Style %s', 'axtra'), $val);
}

return  array(
    'title'      => esc_html__( 'Color Scheme Setting', 'axtra' ),
    'id'         => 'color_scheme_setting',
    'desc'       => '',
    'fields'     => array(
        
		array(
            'id' => 'color_scheme_loader',
            'type' => 'switch',
            'title' => esc_html__('Enable Color Scheme', 'axtra'),
            'default' => false,
        ),
		array(
			'id'       => 'main_color_scheme',
			'type'     => 'color',
			'title'    => esc_html__( 'Main Custom Color Scheme', 'axtra' ),
			'subtitle' => esc_html__( 'Choose the Custom color scheme for the theme', 'axtra' ),
			'required' => array( 'color_scheme_loader', '=', true ),
		),
		array(
			'id'       => 'secondary_color_scheme',
			'type'     => 'color',
			'title'    => esc_html__( 'Secondary Custom Color Scheme', 'axtra' ),
			'subtitle' => esc_html__( 'Choose the Custom color scheme for the theme', 'axtra' ),
			'required' => array( 'color_scheme_loader', '=', true ),
		),
	),
);
