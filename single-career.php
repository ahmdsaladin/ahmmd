<?php get_header();
$data = \AXTRA\Includes\Classes\Common::instance()->data('single-career')->get();

$form_logo_image = get_post_meta(get_the_id(), 'form_logo_image', true);
 
?>

<?php 
	while (have_posts()) : the_post(); 
	$career_image = get_post_meta(get_the_id(), 'career_image', true);
	$show_job_details = get_post_meta(get_the_id(), 'show_job_details', true);
	$show_job_info = get_post_meta(get_the_id(), 'show_job_info', true);
?>
	
	<?php if($career_image['url']){ ?>
    <!-- Job details top start -->
    <section class="job__detail-top">
    	<img src="<?php echo esc_url($career_image['url']);?>" alt="<?php esc_attr_e('Awesome Image', 'axtra'); ?>" data-speed="auto">
    </section>
    <!-- Job details top end -->
    <?php } ?>
    
    <!-- Job detail start -->
    <section class="job__detail">
        <div class="container g-0 line pb-110">
        	<span class="line-3"></span>
        
            <div class="row">
                <div class="col-xxl-9 col-xl-9 col-lg-8 col-md-8">
                    <div class="job__detail-wrapper">
                    	<h2 class="sec-title"><?php the_title(); ?></h2>
                        <?php if($show_job_details){ ?>
                        <ul class="job__detail-meta">
                            <li><?php echo (get_post_meta( get_the_id(), 'job_location', true ));?></li>
                            <li><?php echo (get_post_meta( get_the_id(), 'job_date', true ));?></li>
                            <li><?php echo (get_post_meta( get_the_id(), 'job_type', true ));?></li>
                        </ul>
                        <?php } ?>
                        <div class="job__detail-content">
                            <?php the_content(); ?>
                        </div>
                    
                        <div class="job__apply" id="btn_wrapper">
                            <button class="wc-btn-primary btn-hover btn-item"><span></span> <?php echo (get_post_meta( get_the_id(), 'apply_btn_title', true ));?> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <?php if($show_job_info){ ?>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                    <div class="job__detail-sidebar">
                        <ul>
                            <li><?php echo (get_post_meta( get_the_id(), 'job_experience', true ));?></li>
                            <li><?php echo (get_post_meta( get_the_id(), 'job_working_hours', true ));?></li>
                            <li><?php echo (get_post_meta( get_the_id(), 'job_working_days', true ));?></li>
                            <li><?php echo (get_post_meta( get_the_id(), 'job_salary', true ));?></li>
                            <li><?php echo (get_post_meta( get_the_id(), 'job_vacancy', true ));?></li>
                            <li><?php echo (get_post_meta( get_the_id(), 'job_deadline', true ));?></li>
                        </ul>
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
    </section>
    <!-- Job detail end -->

<?php endwhile; ?>



<?php get_footer(); ?>