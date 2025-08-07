<?php
/**
 * Footer Template  File
 *
 * @package AXTRA
 * @author  Template Path
 * @version 1.0
 */

$options = axtra_WSH()->option();
$allowed_html = wp_kses_allowed_html( 'post' );

$footer_bg_img_3    = $options->get( 'footer_bg_img_3' );
$footer_bg_img_3   = axtra_set( $footer_bg_img_3, 'url', AXTRA_URI . 'assets/images/thumb/footer.jpg' );

?>

<!-- Footer area start -->
<footer class="footer__area">
    <?php if($footer_bg_img_3){ ?>
    <div class="footer__top">
        <div class="container footer-line"></div>
        <img src="<?php echo esc_url($footer_bg_img_3); ?>" alt="<?php esc_attr_e('Footer Image', 'axtra'); ?>" data-speed="0.75">
    </div>
	<?php } ?>
    
    <div class="footer__btm">
        <div class="container">
            <div class="row footer__row">
                <div class="col-xxl-12">
                    <div class="footer__inner">
                        <?php if (is_active_sidebar('footer-sidebar')) { ?>
                        <?php dynamic_sidebar('footer-sidebar'); ?>
                        <?php } ?>
                        
                        <div class="footer__copyright">
                            <p><?php echo wp_kses( $options->get( 'footer_v3_copyright_text'), true ); ?></p>
                        </div>
                    	
						<?php if($options->get('show_newsletter_form_url_v3')){ ?>
                        <div class="footer__subscribe">
                            <?php echo do_shortcode($options->get('newsletter_form_url_v3')); ?>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Footer area end -->
