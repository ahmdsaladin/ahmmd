<?php get_header();
$data = \AXTRA\Includes\Classes\Common::instance()->data('single-project')->get(); 
?>


<?php 
	while (have_posts()) : the_post(); 
	$project_image_v1 = get_post_meta(get_the_id(), 'project_image1', true);
	$show_proect_info = get_post_meta(get_the_id(), 'show_project_info', true);
?>

    <!-- Portfolio area start -->
    <section class="portfolio__detail">
        <div class="portfolio__detail-top">
            <div class="container g-0 line pt-110 pb-130">
            	<span class="line-3"></span>
            
                <div class="row">
                    <div class="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                        <div class="sec-title-wrapper">
                        	<h2 class="sec-title animation__char_come"><?php the_title(); ?></h2>
                        </div>
                    </div>
                	<?php if($show_proect_info){ ?>
                    <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                        <div class="portfolio__detail-info">
                            <ul>
                                <li><?php echo (get_post_meta( get_the_id(), 'project_detail_cat', true ));?></li>
                                <li><?php echo (get_post_meta( get_the_id(), 'project_detail_client', true ));?></li>
                                <li><?php echo (get_post_meta( get_the_id(), 'project_start_date', true ));?></li>
                                <li><?php echo (get_post_meta( get_the_id(), 'project_end_date', true ));?></li>
                            </ul>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    	
		<?php if($project_image_v1['url']){ ?>
        <div class="portfolio__detail-thumb">
        	<img src="<?php echo esc_url($project_image_v1['url']);?>" alt="<?php esc_attr_e('Awesome Image', 'axtra'); ?>" data-speed="auto">
        </div>
    	<?php } ?>
        
        <div class="portfolio__detail-content">
            <div class="container g-0 line pt-140">
                <span class="line-3"></span>
                
                <?php 
					$show_section_info = get_post_meta(get_the_id(), 'show_section_info', true);
					$heading = get_post_meta( get_the_id(), 'heading', true );
					$features = get_post_meta( get_the_id(), 'feature_list', true );
					$img = get_post_meta( get_the_id(), 'image', true );
					$show_section_info_two = get_post_meta(get_the_id(), 'show_block_section_info', true);
					$heading_two = get_post_meta( get_the_id(), 'heading_two', true );
					$text_two = get_post_meta( get_the_id(), 'text_two', true );
					$features_two = get_post_meta( get_the_id(), 'feature_list_two', true );
					$show_gallery = get_post_meta(get_the_id(), 'show_gallery', true);
					$gall_images = (get_post_meta(get_the_id(), 'gallery_imgs', true ));
					$img2 = get_post_meta( get_the_id(), 'image_two', true );
					$show_gallery_two = get_post_meta(get_the_id(), 'show_gallery_section', true);
					$gall_images_two = (get_post_meta(get_the_id(), 'gallery_imgs_two', true ));
					$text_three = get_post_meta( get_the_id(), 'text_three', true );
				?>
                
                <?php if( $show_section_info ){?>
                <div class="block-content">
                    <div class="row">
                      <?php if( $heading ){?>
                      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                        <h2 class="portfolio__detail-title title-anim"><?php echo wp_kses( $heading, true );?></h2>
                      </div>
                      <?php };?>
            		  
                      <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                        <div class="portfolio__detail-text">
                          <p><?php the_content();?></p>
            
                          <?php if( !empty( $features ) ){?>
                          <ul>
                            <?php $fearures = explode("\n", ($features));?>
							<?php foreach($fearures as $feature):?>
                            <li><?php echo wp_kses($feature, true); ?></li>
                            <?php endforeach; ?>
                          </ul>
                          <?php };?>
                        </div>
                      </div>
                    </div>
                  </div>
                  <?php };?>
                  
                  <?php if( $img ){?>
                  <div class="block-thumb">
                    <img src="<?php echo esc_url( $img['url'] )?>" alt="<?php esc_attr_e( 'Portfolio Image', 'axtra' );?>" data-speed="0.5">
                  </div>
            	  <?php };?>
                  
                  <?php if( $show_section_info_two ){?>
                  <div class="block-content  pt-140">
                    <div class="row">
                      <?php if( $heading_two ){?>
                      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                        <h2 class="portfolio__detail-title title-anim"><?php echo wp_kses( $heading_two, true );?></h2>
                      </div>
                      <?php };?>
            		  <?php if( $text_two || $features_two ){?>
                      <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                        <div class="portfolio__detail-text">
                          <p><?php echo wp_kses( $text_two, true );?></p>
            			  <?php if( !empty( $features_two ) ){?>
                          <div class="fonts">
                            <img src="<?php echo esc_url( get_template_directory_uri() );?>/assets/images/portfolio/detail/shape.png" alt="<?php esc_attr_e( 'Font Style', 'axtra' );?>">
                            
                              <ul>
                                <?php $fearures = explode("\n", ($features_two));?>
                                <?php foreach($fearures as $key => $feature):
									if( $key == 2 ){
										$classes = 'medium';
									}elseif( $key == 3 ){
										$classes = 'semibold';
									}elseif( $key == 4 ){
										$classes = 'blod';
									}else{
										$classes = 'regular';
									}
								?>
                                <li class="<?php echo esc_attr( $classes );?>"><?php echo wp_kses($feature, true); ?></li>
                                <?php endforeach; ?>
                              </ul>
                          </div>
                          <?php };?>
                        </div>
                      </div>
                      <?php };?>
                    </div>
                  </div>
                  <?php };?>
                  
                  <?php if ( !empty( $gall_images ) & $show_gallery ) { ?>
                  <div class="block-gallery">
                  	<?php
						$gall_images = explode(',', $gall_images);
						foreach ($gall_images as $gall) :
					?>
                    <?php echo wp_get_attachment_image($gall, 'axtra_635x400');  ?>
                    <?php endforeach; ?>
                    
                  </div>
                  <?php };?>
                  
                  <?php if( $img2 ){?>
                  <div class="block-thumb">
                    <img src="<?php echo esc_url( $img2['url'] )?>" alt="<?php esc_attr_e( 'Portfolio Image', 'axtra' );?>" data-speed="0.5">
                  </div>
                  <?php };?>
                  
                  <?php if ( !empty( $gall_images_two ) & $show_gallery_two ) { ?>
                  <div class="block-img-text">
                    
                    <?php
						$gall_images_two = explode(',', $gall_images_two);
						foreach ($gall_images_two as $galls) :
					?>
                    <?php echo wp_get_attachment_image($galls, 'axtra_375x450');  ?>
                    <?php endforeach; ?>
                    
                    <p><?php echo wp_kses( $text_three, true );?></p>
                  </div>
                  <?php };?>
                  
                <?php if((get_previous_post()) || (get_next_post())): ?>
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div class="portfolio__detail-btns pt-150 pb-150">
                            <?php global $post; $prev_post = get_previous_post();
								if (!empty($prev_post)):
							?>
                            <a href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>" class="wc-btn-primary btn-hover"><span></span> <?php esc_html_e('Prev Work', 'axtra'); ?></a>
                            <?php endif; ?>
                            
							<?php global $post; $next_post = get_next_post();
								if (!empty($next_post)):
							?>
                            <a href="<?php echo esc_url(get_permalink($next_post->ID)); ?>" class="wc-btn-primary btn-hover"><span></span> <?php esc_html_e('Next Work', 'axtra'); ?></a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <!-- Portfolio area end -->

<?php endwhile; ?>
<?php get_footer(); ?>