<?php
/**
 * Search Form template
 *
 * @package AXTRA
 * @author Crowdyflow
 * @version 1.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	die( 'Restricted' );
}
?>

<div class="widget__search wcfadeUp2">
    <form action="<?php echo esc_url( home_url( '/' ) ); ?>">
    	<input type="text" name="s" value="<?php echo get_search_query(); ?>" id="search" placeholder="<?php echo esc_attr__( 'Search', 'axtra' ); ?>">
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
</div>