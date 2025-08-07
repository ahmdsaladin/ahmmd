<?php get_header();
$data = \AXTRA\Includes\Classes\Common::instance()->data('single-team')->get(); 
$show_cta_area = get_post_meta(get_the_id(), 'show_cta_area', true);
?>

<?php 
	while (have_posts()) : the_post(); 
	$show_portfolio_info = get_post_meta(get_the_id(), 'show_portfolio_info', true);
?>

<div class="team__detail-page">
    <!-- <span class="line-1"></span>
    <span class="line-2"></span>
    <span class="line-3"></span> -->

    <!-- Team area start -->
    <section class="team__detail">
        <div class="container line pb-140">
        	<div class="line-3"></div>
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2">
                    <div class="team__member-img">
                    	<?php the_post_thumbnail('axtra_765x1000'); ?>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div class="sec-title-wrapper pt-120">
                        <h2 class="team__member-name-7 animation__char_come"><?php the_title(); ?></h2>
                        <h3 class="team__member-role-7 animation__char_come"><?php echo (get_post_meta( get_the_id(), 'team_designation', true ));?></h3>
                        <?php the_content(); ?>
                    </div>
                    <?php if($show_portfolio_info){ ?>
                    <div class="team__member-work">
                        <h4 class="work-title"><?php echo (get_post_meta( get_the_id(), 'portfolio_title', true ));?></h4>
                        <ul>
                            <li><a href="<?php echo esc_url(get_post_meta( get_the_id(), 'portfolio_behance_link', true ));?>"><?php echo (get_post_meta( get_the_id(), 'portfolio_behance_title', true ));?></a></li>
                            <li><a href="<?php echo esc_url(get_post_meta( get_the_id(), 'portfolio_dribbble_link', true ));?>"><?php echo (get_post_meta( get_the_id(), 'portfolio_dribbble_title', true ));?></a></li>
                            <li><a href="<?php echo esc_url(get_post_meta( get_the_id(), 'portfolio_meduim_link', true ));?>"><?php echo (get_post_meta( get_the_id(), 'portfolio_meduim_title', true ));?></a></li>
                        </ul>
                    </div>
                    <?php } ?>
                    
                    <?php 
						$icons = get_post_meta( get_the_id(), 'social_profile', true );
						if ( ! empty( $icons ) ) : 
					?>
                    <div class="team__member-social">
                        <h4 class="work-title"><?php esc_html_e('Follow :', 'axtra'); ?></h4>
                        <ul>
						<?php
                            foreach ( $icons as $h_icon ) :
                            $header_social_icons = json_decode( urldecode( axtra_set( $h_icon, 'data' ) ) );
                            if ( axtra_set( $header_social_icons, 'enable' ) == '' ) {
                                continue;
                            }
                            $icon_class = explode( '-', axtra_set( $header_social_icons, 'icon' ) );
                            ?>
                            <li><a href="<?php echo esc_url(axtra_set( $header_social_icons, 'url' )); ?>" <?php if( axtra_set( $header_social_icons, 'background' ) || axtra_set( $header_social_icons, 'color' ) ):?>style="background-color:<?php echo esc_attr(axtra_set( $header_social_icons, 'background' )); ?>; color: <?php echo esc_attr(axtra_set( $header_social_icons, 'color' )); ?>"<?php endif;?>><span><i class="fa-brands <?php echo esc_attr( axtra_set( $header_social_icons, 'icon' ) ); ?>"></i></span></a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
    <!-- Team area end -->
</div>

<?php endwhile; ?>

<?php if($show_cta_area){ ?>
<!-- CTA area start -->
<section class="cta__area">
    <div class="container line pt-130 pb-110">
    	<div class="line-3"></div>
        <div class="row">
            <div class="col-xxl-12">
                <div class="cta__content">
                    <p class="cta__sub-title"><?php echo (get_post_meta( get_the_id(), 'team_cta_subtitle', true ));?></p>
                    <h2 class="cta__title title-anim"><?php echo (get_post_meta( get_the_id(), 'team_cta_title', true ));?></h2>
                    <div id="btn_wrapper">
                        <a href="<?php echo (get_post_meta( get_the_id(), 'team_cta_btn_link', true ));?>" class="wc-btn-primary btn-item btn-hover"><span></span><?php echo (get_post_meta( get_the_id(), 'team_cta_btn_title', true ));?> <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- CTA area end -->
<?php } ?>

<?php get_footer(); ?>