<?php

/**
 * Blog Content Template
 *
 * @package    WordPress
 * @subpackage AXTRA
 * @author     Crowdyflow
 * @version    1.0
 */

if (class_exists('Erdunt_Resizer')) {
    $img_obj = new Erdunt_Resizer();
} else {
    $img_obj = array();
}
$options = axtra_WSH()->option();
$allowed_tags = wp_kses_allowed_html('post');

global $post;
$post_thumbnail_id = get_post_thumbnail_id($post->ID);
$post_thumbnail_url = wp_get_attachment_url($post_thumbnail_id);

?>

<?php if( $options->get( 'blog_grid_view' ) ):?>
	
    <div class="<?php echo esc_attr( $options->get( 'blog_grid_column' ) );?>">
        <article class="blog__item">
            <?php if(has_post_thumbnail()){ ?>
            <div class="blog__img-wrapper">
                <a href="<?php echo esc_url( the_permalink( get_the_id() ) );?>">
                    <div class="img-box">
                        <?php the_post_thumbnail('axtra_390x450', array( 'class'=> 'image-box__item')); ?>
                        <?php the_post_thumbnail('axtra_390x450', array( 'class'=> 'image-box__item')); ?>
                    </div>
                </a>
            </div>
            <?php } ?>
            <h4 class="blog__meta">
                <?php the_category(' '); ?> . 
                <?php echo wp_kses(get_the_date(), true);?>
            </h4>
            <h5><a href="<?php echo esc_url( the_permalink( get_the_id() ) );?>" class="blog__title"><?php the_title(); ?></a></h5>
            <a href="<?php echo esc_url( the_permalink( get_the_id() ) );?>" class="blog__btn"><?php esc_html_e('Read More', 'axtra'); ?> <span><i class="fa-solid fa-arrow-right"></i></span></a>
        </article>
    </div>
<?php else:?>
<div <?php post_class(); ?>>
    
    <article class="blog__item">
        <?php if(has_post_thumbnail()){ ?>
        <div class="blog__img-wrapper">
            <a href="<?php echo esc_url( the_permalink( get_the_id() ) );?>">
                <div class="img-box">
                    <?php the_post_thumbnail('axtra_1170x500', array( 'class'=> 'image-box__item')); ?>
                    <?php the_post_thumbnail('axtra_1170x500', array( 'class'=> 'image-box__item')); ?>
                </div>
            </a>
        </div>
        <?php } ?>
        
    	<h4 class="blog__meta">
        	<?php the_category(' '); ?> . 
            <?php echo wp_kses(get_the_date(), true);?>
        </h4>
    	<h5><a href="<?php echo esc_url( the_permalink( get_the_id() ) );?>" class="blog__title"><?php the_title(); ?></a></h5>
    	<div class="blog-text"><?php the_excerpt(); ?></div>
        <a href="<?php echo esc_url( the_permalink( get_the_id() ) );?>" class="blog__btn"><?php esc_html_e('Read More', 'axtra'); ?> <span><i class="fa-solid fa-arrow-right"></i></span></a>
    </article>
    
</div>
<?php endif;?>