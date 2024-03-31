//Dark Mode
var icon = document.getElementById("icon");
icon.onclick = function () { 
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "dark theme icon/moon.png";
    } else {
        icon.src = "dark theme icon/sun.png";
    }
}
//
//Scroll To Top
let up = document.querySelector(".fa-regular.fa-circle-up");
window.onscroll = function () {
    if (this.scrollY >= 500) {
        up.setAttribute("id", "up");
    } else {
        up.removeAttribute("id");
    }
}
up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
//
//placeholder
var myInputs = document.querySelectorAll(".main-input");

myInputs.forEach(function(input) {
    input.addEventListener('focus', function() {
    this.setAttribute("data-place", this.getAttribute("placeholder"));
    this.setAttribute("placeholder", "");
    });

    input.addEventListener('blur', function() {
    this.setAttribute("placeholder", this.getAttribute("data-place"));
    this.setAttribute("data-place", "");
    });
});
//
//textarea Number
var textarea = document.getElementById("text");
var count = document.getElementById("count");
var maxLenght=textarea.getAttribute( "maxlength" );

textarea.oninput = function () {

    count.innerHTML = maxLenght - this.value.length;
    
    if (count.innerHTML == 0) {
        count.style.color = "red";
    } else {
        count.style.color = "white";
    }
};
//


