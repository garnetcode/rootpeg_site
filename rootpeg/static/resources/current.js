/*!
 * Custom Theme JavaScript
 */
//full-width slider
function fullwidthslider() {
	"use strict";

    var full_slider_w = jQuery(window).width();
    var heights = jQuery('.full_slider .flexslider .slides > li').map(function () {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);
    
    jQuery('.full_slider .flexslider .slides > li').css({'width': full_slider_w, 'min-height': maxHeight});	
};

jQuery(document).ready(function() {
    "use strict";
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').on('click', function() {
        $('.navbar-toggle:visible').click();
    }); 
    
    $('.header-navbar .navbar').sticky({ topSpacing: 0 });
      
    // OWL slider
    if (jQuery('.owl-carousel').size() > 0) {
        
        var owl = $("#owl-journal, #owl-intro");
        
        owl.owlCarousel({
            center: true,
            items:1,
            loop:true,
            margin:40,
            nav:true,
            dots:false,
            responsive:{
                600:{
                    items:2
                }
            }
        });
    }
    /* ---------------------------------------------
     WoW plugin
    --------------------------------------------- */
    new WOW().init({
      mobile: true,
    });
    
    // GT3 Popup Video
    popup_video ();
    
    gt3_menu_line();
    $(window).scroll(function() {
        gt3_menu_line();
    });
    one_page_scroll();

    // flexslider
    if (jQuery('.flexslider').size() > 0) {
        
        jQuery('.full_slider .flexslider li img.slide_bg').each(function(){
            jQuery(this).parents('li').attr('style', 'background-image:url('+$(this).attr('src')+');');		
        });
        
        $('.flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 6000,
            animationSpeed: 2000,
            pauseOnHover: true,
            controlNav: false, 
            touch: true,
            directionNav: true,
            start: function( slider ) {
                $('.full_slider').removeClass( 'loading' );
            }
        });
    }
    
    fullwidthslider();
    
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 81
    })
    // GT3 Popup Video
    function popup_video () {
        if (jQuery(".swipebox-video, .swipebox").length) {
            jQuery( '.swipebox-video, .swipebox' ).swipebox( {
                useCSS : true, // false will force the use of jQuery for animations
                useSVG : true, // false to force the use of png for buttons
                initialIndexOnArray : 0, // which image index to init when a array is passed
                hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
                removeBarsOnMobile : true, // false will show top bar on mobile devices
                hideBarsDelay : 3000, // delay before hiding bars on desktop
                videoMaxWidth : 1140,
                autoplayVideos: true,
                beforeOpen: function() {}, // called before opening
                afterOpen: null, // called after opening
                afterClose: function() {}, // called after closing
                loopAtEnd: false // true will return to the first image after the last image is reached
            } );
        }
    }

    // Video background
    var video_bg_tag = $('.video_bg');
    if (video_bg_tag.size() > 0) {
        video_bg_tag.each(function () {
            if ($(this).children().length == 0) {
                $(this).parent().hide();
            }
        });
        $('.play-video').on('click', function(ev) {
            video_bg_tag.each(function() {
                $(this).find('.video_frame').attr('src', $(this).find('.play-video').attr('data-video-url'));
            });
            video_bg_tag.removeClass('show_video_now');
            $(this).parents('.video_bg').find(".video_frame")[0].src += "&autoplay=1";
            ev.preventDefault();
            insurance_video_background();
            $(this).parents('.video_bg').addClass('show_video_now');
        });
    };
    // create the back to top button
    $('body').prepend('<a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>');

    var amountScrolled = 300;

    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    $('a.back-to-top, a.simple-back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
    
    /* Shortcode Counter */
    if (jQuery(window).width() > 760) {
        jQuery('.shortcode_counter').waypoint(function(){                           
            var set_count = $(this).find('.stat_count').attr('data-count');
            $(this).find('.stat_temp').stop().animate({width: set_count}, {duration: 3000, step: function(now) {
                    var data = Math.floor(now);
                    $(this).parents('.counter_wrapper').find('.stat_count').html(data);
                }
            });
            $(this).find('.stat_count');
        },{offset: 'bottom-in-view', triggerOnce: true});
    } else {
        jQuery('.shortcode_counter').each(function(){                           
            var set_count = $(this).find('.stat_count').attr('data-count');
            $(this).find('.stat_temp').animate({width: set_count}, {duration: 3000, step: function(now) {
                    var data = Math.floor(now);
                    $(this).parents('.counter_wrapper').find('.stat_count').html(data);
                }
            });
            $(this).find('.stat_count');
        },{offset: 'bottom-in-view'});  
    }
    // menu line
    function gt3_menu_line(){
        var menu = jQuery('.collapse.navbar-collapse.header_side.menu_line_enable > ul');
        if (menu.length) {
            menu.each(function(){
                var menu = jQuery(this);
                var current = '';
                if (!menu.find('.menu_item_line').length) {
                    menu.append('<span class="menu_item_line"></span>');
                }                
                var menu_item = menu.find('> .menu-item');
                var currentItem = menu.find('> .menu-item.active');
                var currentItemParent = menu.find('> .current-menu-ancestor');
                var line = menu.find('.menu_item_line');
                if (currentItem.length || currentItemParent.length) {
                    current = currentItem.length ? currentItem : (currentItemParent.length ? currentItemParent : '');
                    line.css({width: current.find('>a').outerWidth()});
                    line.css({left: current.find('>a').offset().left - menu.offset().left});
                }

                menu_item.mouseenter(function(){
                    line.css({width: jQuery(this).find('> a').outerWidth()});
                    line.css({left: jQuery(this).find('> a').offset().left - jQuery(this).parent().offset().left});
                });

                menu.mouseleave(function(){
                    if (current.length) {
                        line.css({width: current.find('> a').outerWidth()});
                        line.css({left: current.find('> a').offset().left - menu.offset().left});
                    } else {
                        line.css({width:'0'});
                        line.css({left:'100%'});
                    }
                });


            })
        }
    }
});


function one_page_scroll(){
  var sticky_header = jQuery('.header-navbar .sticky-wrapper');
  var sticky_header_height = 0;
  var offset = 0;
  var windowW = jQuery(window)
  if (sticky_header.length && windowW.width() >= 1200) {    
    sticky_header_height = sticky_header.height();
  }
  
  jQuery('#mainNav li > a[href*="#"]:not([href="#"])').on('click',function(e){
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = jQuery(this.hash);
      if (target.length) {
        if (target.offset().top < 300) {
          offset = 0;        
        }else{
          offset = target.offset().top - sticky_header_height + 1
        }
            jQuery('html, body').animate({
              scrollTop: (offset)
            }, 1000);
            return false;
        }
    }
  })
}

// Video background
function insurance_video_background() {
    $('.video_bg').each(function () {
        $(this).find('iframe').css({'height': $(this).height() + 'px'});
    });
}
jQuery(window).load(function(){
	"use strict";

    fullwidthslider();
});

jQuery(window).resize(function() {
	"use strict";
	
    fullwidthslider();
});