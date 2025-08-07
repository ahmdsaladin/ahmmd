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

$footer_dark_icon_logo_img    = $options->get( 'footer_dark_icon_logo_img' );
$footer_dark_icon_logo_img   = axtra_set( $footer_dark_icon_logo_img, 'url', AXTRA_URI . 'assets/images/icon/5/footer-logo-5-2.png' );

$footer_light_icon_logo_img    = $options->get( 'footer_light_icon_logo_img' );
$footer_light_icon_logo_img   = axtra_set( $footer_light_icon_logo_img, 'url', AXTRA_URI . 'assets/images/icon/5/footer-logo-5.png' );

?>

<!-- Footer area start -->
<footer class="footer__area-5">
    <div class="container">
        <div class="row">
            <div class="col-xxl-12">
            	<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo-dark"><img src="<?php echo esc_url($footer_dark_icon_logo_img); ?>" alt="<?php esc_attr_e('Footer Logo', 'axtra'); ?>"></a>
            	<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo-light"><img src="<?php echo esc_url($footer_light_icon_logo_img); ?>" alt="<?php esc_attr_e('Footer Logo', 'axtra'); ?>"></a>
                
                <?php if($options->get('show_footer_social_info_v5')){ ?>
                <ul class="footer__menu-5 menu-anim">
                    <?php if($options->get('show_footer_facebook_info_v5')){ ?><li><a href="<?php echo esc_url($options->get('footer_facebook_link_v5')); ?>"><?php echo wp_kses($options->get('footer_facebook_title_v5'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_footer_twitter_info_v5')){ ?><li><a href="<?php echo esc_url($options->get('footer_twitter_link_v5')); ?>"><?php echo wp_kses($options->get('footer_twitter_title_v5'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_footer_behance_info_v5')){ ?><li><a href="<?php echo esc_url($options->get('footer_behance_link_v5')); ?>"><?php echo wp_kses($options->get('footer_behance_title_v5'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_footer_dribbble_info_v5')){ ?><li><a href="<?php echo esc_url($options->get('footer_dribbble_link_v5')); ?>"><?php echo wp_kses($options->get('footer_dribbble_title_v5'), true); ?></a></li><?php } ?>
                </ul>
                <?php } ?>
                
                <div class="footer__copyright-4">
                    <p><?php echo wp_kses( $options->get( 'footer_v5_copyright_text'), true ); ?></p>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Footer area end -->