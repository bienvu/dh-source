(function( $ ){
  //  Scroll page function.
  $.fn.scrollPagge = function() {
     var $widthWd = $( window ).width();
     if($widthWd > 767) {
       if($('.landing').length) {
         $('.landing').multiscroll({
           verticalCentered: true,
           scrollingSpeed: 400,
           easing: 'easeInQuart',
           menu: false,
           navigation: false,
           loopBottom: false,
           loopTop: false,
           css3: true,
           paddingTop: 0,
           paddingBottom: 0,
           normalScrollElements: null,
           keyboardScrolling: true,
           touchSensitivity: 5
         });
       }
       $('.js-cloned').remove();
     } else {
       // $.fn.multiscroll.destroy();
       $('.landing__right .ms-section').eq(0).clone().insertAfter($(".landing__left .ms-section").eq(0)).addClass("js-cloned");
       $('.landing__right .ms-section').eq(1).clone().insertAfter($(".landing__left .ms-section").eq(2)).addClass("js-cloned");
       $('.landing__right .ms-section').eq(2).clone().insertAfter($(".landing__left .ms-section").eq(4)).addClass("js-cloned");
     }
   }

   // Page transition
   $.fn.pagesTransition = function() {
     $('.js-change-page').each(function() {
       var $this = $(this);
       $this.click(function (ev) {
         $("body").removeClass('is-home');

         if (!$this.hasClass('is-active')) {
           $('.js-change-page').removeClass('bg-active is-active');
           $(this).addClass('bg-active is-active');
           var page  = $(ev.target).attr("data-page-name");
           var trans = $(ev.target).attr("data-page-trans");
           $(".screen").page().transition(page, trans);
         }
         $(".js-slide").slick("refresh");
         $(".js-slide-auto").slick("refresh");

         $("body, .page-transition__menu-mobile, .js-toggle-menu, .page-transition__menu").removeClass('is-show');

         return false;
       });
     });
   }

   // Page transition
   $.fn.showHideFunction = function() {

     // Show hidden function.
     // var showHiddenFunction = function (btn, flag, clickOutside, hasGrandParent, dropDown, childSelector) {
     //   var $btn = btn,
     //       $parent = $btn.parent(),
     //       $grandParent = $parent.parents('body'),
     //       $childSelector = childSelector,
     //   dropDown = dropDown === true ? true : false;
     //   clickOutside = clickOutside === false ? false : true;
     //   hasGrandParent = hasGrandParent === true ? true : false;
     //   // console.log("ok");
     //   $btn.on('click', function (e) {
     //     e.preventDefault();
     //     if (!$parent.hasClass(flag)) {
     //       $parent.addClass(flag);
     //
     //       if (dropDown === true) {
     //         // $childSelector.slideDown("slow");
     //         $childSelector.addClass(flag);
     //       }
     //
     //       if (hasGrandParent === true) {
     //         $grandParent.addClass(flag);
     //         $btn.addClass(flag);
     //       }
     //     }
     //     else {
     //       $parent.removeClass(flag);
     //       if (dropDown === true) {
     //         // $childSelector.slideUp("slow");
     //         $childSelector.removeClass(flag);
     //       }
     //
     //       if (hasGrandParent === true) {
     //         $grandParent.removeClass(flag);
     //         $btn.removeClass(flag);
     //       }
     //     }
     //   });
     //   if (clickOutside === true) {
     //     $(document).on('touchstart click', function (e) {
     //       if ($parent.has(e.target).length === 0 && $parent.hasClass(flag)) {
     //         $parent.removeClass(flag);
     //
     //         if (hasGrandParent === true) {
     //           $grandParent.removeClass(flag);
     //           $btn.removeClass(flag);
     //         }
     //
     //         if (dropDown === true) {
     //           // $childSelector.slideUp("slow");
     //           $childSelector.removeClass(flag);
     //         }
     //       }
     //     });
     //   }
     // };
     //
     // $('.js-toggle-menu').each(function() {
     //   var $this = $(this),
     //       showMainMenuFlag = 'is-show',
     //       $parent = $this.closest('.page-transition__wrap'),
     //       $childMenu = $parent.find('.page-transition__menu');
     //   showHiddenFunction($this, showMainMenuFlag, false, false, true, $childMenu);
     // });

     $('.js-toggle-menu').each(function() {
       var $this = $(this),
         flag = 'is-show',
         $parent = $this.closest('.page-transition__wrap'),
         $childMenu = $parent.find('.page-transition__menu');

         $this.on('touchstart click', function (e) {
           e.preventDefault();
           if(!$('body').hasClass(flag)) {
             // console.log("show");
             $this.addClass(flag);
             $parent.addClass(flag);
             $childMenu.addClass(flag);
             $('body').addClass(flag);
           } else {
             // console.log("hidden");
             $this.removeClass(flag);
             $parent.removeClass(flag);
             $childMenu.removeClass(flag);
             $('body').removeClass(flag);
           }
         });
     });
   }

   // Slider
   $.fn.sliderFunction = function() {
     $('.js-slide').each(function() {
       $(this).not('.slick-initialized').slick({
         infinite: true,
         autoplay: false
       });
     });

     $('.js-slide-auto').each(function() {
       $(this).not('.slick-initialized').slick({
         infinite: true,
         autoplay: true,
       });
     });
   }

   // Swipe text
   $.fn.swipeText = function() {
     var animationDelay = 2500,
       barAnimationDelay = 3800,
       barWaiting = barAnimationDelay - 3000,
       lettersDelay = 50,
       typeLettersDelay = 150,
       selectionDuration = 500,
       typeAnimationDelay = selectionDuration + 800,
       revealDuration = 600,
       revealAnimationDelay = 1500;


     initHeadline();


     function initHeadline() {

       singleLetters($('.sp-headline.letters').find('b'));
       animateHeadline($('.sp-headline'));
     }

     function singleLetters($words) {
       $words.each(function() {
         var word = $(this),
           letters = word.text().split(''),
           selected = word.hasClass('is-visible');
         for (i in letters) {
           if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
           letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
         }
         var newLetters = letters.join('');
         word.html(newLetters).css('opacity', 1);
       });
     }

     function animateHeadline($headlines) {
       var duration = animationDelay;
       $headlines.each(function() {
         var headline = $(this);

         if (headline.hasClass('loading-bar')) {
           duration = barAnimationDelay;
           setTimeout(function() {
             headline.find('.sp-words-wrapper').addClass('is-loading')
           }, barWaiting);
         } else if (headline.hasClass('clip')) {
           var spanWrapper = headline.find('.sp-words-wrapper'),
             newWidth = spanWrapper.width() + 10
           spanWrapper.css('width', newWidth);
         } else if (!headline.hasClass('type')) {

           var words = headline.find('.sp-words-wrapper b'),
             width = 0;
           words.each(function() {
             var wordWidth = $(this).width();
             if (wordWidth > width) width = wordWidth;
           });
           headline.find('.sp-words-wrapper').css('width', width);
         };

         setTimeout(function() {
           hideWord(headline.find('.is-visible').eq(0))
         }, duration);
       });
     }

     function hideWord($word) {
       var nextWord = takeNext($word);

       if ($word.parents('.sp-headline').hasClass('type')) {
         var parentSpan = $word.parent('.sp-words-wrapper');
         parentSpan.addClass('selected').removeClass('waiting');
         setTimeout(function() {
           parentSpan.removeClass('selected');
           $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
         }, selectionDuration);
         setTimeout(function() {
           showWord(nextWord, typeLettersDelay)
         }, typeAnimationDelay);

       } else if ($word.parents('.sp-headline').hasClass('letters')) {
         var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
         hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
         showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

       } else if ($word.parents('.sp-headline').hasClass('clip')) {
         $word.parents('.sp-words-wrapper').animate({
           width: '2px'
         }, revealDuration, function() {
           switchWord($word, nextWord);
           showWord(nextWord);
         });

       } else if ($word.parents('.sp-headline').hasClass('loading-bar')) {
         $word.parents('.sp-words-wrapper').removeClass('is-loading');
         switchWord($word, nextWord);
         setTimeout(function() {
           hideWord(nextWord)
         }, barAnimationDelay);
         setTimeout(function() {
           $word.parents('.sp-words-wrapper').addClass('is-loading')
         }, barWaiting);

       } else {
         switchWord($word, nextWord);
         setTimeout(function() {
           hideWord(nextWord)
         }, animationDelay);
       }
     }

     function hideLetter($letter, $word, $bool, $duration) {
       $letter.removeClass('in').addClass('out');

       if (!$letter.is(':last-child')) {
         setTimeout(function() {
           hideLetter($letter.next(), $word, $bool, $duration);
         }, $duration);
       } else if ($bool) {
         setTimeout(function() {
           hideWord(takeNext($word))
         }, animationDelay);
       }

       if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
         var nextWord = takeNext($word);
         switchWord($word, nextWord);
       }
     }

     function showLetter($letter, $word, $bool, $duration) {
       $letter.addClass('in').removeClass('out');

       if (!$letter.is(':last-child')) {
         setTimeout(function() {
           showLetter($letter.next(), $word, $bool, $duration);
         }, $duration);
       } else {
         if ($word.parents('.sp-headline').hasClass('type')) {
           setTimeout(function() {
             $word.parents('.sp-words-wrapper').addClass('waiting');
           }, 200);
         }
         if (!$bool) {
           setTimeout(function() {
             hideWord($word)
           }, animationDelay)
         }
       }
     }

     function takeNext($word) {
       return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
     }

     function takePrev($word) {
       return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
     }

     function switchWord($oldWord, $newWord) {
       $oldWord.removeClass('is-visible').addClass('is-hidden');
       $newWord.removeClass('is-hidden').addClass('is-visible');
     }
   }
})( jQuery );
