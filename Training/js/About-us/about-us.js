(function addEventHandler() {
    document.getElementById('ch').addEventListener("click", clickhandler);
    document.getElementById('am').addEventListener("click", clickhandler);

    var arrow1 = document.getElementById("arrow1");
    arrow1.style.transform = "rotate(45deg)";
    arrow1.style.transition = "all .5s ease-in .1s";
})();

var selected = 1;
function clickhandler(e) {
    if (e.currentTarget.id == 'ch' && selected != 1) {
        var arrow1 = document.getElementById("arrow1");
        arrow1.style.transform="rotate(45deg)";
        arrow1.style.transition = "all .5s ease-in .1s";

        var arrow2 = document.getElementById("arrow2");
        arrow2.style.transform = "rotate(-45deg)";
        arrow2.style.transition = "all .5s ease-in .1s";

        selected = 1;
    }
    else if (e.currentTarget.id == 'am' && selected != 2) {
        var arrow1 = document.getElementById("arrow1");
        arrow1.style.transform = "rotate(-45deg)";
        arrow1.style.transition = "all .5s ease-in .1s";

        var arrow2 = document.getElementById("arrow2");
        arrow2.style.transform = "rotate(45deg)";
        arrow2.style.transition = "all .5s ease-in .1s";

        selected = 2;
    }
}
