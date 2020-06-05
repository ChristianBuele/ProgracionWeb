<?php
/**
 * Header One
 * 
 * @package Blossom_Travel
 */

$ed_search = get_theme_mod( 'ed_header_search', true ); ?>

<header id="masthead" class="site-header header-one" itemscope itemtype="http://schema.org/WPHeader">
	<div class="container">
		<div class="header-search">
			<?php if( $ed_search ) blossom_travel_header_search(); ?>
		</div>
		<div class="header-social">
			<?php blossom_travel_social_links(); ?>
		</div>
		<div class="logo-menu-wrap">
			<?php blossom_travel_site_branding(); ?>
			<?php blossom_travel_primary_nagivation(); ?>
		</div>
	</div>
</header>