let slides=document.querySelectorAll(".slide");
let slider=document.getElementById("slider");
let slideindex=0;
    function automatic(){
        slideindex++;
        if(slideindex>=slides.length){
        slideindex=0;
    }
    slider.style.transform=`translateX(-${slideindex * 100}%)`;
    }    
    setInterval(automatic,2000);
    
    
   

