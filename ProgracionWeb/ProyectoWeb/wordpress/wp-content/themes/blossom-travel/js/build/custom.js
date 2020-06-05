jQuery(document).ready(function($) {

    var rtl;
    
    if( blossom_travel_data.rtl == '1' ){
        rtl = true;
    }else{
        rtl = false;
    }
    
    var winWidth = $(window).width();
    $('.sticky-t-bar .close').on('click', function(){
        $(this).parent('.sticky-t-bar').toggleClass('active');
        $(this).siblings('.sticky-bar-content').slideToggle();
    });

    $(window).on('resize load', function() {
        var stickyBarHeight = $('.sticky-bar-content').outerHeight();
        $('.sticky-t-bar + .site-header.header-one').css('padding-top', stickyBarHeight);

        if($(window).width() > 1024) {
            var itemCount = $('.header-one .main-navigation .nav-menu > li').size();
            var liIndex = Math.round( itemCount / 2 ) - 1;
            $('.header-one .site-branding').insertAfter($('.header-one .main-navigation .nav-menu > li:nth('+ liIndex +')'));

            var itemCount2 = $('.header-two .main-navigation .nav-menu > li').size();
            var liIndex2 = Math.round( itemCount2 / 2 ) - 1;
            $('.header-two .site-branding').insertAfter($('.header-two .main-navigation .nav-menu > li:nth('+ liIndex2 +')'));
        } else {
            $('.header-one .site-branding, .header-two .site-branding').insertBefore($('.header-one .logo-menu-wrap, .header-two .logo-menu-wrap'));
        }

        //for sticky social share
        var stickyHeaderHeight = $('.sticky-header').outerHeight() + 20;

        //sticky header
        var headerHeight = $('.site-header').outerHeight();
        if( blossom_travel_data.sticky == '1' ){
            $(window).scroll(function(){
                if($(window).scrollTop() > headerHeight) {
                    $('.sticky-header').addClass('stick');
                }else {
                    $('.sticky-header').removeClass('stick');
                }
            });

            $('.widget-sticky .widget-area .widget:last-child').css('top', stickyHeaderHeight);
            $('.sticky-header + .site-content .sticky-meta .article-meta').css('top', stickyHeaderHeight);
        }

        if($('.site-header').hasClass('header-one')){
            $('.banner:not(.slider-two) .entry-header').css('padding-top', headerHeight);
            $('.site-content > .page-header').css('padding-top', headerHeight);
        }
    });//resize & load end

    $('.menu-item-has-children').prepend('<button class="submenu-toggle"><i class="fas fa-caret-down"></i></button>');

    $('.header-four button.toggle-btn').clone().appendTo('.header-four .header-main .container');

    $('.header-six button.toggle-btn').clone().appendTo('.header-six .header-t .container');

    //responsive menu toggle
    $('button.toggle-btn').on('click', function(){
        $('body').toggleClass('menu-toggled');
    });

    //responsive submenu toggle
    $('.responsive-nav .main-navigation .submenu-toggle').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle();
    });

    //for accessibility
    $('.main-navigation ul li a, .main-navigation ul li .submenu-toggle').focus(function() {
        $(this).parents('li').addClass('focused');
    }).blur(function() {
        $(this).parents('li').removeClass('focused');
    });

    //Toggle header search
    $('.header-search .search-toggle').click(function(e){
        $(this).parent('.header-search').addClass('active');
        e.stopPropagation();
    });
    $('.header-search .header-search-wrap').click(function(e){
        e.stopPropagation();
    });

    $(window).click(function(){
        $('.header-search').removeClass('active');
    });

    $('.about-section .widget .widget-title').insertBefore('.about-section .widget-featured-holder .featured_page_content');

    $('.trending-section .widget ul').addClass('owl-carousel');

    $('.trending-section .section-grid, .trending-section .widget ul').owlCarousel({
        items: 3,
        autoplay: false,
        loop: false,
        nav: true,
        dots: false,
        lazyLoad   : true,
        rtl : rtl,
        margin: 30,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            1025 : {
                items: 3,
            }
        }
    });
  
    //toggle social share
    $('.post-thumbnail .share-icon').click(function(e){
        $('.social-share').removeClass('active');
        $(this).parent('.social-share').addClass('active');
        e.stopPropagation();
    });
    $('.social-share').click(function(e){
        e.stopPropagation();
    });

    $(window).click(function(){
        $('.social-share').removeClass('active');
    });

    $(window).on('keyup', function(event) { 
        if (event.key == "Escape") { 
            $('.header-search').removeClass('active');
            $('.social-share').removeClass('active');
        } 
    });
    
    //wrap widget title content with span
    $('.site-footer .widget .widget-title, #secondary .widget .widget-title, section.client-logo-section .widget .widget-title').wrapInner('<span></span>');

    //back to top
    $(window).scroll(function(){
        if($(window).scrollTop() > 300) {
            $('.back-to-top').addClass('show');
        }else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').click(function(){
        $('body, html').animate({
            scrollTop: 0,
        }, 600);
    });

});