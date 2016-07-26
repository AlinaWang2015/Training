function showDiv(obj) {
    var divID = document.getElementById(obj);
    if (divID.style.display == "none") {
        divID.style.display = "block";
    }
}

function trans(obj) {
    var id = document.getElementById(obj);
    if (id === "cheng") {
        transform:rotate(7deg);
        -ms-transform:rotate(7deg); 	/* IE 9 */
        -moz-transform:rotate(7deg); 	/* Firefox */
        -webkit-transform:rotate(7deg); /* Safari 和 Chrome */
        -o-transform:rotate(7deg); 	/* Opera */
    }
}