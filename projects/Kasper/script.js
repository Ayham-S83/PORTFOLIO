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