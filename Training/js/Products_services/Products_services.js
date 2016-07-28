/// <reference path="../jquery-1.10.2.js" />
window.onresize = function () {
 var body = $("body").width();
    if (body > 992) {
        $(".menu li a").css("margin-left", "15px");
        $(".menu li a").css("margin-right", "15px");
    }
    if (body > 900 && body < 992) {
        $(".menu li a").css("margin-left", "11px");
        $(".menu li a").css("margin-right", "11px");
    }
    if (body > 815 && body < 900) {
        $(".menu li a").css("margin-left", "4px");
        $(".menu li a").css("margin-right", "4px");
    }
    else if (body > 768 && body < 815) {
        $(".menu li a").css("margin-left", "1px");
        $(".menu li a").css("margin-right", "1px");
    }
    if (body > 992 && body<1010) {
        $(".menu").css("float", "left");        
    }
    if (body > 1010) {
        $(".menu").css("float", "none");
    }
}
