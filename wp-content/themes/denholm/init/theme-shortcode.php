<?php
add_shortcode('share_buttons', 'share_buttons_render');
function share_buttons_render($attrs) {
  extract(shortcode_atts (array(
    'print_icon' => 1
  ), $attrs));

  ob_start();
    $context                = Timber::get_context();
    $context['permalink']   = urlencode(get_the_permalink());
    $context['title']       = urlencode(get_the_title());
    $context['print_icon']  = $print_icon;
    try {
    Timber::render( array( 'social-detail.twig'), $context );
    } catch (Exception $e) {
      echo 'Could not find a twig file for Shortcode Name: social-detail.twig';
    }
  $content = ob_get_contents();
  ob_end_clean();
  return $content;
  wp_reset_postdata();
}

// --> Disable term format shortcode
add_shortcode( 'customtax', 'create_customtax' );
function create_customtax($attrs) {
  extract(shortcode_atts (array(
    'tax_name' => ''
  ), $attrs));
  ob_start();
    taxvalue($tax = $tax_name); // This function in theme-init.php
  $content = ob_get_contents();
  ob_end_clean();
  return $content;
}

// Time bby Locate
add_shortcode( 'time_by_locate', 'create_time_by_locate' );
function create_time_by_locate($attrs) {
  extract(shortcode_atts (array(
    'tax_name' => ''
  ), $attrs));
  ob_start();
  
    // Get IP address
    $ip_address_json = file_get_contents("http://ip-api.com/json");
    $data = json_decode($ip_address_json, true);

    // Request OK?
    if( $data ){
      date_default_timezone_set($data['timezone']);
      $current_city           = $data['city'];
      $current_country        = $data['country'];
      $current_country_code   = $data['countryCode'];

      $current_time           = date('g:i:s a') ;
      $data_current_time      = date('Y/m/d H:i:s') ;
      $current_locate         = $current_city . ', ' . $current_country;

      // Get temp by locate
      $jsonweather  = file_get_contents('http://api.openweathermap.org/data/2.5/weather?q=' . $current_city . ',' . $current_country_code . '&units=metric&appid=87ad1525fd11092f6073bc28b6397d7c');

      $dataweather  = json_decode($jsonweather, true);

      $current_temp = $dataweather['main']['temp'] . '&deg;';

      echo '<div class="time-local">It is currently <span class="js-realtime">' . $current_time  . '</span> in ' . $current_locate . ' and it’s ' . $current_temp . ' Celsius</div>';
    }

  $content = ob_get_contents();
  ob_end_clean();
  return $content;
}

add_shortcode( 'time_refresh', 'refresh_time' );
function refresh_time() {
  ?>
  <script type="text/javascript">
    $(document).ready(function(){
      setInterval(function(){
        do_shortcode( '[time_by_locate]' );
      }, 2000);
    });
  </script>
  <?php
}
