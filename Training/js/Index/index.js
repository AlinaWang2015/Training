var width = document.body.clientWidth;

var hasAddText = 0;

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

    if (width < 768) {
        setText();
    }
   
}

window.onresize = setText;
    function setText(){
    
    /*change img to text*/
    if (width < 768 && hasAddText == 0) {
        /*$(".hide_sm").removeAttr("src").addClass("img_sm");*/
        console.debug("bb");
        $(".hide_img1").remove();
        $("#append1").append('<p><strong><a href="#">Developer&nbsp;Tools</a></strong><br />ThinkGeo\'s Map Suite GIS map controls and components add interactive customized maps and GIS features to the websites and applications you build with the Microsoft.NET and Xamarin Frameworks. As a software developer, you can use Map Suite\'s powerful map API to add geospatial functionality to your projects, including geocoding,spatial analysis, routing, geoprocessing, and much more using C# and VB.NET.</P>');
        $(".hide_img2").remove();
        $("#append2").append('<p><strong><a href="#">Clound&nbsp;Services</a></strong><br />Thinkgeo\'s clound services include vector data, image map display, path analysis to select the best path, address location and altitude query.</p>')
        $(".hide_img3").remove();
        $("#append3").append('<p><strong><a href="#">Professional&nbsp;Services</a></strong><br />Do you need to create an application that uses maps, but aren\'t sure where to begin? ThinkGeo\'s project design, development, implementation and training services will help you bring your GIS ideas to market quickly and affordably. If you\'re interested in having us work with you to create the perfect mapping solution, let us know your project requirements by submitting the form at the bottom of the page.<p>')
        $(".hide_img4").remove();
        $("#append4").append('<p><strong><a href="#">Emergency&nbsp;Support</a></strong><br />Let us help you maximize the performance of your Map Suite projects by reviewing and analyzing your application and recommending performance-boosting techniques that will improve user experience<P>')
        $(".hide_img5").remove();
        $("#append5").append('<p><strong><a href="#">Grapecity&nbsp;企业文化视频</a></strong><br />')
        $(".hide_img6").remove();
        $("#append6").append('<p><strong><a href="#">工作机会</a></strong><br />')
        $(".hide_img7").remove();
        $("#append7").append('<p><strong><a href="#">研发环境</a></strong><br />');
        hasAddText = 1;
    } else {
        console.debug("aa");
        window.location.href = "/page/index.html";
        hasAddText = 0;
    }

}

