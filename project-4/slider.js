let slider=document.querySelector(".slider");
let slides=document.querySelectorAll(".slide");
let slideindex=0;


function slidepos(){
    slider.style.transform = `translateX(-${slideindex * 100}%)`;
}

function prev(){
    slideindex = (slideindex == 0) ? slides.length - 1 : slideindex - 1;
    slidepos();
}
function next(){
    slideindex = (slideindex == slides.length - 1) ? 0 : slideindex + 1;
    slidepos();
}