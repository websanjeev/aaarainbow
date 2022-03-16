$(document).ready(function() {
    $("#partner-slider").owlCarousel({
        items : 6, //10 items above 1000px browser width
        itemsDesktop : [1000,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,3], //2 items between 600 and 0
        itemsMobile : [0, 3], // itemsMobile disabled - inherit from itemsTablet option
        autoPlay: true
    });
});