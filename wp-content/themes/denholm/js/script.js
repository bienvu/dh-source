/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.

    // Show hidden function.
    var showHiddenFunction = function (btn, flag, clickOutside, hasGrandParent, dropDown, childSelector) {
      var $btn = btn,
          $parent = $btn.parent(),
          $grandParent = $parent.parents('body'),
          $childSelector = childSelector,
      dropDown = dropDown === true ? true : false;
      clickOutside = clickOutside === false ? false : true;
      hasGrandParent = hasGrandParent === true ? true : false;
      $btn.on('click', function (e) {
        e.preventDefault();
        if (!$parent.hasClass(flag)) {
          $parent.addClass(flag);

          if (dropDown === true) {
            // $childSelector.slideDown("slow");
            $childSelector.addClass(flag);
          }

          if (hasGrandParent === true) {
            $grandParent.addClass(flag);
            $btn.addClass(flag);
          }
        }
        else {
          $parent.removeClass(flag);
          if (dropDown === true) {
            // $childSelector.slideUp("slow");
            $childSelector.removeClass(flag);
          }

          if (hasGrandParent === true) {
            $grandParent.removeClass(flag);
            $btn.removeClass(flag);
          }
        }
      });
      if (clickOutside === true) {
        $(document).on('touchstart click', function (e) {
          if ($parent.has(e.target).length === 0 && $parent.hasClass(flag)) {
            $parent.removeClass(flag);

            if (hasGrandParent === true) {
              $grandParent.removeClass(flag);
              $btn.removeClass(flag);
            }

            if (dropDown === true) {
              // $childSelector.slideUp("slow");
              $childSelector.removeClass(flag);
            }
          }
        });
      }
    };


  $(document).ready(function() {
    // Menu mobile
    var $menuResponsive = $('.js-toggle-menu'),
        showMainMenuFlag = 'is-show',
        $parent = $menuResponsive.closest('.page-transition__wrap'),
        $childMenu = $parent.find('.page-transition__menu');
    showHiddenFunction($menuResponsive, showMainMenuFlag, false, true, true, $childMenu);

    // if($('.landing').length) {
    //   $('.landing').multiscroll({
    //     verticalCentered: true,
    //     scrollingSpeed: 400,
    //     easing: 'easeInQuart',
    //     menu: false,
    //     navigation: false,
    //     loopBottom: false,
    //     loopTop: true,
    //     css3: true,
    //     paddingTop: 0,
    //     paddingBottom: 0,
    //     normalScrollElements: null,
    //     keyboardScrolling: true,
    //     touchSensitivity: 5
    //   });
    // }

     //Rote title
     var strings = [],
         $rotate_item = $(".js-text-slider"),
         $rotate_item_span = $(".js-text-slider span");
     if($rotate_item.length) {
       $rotate_item.parent().addClass('with-slide');
       $rotate_item_span.each(function() {
           strings.push($(this).text());
       });

       function rotateHeadings() {
         var ct = $rotate_item.data("string") || 0;
         $rotate_item.data("string",
           ct == strings.length -1 ? 0 : ct + 1)
           .text(strings[ct])
           .fadeIn().delay(1500).fadeOut(100, rotateHeadings);
       }

       rotateHeadings();
     }

    // Page transition
    $('.js-change-page').each(function() {
      var $this = $(this);
      $this.click(function (ev) {

        if (!$this.hasClass('bg-active')) {
          $('.js-change-page').removeClass('bg-active');
          $(this).addClass('bg-active');
          var page  = $(ev.target).attr("data-page-name");
          var trans = $(ev.target).attr("data-page-trans");
          $(".screen").page().transition(page, trans);
          // if ($(".screen").page().fetch(page) === null)
          //     $(".screen").page().shake();
          // else
          //     $(".screen").page().transition(page, trans);

          // $('.js-slide').each(function() {
          //   $(this).not('.slick-initialized').slick({
          //     infinite: true,
          //     autoplay: true,
          //   });
          // });
        }

        $("body, .page-transition__menu-mobile, .js-toggle-menu, .page-transition__menu").removeClass('is-show');
        return false;
      });
    });

    // Slider
    $('.js-slide').each(function() {
      $(this).not('.slick-initialized').slick({
        infinite: true,
        autoplay: false,
      });
    });

    // Slider Circle
    $('.js-slide-circle').each(function() {
      $(this).not('.slick-initialized').slick({
        infinite: true,
        autoplay: false,
      });
    });

    // Rotate text.
    if($(".js-rotating").length) {
      $(".js-rotating").Morphext({
        animation: "bounceInDown", // Overrides default "bounceIn"
        speed: 2000, // Overrides default 2000
      });
    }

    //
    // $(".landing__left .ms-section").each(function() {
    //   var $thisIndex = $(this).index();
    //   console.log($thisIndex);
    //   $('.landing__right .ms-section').eq($thisIndex).insertAfter($(this));
    //   // $(this).eq($thisIndex).addClass("demo-" + $thisIndex);
    // })

    $('.landing__right .ms-section').eq(0).clone().insertAfter($(".landing__left .ms-section").eq(0)).addClass("cloned");
    $('.landing__right .ms-section').eq(1).clone().insertAfter($(".landing__left .ms-section").eq(2)).addClass("cloned");
    $('.landing__right .ms-section').eq(2).clone().insertAfter($(".landing__left .ms-section").eq(4)).addClass("cloned");

  });

}(this, this.document, this.jQuery));
