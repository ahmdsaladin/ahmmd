<?php
/**
 * Blog Main File.
 *
 * @package AXTRA
 * @author  Crowdyflow
 * @version 1.0
 */

get_header();
$options = axtra_WSH()->option();
global $wp_query;
$data  = \AXTRA\Includes\Classes\Common::instance()->data( 'author' )->get();
$layout = $options->get( 'author_sidebar_layout' );
$sidebar = $options->get( 'author_page_sidebar' );
$show_banner = $options->get( 'author_page_banner' );
$bg_img = $options->get( 'author_page_background' );
$title = $options->get( 'author_banner_title' );

if (is_active_sidebar( $sidebar )) {$layout;} else{$layout = 'full';}
$class = ( !$layout || $layout == 'full' ) ? 'col-xxl-12 col-xl-12 col-lg-12 col-md-12' : 'col-xxl-9 col-xl-9 col-lg-9 col-md-12';
if ( class_exists( '\Elementor\Plugin' ) AND $data->get( 'tpl-type' ) == 'e' AND $data->get( 'tpl-elementor' ) ) {
	echo Elementor\Plugin::instance()->frontend->get_builder_content_for_display( $data->get( 'tpl-elementor' ) );
} else {
?>
    
    <!-- Blog Area Start -->
    <section class="blog__area-6 blog__animation">
        <div class="container line pt-140">
            <span class="line-3"></span>
            
            <?php if ( $show_banner ) : ?>
            <div class="row rizu <?php if( $bg_img ) echo 'bg-setting'; else echo ' pb-130';?>" <?php if( $bg_img ){?>style="background-image:url( <?php echo esc_url( $bg_img['url'] );?> );"<?php };?>>
                <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                    <div class="sec-title-wrapper">
                        <h2 class="sec-title-2 animation__char_come"><?php if( $title ) echo wp_kses( $title, true ); else wp_title( '' ) ; ?></h2>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                    <div class="blog__text ax-breadcrumb">
                        <ul class="breadcrumb__content">
                            <?php echo axtra_the_breadcrumb(); ?>
                        </ul>
                    </div>
                </div>
            </div>
            <?php endif;?>
            
            <div class="row">
                <?php if ( $layout == 'left' ) {?>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12">
                    <div class="blog__sidebar">
                        <?php dynamic_sidebar( $sidebar ); ?>
                    </div>
                </div>
                <?php };?>
                <div class="content-side <?php echo esc_attr( $class ); ?>">
                    <div class="blog__list">
                        <div class="thm-unit-test">
                            <?php if( $options->get( 'blog_grid_view' ) ):?>
                                <div class="row reset-grid">
                                    <?php
                                        while ( have_posts() ) :
                                            the_post();
                                            axtra_template_load( 'templates/blog/blog.php', compact( 'data' ) );
                                        endwhile;
                                        wp_reset_postdata();
                                    ?>
                                </div>
                            <?php else:?>
                                <?php
                                    while ( have_posts() ) :
                                        the_post();
                                        axtra_template_load( 'templates/blog/blog.php', compact( 'data' ) );
                                    endwhile;
                                    wp_reset_postdata();
                                ?>
                            <?php endif;?>    
                        </div>
                        
                        <!--Pagination-->
                        <div class="blog__pagination wow wcfadeUp">
                            <?php axtra_the_pagination( $wp_query->max_num_pages );?>
                        </div>
                    </div>
                </div>
                <?php if ( $layout == 'right' ) {?>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12">
                    <div class="blog__sidebar">
                        <?php dynamic_sidebar( $sidebar ); ?>
                    </div>
                </div>
                <?php };?>
            </div>
        </div>
    </section> 
    <!--End blog area--> 
	<?php
}
get_footer();
