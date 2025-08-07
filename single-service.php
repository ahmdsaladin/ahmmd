<?php get_header();
$data = \AXTRA\Includes\Classes\Common::instance()->data('single-service')->get();  ?>

<?php 
	while (have_posts()) : the_post(); 
	$service_image_v1 = get_post_meta(get_the_id(), 'service_image1', true);
	$service_image_v2 = get_post_meta(get_the_id(), 'service_image2', true);
?>

    <!-- Development area start -->
    <section class="development__area">
        <div class="container g-0 line pt-130 pb-150">
        	<div class="line-3"></div>
            <div class="row">
                
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                    <div class="sec-title-wrapper">
                    	<h2 class="sec-title animation__char_come"><?php the_title(); ?></h2>
                    </div>
                </div>
                
                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div class="development__wrapper">
                        <div class="development__content">
                            <?php echo (get_post_meta( get_the_id(), 'detail_description', true ));?>
                        </div>
                        <?php $features_list = get_post_meta( get_the_id(), 'detail_features_list', true );
							if(!empty($features_list)){
							$features_list = explode("\n", ($features_list)); 
						?>
                        <ul>
                            <?php foreach($features_list as $features): ?>
                            <li><?php echo wp_kses($features, true); ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <?php } ?>
                    </div>
                </div>
                
                <?php if($service_image_v1['url']){ ?>
                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                    <div class="development__img">
                    	<img src="<?php echo esc_url($service_image_v1['url']);?>" alt="<?php esc_attr_e('Awesome Image', 'axtra'); ?>" data-speed="auto">
                    </div>
                </div>
                <?php } ?>
                <?php if($service_image_v2['url']){ ?>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <div class="development__img">
                    	<img src="<?php echo esc_url($service_image_v2['url']);?>" alt="<?php esc_attr_e('Awesome Image', 'axtra'); ?>">
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
    </section>
    <!-- Development area end -->
    
    <?php the_content(); ?>
    
<?php endwhile; ?>
<?php get_footer(); ?>