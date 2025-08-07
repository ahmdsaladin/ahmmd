<?php
/**
 * 404 page file
 *
 * @package    WordPress
 * @subpackage Axtra
 * @author     Template Path <admin@template_path.com>
 * @version    1.0
 */



?>
<?php get_header();
$data = \AXTRA\Includes\Classes\Common::instance()->data( '404' )->get();
$options = axtra_WSH()->option();
$allowed_html = wp_kses_allowed_html( 'post' );

$error_img   = $options->get( 'error_image' );
$error_img   = axtra_set( $error_img, 'url', AXTRA_URI . 'assets/images/thumb/404.png' );
if ( class_exists( '\Elementor\Plugin' ) AND $data->get( 'tpl-type' ) == 'e' AND $data->get( 'tpl-elementor' ) ) {
	echo Elementor\Plugin::instance()->frontend->get_builder_content_for_display( $data->get( 'tpl-elementor' ) );
} else {
?>

<?php if ( $data->get( 'enable_banner' ) ) : ?>
	<?php do_action( 'axtra_banner', $data );?>
<?php else:?>
<?php endif;?>    
    
    <!-- Error page start -->
    <section class="error__page">
        <div class="container line">
        	<span class="line-3"></span>
            <div class="row">
                <div class="col-xxl-12">
                    <div class="error__content">
                    	<?php if($error_img){ ?><img src="<?php echo esc_url($error_img); ?>" alt="<?php esc_attr_e('Awesome Image', 'axtra'); ?>"><?php } ?>
                    	<h2>
						<?php if( $options->get( '404_page_tagline' ) ):?>
                            <?php echo wp_kses( $options->get( '404_page_tagline' ), true );?>
                        <?php else:?>
                            <?php esc_html_e( 'Sorry! page did not found', 'axtra' );?>
                        <?php endif;?>
                        </h2>
                    	<p>
                        <?php if( $options->get( '404_page_text' ) ):?>
							<?php echo wp_kses( $options->get( '404_page_text' ), true );?>
                        <?php else:?>
                        	<?php esc_html_e( 'The page you are looking for doesnot exist or has been moved', 'axtra' );?>
                        <?php endif;?>
                        </p>
                        <?php if ( $options->get( 'back_home_btn', true ) ) : ?>
                        <div id="btn_wrapper">
                        	<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="wc-btn-primary btn-hover btn-item"><span></span> 
                            <?php 
                                if( $options->get( 'back_home_btn_label' ) ){
                                    echo wp_kses( $options->get( 'back_home_btn_label' ), true );
                                }else{
                                    esc_html_e( 'Back to Homepage', 'axtra' );
                                }
                            ?> <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Error page end -->    
        
<?php
}
get_footer('coming-soon'); ?>
