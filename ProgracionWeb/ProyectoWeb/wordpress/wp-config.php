<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ProyectoWeb' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'K^yP:r*gQ%_W<#[+A6d3n&Dsjg~5SNG)_x_%bU#k~]?7JiGc<xn[_={RA%868C:h' );
define( 'SECURE_AUTH_KEY',  'j?*?hy`V[C&s$<*.m6c&)}^cR>>rtgea9=BWog4h:5tK!`hl.DENuef%{1rbod2%' );
define( 'LOGGED_IN_KEY',    'QP-q!$#tGx{#j0(:!|HNycynyw.)5,nQa|-1[7Ok@6vdMX&H2kKGk$Y~V-fq5gbS' );
define( 'NONCE_KEY',        'D]iYi`CY^So-5<_.j*6}QmmMI_Xf8bH MRLWlE.Es^j&HP?rL}3_Va;#8U$&bd+M' );
define( 'AUTH_SALT',        'cn!Q-S`J(wgPOlHTJnOj`#9F6b[V1.#A:eyd3N4ZI}y#H!Lk-U6brd5SL/kgQmx#' );
define( 'SECURE_AUTH_SALT', '#Q(~bTKk+;$C,p~]Ob[DGC=&5|^W8|ZBG#U^:B!40@Vp_wqTl<~2g1N7DU&Hflh(' );
define( 'LOGGED_IN_SALT',   'jH~?c_T1eb^x%Hvi`lf59Rns*MHD<z?O1{!qZ~L_=yV;D=p~e~a#zF>PCWHwh7. ' );
define( 'NONCE_SALT',       'gr^c<${.ETw8pJGi^%C5;OM%?<1Z/gwIJI#><D3Q9~kq|7_dg`f NqRMSIg?({%K' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
