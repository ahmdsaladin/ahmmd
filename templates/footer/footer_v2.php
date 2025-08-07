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
<footer class="footer__area-2 pt-130">
    <div class="container">
        <?php if($options->get('show_footer_topbar_v2')){ ?>
        <div class="footer__top-2 text-anim">
            <div class="row">
                <div class="col-xxl-12">
                    <?php if($options->get('footer_cta_title_v2')){ ?><h2 class="sec-title-3 title-anim"><?php echo wp_kses($options->get('footer_cta_title_v2'), true); ?></h2><?php } ?>
                    <?php if($options->get('footer_cta_text_v2')){ ?><p class="footer__sub-title"><?php echo wp_kses($options->get('footer_cta_text_v2'), true); ?></p><?php } ?>
                </div>
            </div>
        </div>
    	<?php } ?>
        
        <?php if($options->get('show_footer_form_area')){ ?>
        <div class="footer__middle-2">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="footer__location-2">
                        <?php if($options->get('footer_country_name_v2') || $options->get('footer_country_address_v2')){ ?>
                        <div class="location">
                            <h3><?php echo wp_kses($options->get('footer_country_name_v2'), true); ?></h3>
                            <p><?php echo wp_kses($options->get('footer_country_address_v2'), true); ?></p>
                        </div>
                        <?php } ?>
                        <?php if($options->get('footer_country_name_v2_2') || $options->get('footer_country_address_v2_2')){ ?>
                        <div class="location">
                            <h3><?php echo wp_kses($options->get('footer_country_name_v2_2'), true); ?></h3>
                            <p><?php echo wp_kses($options->get('footer_country_address_v2_2'), true); ?></p>
                        </div>
                        <?php } ?>
                    </div>
                </div>
                <?php if($options->get('show_newsletter_form_url_v2')){ ?>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="footer__subscribe-2">
                        <?php echo do_shortcode($options->get('newsletter_form_url_v2')); ?>
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
    	<?php } ?>
        
        <div class="footer__btm-2">
            <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                    <div class="footer__copyright-2">
                        <p><?php echo wp_kses( $options->get( 'footer_v2_copyright_text'), true ); ?> </p>
                    </div>
                </div>
                <?php if($options->get('show_footer_menu_v2')){ ?>
                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                    <div class="footer__nav">
                        <ul class="footer-menu menu-anim">
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
</footer>
<!-- Footer area end -->
