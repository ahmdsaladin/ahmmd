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

<form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
    <input type="text" name="s" value="<?php echo get_search_query(); ?>" placeholder="<?php echo esc_attr__( 'Search keyword', 'axtra' ); ?>">
    <button><i class="fa-solid fa-magnifying-glass"></i></button>
</form>