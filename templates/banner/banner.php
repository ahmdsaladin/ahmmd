<?php
/**
 * Banner Template
 *
 * @package    WordPress
 * @subpackage Crowdyflow
 * @author     Crowdyflow
 * @version    1.0
 */

if ( $data->get( 'enable_banner' ) AND $data->get( 'banner_type' ) == 'e' AND ! empty( $data->get( 'banner_elementor' ) ) ) {
	echo Elementor\Plugin::instance()->frontend->get_builder_content_for_display( $data->get( 'banner_elementor' ) );

	return false;
}

?>
<?php if ( $data->get( 'enable_banner' ) ) : ?>

<div class="row pb-130"  style="background-image: url('<?php echo esc_url( $data->get( 'banner' ) ); ?>');">
	<?php if( $data->get( 'title' )){?>
    <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
        <div class="sec-title-wrapper">
            <h2 class="sec-title-2 animation__char_come"><?php if( $data->get( 'title' ) ) echo wp_kses( $data->get( 'title' ), true ); else wp_title( ) ; ?></h2>
        </div>
    </div>
    <?php } ?>
    <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
        <div class="blog__text ax-breadcrumb">
            <ul class="breadcrumb__content">
				<?php echo axtra_the_breadcrumb(); ?>
            </ul>
        </div>
    </div>
</div>

<?php endif; ?>