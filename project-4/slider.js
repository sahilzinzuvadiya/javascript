// let slider=document.querySelector(".slider");
// let slides=document.querySelectorAll(".slide");
// let slideindex=0;


// function slidepos(){
//     slider.style.transform = `translateX(-${slideindex * 100}%)`;
// }

// function prev(){
//     slideindex = (slideindex == 0) ? slides.length - 1 : slideindex - 1;
//     slidepos();
// }
// function next(){
//     slideindex = (slideindex == slides.length - 1) ? 0 : slideindex + 1;
//     slidepos();
// }
// let arr2 = ["box1_image.jpg","box2_image.jpg","box3_image.jpg","box4_image.jpg","box5_image.jpg"];
// let slideindex = 0;
// function next() {

//     let slider=document.querySelector(".slider");
//     // console.log(slider);
    
//     // let slides=document.querySelectorAll(".slide");
//     slider.style.backgroundImage =`url(${arr2[slideindex]})` ;
//     slideindex++;
//     if (slideindex >= arr2.length) {
//         slideindex = 0;
//     }
// }
let arr2 = ["box1_image.jpg", "box2_image.jpg", "box3_image.jpg", "box4_image.jpg", "box5_image.jpg"];
let slideindex = 0;

function next() {
    let slider = document.querySelector(".slider");

    // Update index first
    slideindex++;
    if (slideindex >= arr2.length) {
        slideindex = 0;
    }

    // Then update the background
    slider.style.backgroundImage = `url(${arr2[slideindex]})`;
}

// let slideindex = 0;
// const slider = document.querySelector(".slider");

// function updateSlide() {
//   slider.style.backgroundImage = `url(images/${arr2[slideindex]})`;
// }

// function next() {
//   slideindex = (slideindex + 1) % arr2.length;
//   updateSlide();
// }

// function prev() {
//   slideindex = (slideindex - 1 + arr2.length) % arr2.length;
//   updateSlide();
// }

// Show the first image on page load
// updateSlide();
// next();