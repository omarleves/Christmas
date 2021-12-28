const searchbtn = document.querySelector("#search-btn")
const searchform = document.querySelector(".search-form")

function search(){
    searchbtn.classList.toggle("fa-times")
    searchform.classList.toggle("active")
    navbar.classList.remove("active")
};


const menubtn = document.querySelector("#menu-btn")
const navbar = document.querySelector("#navbar")

function toggle(){
    navbar.classList.toggle("active")
    searchbtn.classList.remove("fa-times")
    searchform.classList.remove("active")
};


window.onscroll = () => {
    searchbtn.classList.remove("fa-times")
    searchform.classList.remove("active")
    menubtn.classList.remove("fa-times")
    navbar.classList.remove("active")
};


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
    x[slideIndex-1].style.display = "block";  
}