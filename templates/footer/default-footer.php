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

$footer_logo_img    = $options->get( 'footer_logo_img' );
$footer_logo_img   = axtra_set( $footer_logo_img, 'url' );
?>
    
<!-- Footer area start -->
<?php if( $options->get( 'footer_text_v1') || $options->get('show_footer_social_info') || $options->get('show_talk_btn_v1') || $options->get( 'footer_v1_copyright_text') || $options->get('show_footer_menu_v1') ){?>
<footer class="footer__area-3">
    
    <?php if( $options->get( 'footer_text_v1') || $options->get('show_footer_social_info') || $options->get('show_talk_btn_v1') ){?>
    <div class="footer__top-3">
        <div class="footer__top-wrapper-3">
            <div class="footer__logo-3 pt-120">
                <img src="<?php echo esc_url($footer_logo_img); ?>" alt="<?php esc_attr_e('Footer Logo', 'axtra'); ?>">
                <p><?php echo wp_kses( $options->get( 'footer_text_v1'), true ); ?></p>
            </div>
            <?php if($options->get('show_footer_social_info')){ ?>
            <div class="footer__social-3">
                <ul>
                    <?php if($options->get('show_footer_facebook_info_v1')){ ?><li><a href="<?php echo esc_url($options->get('footer_facebook_link_v1')); ?>"><?php echo wp_kses($options->get('footer_facebook_title_v1'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_footer_twitter_info_v1')){ ?><li><a href="<?php echo esc_url($options->get('footer_twitter_link_v1')); ?>"><?php echo wp_kses($options->get('footer_twitter_title_v1'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_footer_linkedin_info_v1')){ ?><li><a href="<?php echo esc_url($options->get('footer_linkedin_link_v1')); ?>"><?php echo wp_kses($options->get('footer_linkedin_title_v1'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_footer_instagram_info_v1')){ ?><li><a href="<?php echo esc_url($options->get('footer_instagram_link_v1')); ?>"><?php echo wp_kses($options->get('footer_instagram_title_v1'), true); ?></a></li><?php } ?>
                </ul>
            </div>
            <?php } ?>
            
			<?php if($options->get('show_talk_btn_v1')){ ?>
            <div class="footer__contact-3">
            	<a class="end" href="<?php echo esc_url($options->get('footer_btn_link_v1')); ?>"><?php echo wp_kses($options->get('footer_btn_title_v1'), true); ?></a>
            </div>
            <?php } ?>
        </div>
    </div>
	<?php };?>
    
    <?php if( $options->get( 'footer_v1_copyright_text') || $options->get('show_footer_menu_v1') ){?>
    <div class="footer__btm-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4">
                    <div class="footer__copyright-3">
                        <p><?php echo wp_kses( $options->get( 'footer_v1_copyright_text'), true ); ?></p>
                    </div>
                </div>
                
				<?php if($options->get('show_footer_menu_v1')){ ?>
                <div class="col-xxl-8 col-xl-8 col-lg-8">
                    <div class="footer__nav-2">
                        <ul class="footer-menu-2 menu-anim">
                        <?php wp_nav_menu( array( 'theme_location' => 'footer_menu', 'container_id' => 'navbar-collapse-1',
							'container_class'=>'navbar-collapse collapse navbar-right',
							'menu_class'=>'nav navbar-nav',
							'fallback_cb'=>false,
							'items_wrap' => '%3$s',
							'container'=>false,
							'depth'=>'1',
							'walker'=> new Bootstrap_walker()
						) ); ?>
                        </ul>
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>
    <?php };?>
</footer>
<?php };?>
<!-- Footer area end -->