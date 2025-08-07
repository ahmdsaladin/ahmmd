<?php
/**
 * Blog Post Main File.
 *
 * @package AXTRA
 * @author  Crowdyflow
 * @version 1.0
 */

get_header();
$options = axtra_WSH()->option();

$data    = \AXTRA\Includes\Classes\Common::instance()->data( 'single' )->get();
$layout = $data->get( 'layout' );
$sidebar = $data->get( 'sidebar' );
if (is_active_sidebar( $sidebar )) {$layout = 'right';} else{$layout = 'full';}
$class = ( !$layout || $layout == 'full' ) ? 'col-xxl-12 col-xl-12 offset-xxl-2 offset-xl-1' : 'col-xxl-8 col-xl-8 col-lg-8';


if ( class_exists( '\Elementor\Plugin' ) && $data->get( 'tpl-type' ) == 'e') {
	
	while(have_posts()) {
	   the_post();
	   the_content();
    }

} else {
?>

<!-- Blog detail start -->
<section class="blog__detail">
    <div class="container g-0 line pt-140 pb-110">
    	<span class="line-3"></span>
    	<div class="row">            
			
            <?php while ( have_posts() ) : the_post(); ?>                              
                <div class="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
                    <div class="blog__detail-top">
                        <h2 class="blog__detail-date animation__word_come"><?php the_category(' '); ?> <span><?php echo wp_kses(get_the_date(), true); ?></span></h2>
                        <h3 class="blog__detail-title animation__word_come"><?php the_title();?></h3>
                        <div class="blog__detail-metalist">
                            <div class="blog__detail-meta">
                                <?php echo get_avatar(get_the_author_meta('ID'), 60); ?>
                                <p><?php esc_html_e('Writen by', 'axtra'); ?> <span><?php the_author(); ?></span></p>
                            </div>
                            <div class="blog__detail-meta">
                                <p><?php esc_html_e('comments', 'axtra'); ?> <span><?php comments_number( wp_kses(__('0 ' , 'axtra'), true), wp_kses(__('1 ' , 'axtra'), true), wp_kses(__('% ' , 'axtra'), true)); ?></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                    
				<?php if(has_post_thumbnail()){ ?>
                <div class="col-xxl-12">
                    <div class="blog__detail-thumb">
                        <?php the_post_thumbnail('axtra_1170x500'); ?>
                    </div>
                </div>
                <?php } ?>
                
                <?php if ( $data->get( 'layout' ) == 'left' ) {?>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                    <div class="blog__sidebar m-t55">
                        <?php dynamic_sidebar( $sidebar ); ?>
                    </div>
                </div>
                <?php };?> 
                
                <div class="content-side <?php echo esc_attr( $class ); ?>">
                    <div class="thm-unit-test">
                        <div class="blog__detail-content">
                            <div class="text"><?php the_content(); ?></div>
                            <div class="clearfix"></div>
                            <?php wp_link_pages(array('before'=>'<div class="paginate-links m-t30">'.esc_html__('Pages: ', 'axtra'), 'after' => '</div>', 'link_before'=>'<span>', 'link_after'=>'</span>')); ?>
                        </div>
                    </div>
                    <div class="blog__detail-tags">
                        <p class="sub-title-anim"><?php esc_html_e('Tags :', 'axtra'); ?> <?php the_tags(' '); ?></p>
                    </div>
                    
                    <!--End post-details-->
                	<?php comments_template(); ?>
                    
                </div> 
                
                <?php if ( $data->get( 'layout' ) == 'right' ) {?>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                    <div class="blog__sidebar m-t55">
                        <?php dynamic_sidebar( $sidebar ); ?>
                    </div>
                </div>
                <?php };?>                     
                                            
                <?php endwhile; ?>
            
        </div>        
    </div>
</section>
<!--End blog area--> 

<?php
}
get_footer();
