<?php
/**
 * Header Six
 *
 * @package Blossom_Travel
 */

$ed_search = get_theme_mod( 'ed_header_search', true ); ?>

<header id="masthead" class="site-header header-six" itemscope itemtype="http://schema.org/WPHeader">
	<div class="header-t">
		<div class="container">
			<?php blossom_travel_site_branding(); ?>
		</div>	
	</div><!-- .header-t -->
	<div class="header-main">
		<div class="container">
			<?php blossom_travel_primary_nagivation(); ?>
			<div class="header-right">
				<?php blossom_travel_social_links(); ?>
				<?php if( $ed_search ) {
					echo '<div class="header-search">'; 
					blossom_travel_header_search();
					echo '</div>';
				} ?>
			</div>
		</div>
	</div><!-- .header-main -->
</header>