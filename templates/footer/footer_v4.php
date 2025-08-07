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
<footer class="footer__area-6">
    <div class="container g-0 line_4">
        <?php if($options->get('show_line_pattern_v4')){ ?>
        <div class="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    	<?php } ?>
        <div class="row">
            <div class="col-xxl-12">
                <?php if (is_active_sidebar('footer-sidebar2')) { ?>
                <div class="footer__top-6 pt-150 pb-140">
                    <div class="row">
						<?php dynamic_sidebar('footer-sidebar2'); ?>
                    </div>
                </div>
                <?php } ?>
                
                <div class="footer__btm-6">
                    <div class="row">
                        
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                            <div class="footer__copyright-6">
                                <p><?php echo wp_kses( $options->get( 'footer_v4_copyright_text'), true ); ?></p>
                            </div>
                        </div>
                        
						<?php if($options->get('show_footer_menu_v4')){ ?>
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
								)); ?>
                                </ul>
                            </div>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Footer area end -->
