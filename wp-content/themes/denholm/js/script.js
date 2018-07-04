/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.


    // Contact form 7.
    // function getZipCode() {
    //   var this_element = $(this);
    //
    //   $.getJSON("http://jsonip.com/?callback=?", function (data_ip) {
    //     var your_ip = data_ip.ip;
    //
    //     $.getJSON('https://ipapi.co/' + your_ip + '/json', function(data){
    //       var your_lat = data.latitude;
    //       var your_lon = data.longitude;
    //
    //       $.ajax({
    //         type : "post",
    //         dataType : "json",
    //         url : customAjax.ajaxurl,
    //         data : {action: "getzipcode", lat: your_lat, lon: your_lon},
    //         beforeSend: function() {
    //           this_element.append('<span class="zipcode-ajax"></span>');
    //         },
    //         success: function(response) {
    //           $('.zipcode-ajax').remove();
    //           $('.your-zipcode input[name="your-zipcode"]').val(response.markup);
    //         },
    //         error: function(response) {
    //
    //         }
    //       });
    //     });
    //   });
    // }


    // Ajax Load products Detail
    function ajaxProductDetail() {
      var current_path = $(this).data('current-path');
      var product_id = $(this).data('product-id');
      var slug = $(this).attr('href');

      $.ajax({
        type : "post",
        dataType : "json",
        url : customAjax.ajaxurl,
        data : {action: "productdetail", productID: product_id, currentPath: current_path},
        beforeSend: function() {
          $('.object-specific .content-inner').remove();
        },
        success: function(response) {
          $('.object-specific').append(response);
          history.pushState({}, null, slug);
          $('window').sliderFunction();
          $(".js-slide").slick("refresh");
          $('window').pagesTransition();
          $('window').showHideFunction();
          $('body').addClass('overflow-hidden');
          $('.objects .js-change-page').removeClass('bg-active is-active');
          $('.page-transition__item.object-specific').addClass('jquery-page-active').removeClass('jquery-page-disabled');
          $('.page-transition__item.objects').addClass('jquery-page-disabled').removeClass('jquery-page-active');
          $('.js-logo, .js-change-page').click(function() {
            $("body").addClass('is-home');
          });
          $('.js-logo.denholm-logo, .denholm-loaded .js-change-page').click(function() {
            history.pushState({}, null, "/denholm");
          });
          $('.back-link').click(function() {
            $('.page-transition__item.object-specific').addClass('jquery-page-disabled').removeClass('jquery-page-active');
            $('.page-transition__item.objects').addClass('jquery-page-active').removeClass('jquery-page-disabled');
            $('.objects .js-change-page').addClass('bg-active is-active');
            history.pushState({}, null, "/denholm");
            return false;
          });
        },
        error: function(response) {
        }
      });

      return false;
    }

    // Ajax load page
    function ajaxPageLoad() {
      var page_id = $(this).data('page-id');
      var page_name = $(this).data('page-name');
      var page_url = $(this).data('page-url');
      var start_load = $(this).data('start-load');

      $.ajax({
        type : "post",
        dataType : "json",
        url : customAjax.ajaxurl,
        data : {action: "pageloadajax", pageID: page_id},
        beforeSend: function() {
          $('.page-ajaxload .page-transition__wrap').remove();
          $('.page-ajaxload .page-transition__content').remove();
          $(".page-transition").removeClass('denholm-start sjc-start');
          $('.page-transition').addClass(start_load);
        },
        success: function(response) {
          var $widthWd = $( window ).width();
          if($widthWd > 767) {
            $.fn.multiscroll.moveTo(1);
          }
          $(window).scrollTop(0);
          $('.page-ajaxload').append(response);
          history.pushState({}, null, page_url);
          $('window').pagesTransition();
          $('window').sliderFunction();
          $('window').showHideFunction();
          $('.page-transition').addClass(page_name).removeClass(start_load);
          $('body').addClass('is-home overflow-hidden');
          $('.js-logo').click(function() {
            $("body").addClass('is-home');
          });
          $('.back-to-home').click(function() {
            history.pushState({}, null, "/");
            $(".page-transition").removeClass('denholm-start sjc-start');
            $(".page-transition").removeClass(page_name).addClass(start_load);
            $('body').removeClass('overflow-hidden');
            return false;
          });
          $('.box-product__item .load-product').on('click', ajaxProductDetail);
          wpcf7.initForm( $('.wpcf7') );
        },
        error: function(response) {
        }
      });

      return false;
    }

  $(document).ready(function() {
    $('window').showHideFunction();
    $('window').scrollPagge();
    $('window').pagesTransition();
    $('window').rotateText();
    $('window').sliderFunction();
    // $('window').backToHome();

    $('.js-logo').click(function() {
      $("body").addClass('is-home');
    });

    $('.js-back-overview').on('click', function() {
      alert("ok");
      $('.objects .js-change-page').trigger('click');
    });
    //alert('ok');
    // Products Detail
    $('.box-product__item .load-product').on('click', ajaxProductDetail);
    $('.js-load-page').on('click', ajaxPageLoad);

  });

}(this, this.document, this.jQuery));
