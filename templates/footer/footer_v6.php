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
?>

    <!-- Footer area start -->
    <footer class="footer__area-8 pt-120">
        <?php if($options->get('show_footer_topbar_v6')){ ?>
        <div class="footer__top-2 text-anim">
            <div class="contact_wrap">
                
				<?php if($options->get('footer_cta_title_v6')){ ?>
                <div class="swiper roll__slider2">
                    <div class="swiper-wrapper roll__wrapper">
                        <div class="swiper-slide">
                        	<h2 class="rollslide_title-1"><?php echo wp_kses($options->get('footer_cta_title_v6'), true); ?></h2>
                        </div>
                        <div class="swiper-slide">
                        	<h2 class="rollslide_title-1"><?php echo wp_kses($options->get('footer_cta_title_v6'), true); ?></h2>
                        </div>
                    </div>
                </div>
            	<?php } ?>
                
                <?php if($options->get('footer_btn_link_v6') || $options->get('footer_btn_title_v6')){ ?>
            	<a href="<?php echo esc_url($options->get('footer_btn_link_v6')); ?>" class="link"><?php echo wp_kses($options->get('footer_btn_title_v6'), true); ?></a>
                <?php } ?>
            </div>
        </div>
        <?php } ?>
        
        <?php if (is_active_sidebar('footer-sidebar3')) { ?>
        <div class="footer_categories">
            <?php dynamic_sidebar('footer-sidebar3'); ?>
        </div>
        <?php } ?>
        
        <div class="footer__copyright-8">
            <p><?php echo wp_kses( $options->get( 'footer_v6_copyright_text'), true ); ?></p>
        </div>
        
    </footer>
    <!-- Footer area end -->