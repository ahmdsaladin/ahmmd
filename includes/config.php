<?php
/**
 * Theme config file.
 *
 * @package AXTRA
 * @author  Crowdyflow
 * @version 1.0
 * changed
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Restricted' );
}

$config = array();

$config['default']['axtra_main_header'][] 	= array( 'axtra_main_header_area', 99 );

$config['default']['axtra_main_footer'][] 	= array( 'axtra_main_footer_area', 99 );

$config['default']['axtra_sidebar'][] 	    = array( 'axtra_sidebar', 99 );

$config['default']['axtra_banner'][] 	    = array( 'axtra_banner', 99 );


return $config;
