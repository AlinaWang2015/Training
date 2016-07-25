window.onload = function () {
    //# click to change img 
    $("#pages .page").click(function () {
        var clickId = $(this).attr("value");

        $(this).addClass("active").siblings().removeClass("active");
        $("#slides").find("img").eq(clickId).addClass("active").siblings().removeClass("active");
    });
    //use a timer to switch the slide
    var atime = setInterval(function () {
        if ($("#pages .page.active").attr("value") == $("#pages .page").last().attr("value")) {
            $("#pages .page").first().click();
        } else {
            $("#pages .page.active").next().click();
        }
    }, 2000);
}
