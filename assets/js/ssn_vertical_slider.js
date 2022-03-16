$.fn.ssn_vertical_slider = function(options){

    var child = ".item";
    var width = 150;

    var slider = $(this);
    var slides = $(child, this);
    var slide_count = slides.length;

    var current = 1;

    var interval;

    function initialize(options){
        if(options.hasOwnProperty("width")){
            width = options.width;
        }
        if(options.hasOwnProperty("child")){
            child = options.child;
        }

        //Add width to the slider set by user
        slider.width(width);

        //Add initial vertical slide class to children
        slides.addClass("ssn_vertical_slide");
        $(slides[current-1]).addClass("active");
    }

    function slide(position){
        var top = position - 1;
        if(top <= 0){
            top = slide_count;
        }
        var active = position;
        var bottom = position + 1;
        if(bottom > slide_count){
            bottom = 1;
        }

        $(slides[top - 1]).removeClass("active")
        $(slides[top - 1]).addClass("top");

        $(slides[active - 1]).addClass("active");

        if($(slides[bottom - 1]).hasClass("top")) {
            $(slides[bottom - 1]).removeClass("top");
        }
    }

    function start() {
        interval = setInterval(function () {
            current = current + 1;
            if (current > slide_count) {
                current = 1;
            }
            slide(current);
        }, 2000);
    }

    function pause(){
        clearInterval(interval);
    }

    //Execute the slider
    initialize(options);
    start();
    slider.hover(function(){pause()}, function(){start()})

}