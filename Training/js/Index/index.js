window.onload = function () {
    var $nowIndex = 0;
    var $nextIndex = 0;

    //# click to change img 
    $("#pages .page").click(function () {
        var clickId = $(this).attr("value");

        $(this).addClass("active").siblings().removeClass("active");
        $("#slides").find("img").eq(clickId).addClass("active").siblings().removeClass("active");

    });

    //use a timer to switch the slide
    var atime = setInterval(function () {
        if ($("#pages div.active").attr("value") == $("#pages div").last().attr("value")) {
            $("#pages div").first().click();
        } else {
            $("#pages div.active").next().click();
        }
    }, 2000);

    //# change img by animate
}

//$(document).ready(function () {
//    $(window).resize(function () {
//        var widthNow;
//        var heightNow;
       
//        widthNow = $("#slides img.active").attr("width");
//        alert(widthNow);

//    });

//});