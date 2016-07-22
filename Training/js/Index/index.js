window.onload = function () {

    //#change img by change img's src
    $("#pages .page").click(function () {
        var chooseId = $(this).attr("value");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $("#slides img").attr("src", '../img/Index/head' + chooseId + '.jpg');
    });

    //# use a timer to switch the slide

    //#change img by fadein fadeout

}