/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.

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
          $("body").addClass('loading-overlay');
        },
        success: function(response) {
          $('.object-specific').append(response);
          $("body").removeClass('loading-overlay');
          history.pushState({}, null, slug);
          $('window').sliderFunction();
          $(".js-slide").slick("refresh");
          $('window').pagesTransition();
          $('body, html').addClass('overflow-hidden');
          $('.page-transition__item.object-specific').addClass('jquery-page-active').removeClass('jquery-page-disabled');
          $('.page-transition__item.objects').addClass('jquery-page-disabled').removeClass('jquery-page-active');
          $('.js-logo, .page-transition__logo .js-change-page').click(function() {
            $("body").addClass('is-home');
          });
          $("select").chosen({
            "disable_search": true
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
          $('html').addClass('overflow-hidden');
          $('.js-logo').click(function() {
            $("body").addClass('is-home');
          });
          $("select").chosen({
            "disable_search": true
          });
          $('.back-to-home').click(function() {
            if($widthWd > 767) {
              $.fn.multiscroll.moveTo(1);
            }
            history.pushState({}, null, "/");
            $(".page-transition").removeClass('denholm-start sjc-start');
            $(".page-transition").removeClass(page_name).addClass(start_load);
            $('body, html').removeClass('overflow-hidden');
            setTimeout(function(){
              $('.page-ajaxload .page-transition__wrap').remove();
              $('.page-ajaxload .page-transition__content').remove();
            }, 1000);
            return false;
          });
          $('.box-product__item .load-product').on('click', ajaxProductDetail);
          function initContactForm() {
           $( 'div.wpcf7 > form' ).each( function() {
            var $form = $( this );
            wpcf7.initForm( $form );
            if ( wpcf7.cached ) {
             wpcf7.refill( $form );
            }
           });
          }

          initContactForm();
        },
        error: function(response) {
        }
      });

      return false;
    }

  // Read Time
  function myTimer() {
    var d = new Date();
    $('.js-realtime').empty().append(d.toLocaleTimeString());
  }

  $(document).ready(function() {
    $('window').showHideFunction();
    $('window').scrollPagge();
    $('window').pagesTransition();
    $('window').sliderFunction();
    $('window').swipeText();
    $("select").chosen({
      "disable_search": true
    });

    $('.js-logo').click(function() {
      $("body").addClass('is-home');
    });

    if($('#videoSjc').length) {
      document.getElementById('videoSjc').play();
    }

    if($('.page-id-83').length || $('.page-id-89').length) {
      $('html').addClass('mobile-overflow');
    }

    // Products Detail
    $('.box-product__item .load-product').on('click', ajaxProductDetail);
    $('.js-load-page').on('click', ajaxPageLoad);
    setInterval(myTimer, 1000);
  });

}(this, this.document, this.jQuery));
