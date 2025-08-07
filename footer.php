<?php
/**
 * Footer Main File.
 *
 * @package AXTRA
 * @author  Crowdyflow
 * @version 1.0
 */
$options = axtra_WSH()->option(); 
$form_logo_image = get_post_meta(get_the_id(), 'form_logo_image', true);
global $wp_query;
$page_id = ( $wp_query->is_posts_page ) ? $wp_query->queried_object->ID : get_the_ID();
$layout_switcher = $options->get( 'layout_switcher' );
?>
		</main>	
    	<div class="clearfix"></div>
		<?php axtra_template_load( 'templates/footer/footer.php', compact( 'page_id' ) );?>    
	
    </div>
</div>
<!--End Page Wrapper-->

<!-- Modal 1 -->
<div class="modal__application" id="application_form">
    <div class="modal__apply">
        <button class="modal__close-2" id="apply_close"><i class="fa-solid fa-xmark"></i></button>
        <div class="form-top">
            <?php if($form_logo_image){ ?><img src="<?php echo esc_url($form_logo_image);?>" alt="<?php esc_attr_e('Awesome Image', 'axtra'); ?>"><?php } ?>
            <?php if(get_post_meta( get_the_id(), 'form_job_title', true )){ ?><h2 class="sec-title"><?php echo (get_post_meta( get_the_id(), 'form_job_title', true ));?></h2><?php } ?>
            <?php if(get_post_meta( get_the_id(), 'form_job_description', true )){ ?><p><?php echo (get_post_meta( get_the_id(), 'form_job_description', true ));?></p><?php } ?>
        </div>

        <div class="form-apply">
        	<?php echo do_shortcode(get_post_meta( get_the_id(), 'apply_form_url', true ));?>
        </div>
    
        <div class="form-btn apply-trigger">
            <button class="wc-btn-primary btn-hover"><span></span> <?php esc_html_e('next', 'axtra'); ?> <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
</div>

<!-- Modal 2 -->
<div class="modal__application" id="application_form2">
    <div class="modal__apply">
        <button class="modal__close-2" id="apply_close2"><i class="fa-solid fa-xmark"></i></button>
        <div class="form-top">
            <?php if($form_logo_image){ ?><img src="<?php echo esc_url($form_logo_image);?>" alt="<?php esc_attr_e('Awesome Image', 'axtra'); ?>"><?php } ?>
            <?php if(get_post_meta( get_the_id(), 'form_job_title', true )){ ?><h2 class="sec-title"><?php echo (get_post_meta( get_the_id(), 'form_job_title', true ));?></h2><?php } ?>
            <?php if(get_post_meta( get_the_id(), 'form_job_description', true )){ ?><p><?php echo (get_post_meta( get_the_id(), 'form_job_description', true ));?></p><?php } ?>
        </div>
        
        <?php echo do_shortcode(get_post_meta( get_the_id(), 'apply_form_url2', true ));?>
       
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
