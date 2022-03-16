$(document).ready(function(){
    var nav = $("#main__nav");
    var btn_nav_open = $(".btn__menu--open");
    var btn_nav_close = $(".btn__menu--close", nav);

    btn_nav_open.click(function(e){
        e.preventDefault();
        if(nav.hasClass("menu__close")){
            nav.removeClass("menu__close");
        }
        if(!nav.hasClass("menu__open")){
            nav.addClass("menu__open");
        }
    });

    btn_nav_close.click(function(e){
        e.preventDefault();
        if(nav.hasClass("menu__open")){
            nav.removeClass("menu__open");
        }
        if(!nav.hasClass("menu__close")){
            nav.addClass("menu__close");
        }
    });
});