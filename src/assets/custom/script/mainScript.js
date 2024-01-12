$('.menu-icon, [data-toggle="left-sidebar-close"]').on('click', function(){
    //$(this).toggleClass('open');
    $('.left-side-bar').toggleClass('open');
    $('.mobile-menu-overlay').toggleClass('show');
});
$('[data-toggle="header_search"]').on('click', function() {
    jQuery('.header-search').slideToggle();
});

var w = $(window).width();
$(document).on('touchstart click', function(e){
    if($(e.target).parents('.left-side-bar').length == 0 && !$(e.target).is('.menu-icon, .menu-icon img'))
    {
        $('.left-side-bar').removeClass('open');
        $('.menu-icon').removeClass('open');
        $('.mobile-menu-overlay').removeClass('show');
    };
});
$(window).on('resize', function() {
    var w = $(window).width();
    if ($(window).width() > 1200) {
        $('.left-side-bar').removeClass('open');
        $('.menu-icon').removeClass('open');
        $('.mobile-menu-overlay').removeClass('show');
    }
});