<?php
$options = axtra_WSH()->option();
$allowed_html = wp_kses_allowed_html( 'post' );

//Light Color Logo Settings
$light_logo = $options->get( 'light_color_logo' );
$light_logo_dimension = $options->get( 'light_color_logo_dimension' );

$logo_type = '';
$logo_text = '';
$logo_typography = ''; ?>


<!-- Offcanvas area start -->
<div class="offcanvas__area">
    <div class="offcanvas__body">
        <div class="offcanvas__left">
            
            <div class="offcanvas__logo">
            	<?php echo axtra_logo( $logo_type, $light_logo, $light_logo_dimension, $logo_text, $logo_typography ); ?>
            </div>
            
            <?php if($options->get('show_sidebar_follow_us')){ ?>
            <div class="offcanvas__social">
            	<?php if($options->get('show_sidebar_social_title')){ ?><h3 class="social-title"><?php echo wp_kses($options->get('sidebar_social_title'), true); ?></h3><?php } ?>
                <ul>
                    <?php if($options->get('show_sidebar_dribbble_info')){ ?><li><a href="<?php echo esc_url($options->get('sidebar_dribbble_link')); ?>"><?php echo wp_kses($options->get('sidebar_dribbble_title'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_sidebar_behance_info')){ ?><li><a href="<?php echo esc_url($options->get('sidebar_behance_link')); ?>"><?php echo wp_kses($options->get('sidebar_behance_title'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_sidebar_instagram_info')){ ?><li><a href="<?php echo esc_url($options->get('sidebar_instagram_link')); ?>"><?php echo wp_kses($options->get('sidebar_instagram_title'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_sidebar_facebook_info')){ ?><li><a href="<?php echo esc_url($options->get('sidebar_facebook_link')); ?>"><?php echo wp_kses($options->get('sidebar_facebook_title'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_sidebar_twitter_info')){ ?><li><a href="<?php echo esc_url($options->get('sidebar_twitter_link')); ?>"><?php echo wp_kses($options->get('sidebar_twitter_title'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_sidebar_youTube_info')){ ?><li><a href="<?php echo esc_url($options->get('sidebar_youTube_link')); ?>"><?php echo wp_kses($options->get('sidebar_youTube_title'), true); ?></a></li><?php } ?>
                </ul>
            </div>
            <?php } ?>
            
			<?php if($options->get('show_sidebar_menu')){ ?>
            <div class="offcanvas__links">
                <ul>
				<?php wp_nav_menu( array( 'theme_location' => 'sidebar_menu', 'container_id' => 'navbar-collapse-1',
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
            <?php } ?>
            
        </div>
      
        <div class="offcanvas__mid">
            <div class="offcanvas__menu-wrapper">
                <nav class="offcanvas__menu">
                    <ul class="menu-anim">
					<?php wp_nav_menu( array( 'theme_location' => 'main_menu', 'container_id' => 'navbar-collapse-1',
                        'container_class'=>'navbar-collapse collapse navbar-right',
                        'menu_class'=>'nav navbar-nav',
                        'fallback_cb'=>false,
                        'items_wrap' => '%3$s',
                        'container'=>false,
                        'depth'=>'3',
                        'walker'=> new Bootstrap_walker2()
                    ) ); ?>
                    </ul>
                </nav>
            </div>
        </div>
      
        <div class="offcanvas__right">
            <?php if($options->get('show_sidebar_search_form')){ ?>
            <div class="offcanvas__search">
                <?php get_template_part('searchform2')?>
            </div>
            <?php } ?>
            
            <?php if($options->get('show_contact_info_v1')){ ?>
            <div class="offcanvas__contact">
            	<?php if($options->get('show_sidebar_info_title_v1')){ ?><h3><?php echo wp_kses($options->get('sidebar_info_title_v1'), true); ?></h3><?php } ?>
                <ul>
                    <?php if($options->get('show_sidebar_phone_no_v1')){ ?><li><a href="tel:<?php echo esc_attr($options->get('sidebar_phone_no_v1')); ?>"><?php echo wp_kses($options->get('sidebar_phone_no_v1'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_sidebar_email_address_v1')){ ?><li><a href="mailto:<?php echo esc_attr($options->get('sidebar_email_address_v1')); ?>"><?php echo wp_kses($options->get('sidebar_email_address_v1'), true); ?></a></li><?php } ?>
                    <?php if($options->get('show_sidebar_address_v1')){ ?><li><?php echo wp_kses($options->get('sidebar_address_v1'), true); ?></li><?php } ?>
                </ul>
            </div>
            <?php } ?>
            
			<?php if($options->get('show_shape_image_v1')){ ?>
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/shape/11.png" alt="<?php esc_attr_e('Awesome Image', 'axtra'); ?>" class="shape-1">
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/shape/12.png" alt="<?php esc_attr_e('Awesome Image', 'axtra'); ?>" class="shape-2">
            <?php } ?>
        </div>
        
        <div class="offcanvas__close">
        	<button type="button" id="close_offcanvas"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </div>
</div>
<!-- Offcanvas area end -->
