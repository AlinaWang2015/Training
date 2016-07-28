/// <reference path="../jquery-1.10.2.js" />
window.onresize = function () {
 var body = $("body").width();
    if (body > 900) {
        $(".menu li a").css("margin-left", "10px");
        $(".menu li a").css("margin-right", "10px");
    }
    if (body > 815 && body < 900) {
        $(".menu li a").css("margin-left", "4px");
        $(".menu li a").css("margin-right", "4px");
    }
    else if (body > 768 && body < 815) {
        $(".menu li a").css("margin-left", "0");
        $(".menu li a").css("margin-right", "0");
    }
}
