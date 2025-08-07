<?php

/**
 * Sidebar Template
 *
 * @package    WordPress
 * @subpackage AXTRA
 * @author     Crowdyflow
 * @version    1.0
 */

if ( class_exists( '\Elementor\Plugin' ) AND $data->get( 'sidebar_type' ) == 'e' AND $data->get( 'sidebar_elementor' ) ) {
	?>
	
	<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12">
    	<div class="blog__sidebar">
			<?php
			echo Elementor\Plugin::instance()->frontend->get_builder_content_for_display( $data->get( 'sidebar_elementor' ) );
			?>
		</div>
	</div>
	<?php
	return false;
} else {
	$options = $data->get( 'sidebar' );
}
?>

<?php if ( is_active_sidebar( $options ) ) : ?>
	<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12">
    	<div class="blog__sidebar">
			<?php dynamic_sidebar( $options ); ?>
		</div>
	</div>
<?php endif; ?>

