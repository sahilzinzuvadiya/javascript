let arr=[   "Success is not final, failure is not fatal",
            "Don't watch the clock; do what it does. Keep going.",
            "Your time is limited, so don't waste it living someone else's life.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",
            "Dream big and dare to fail.",
            "Start where you are. Use what you have. Do what you can." ,
            "You are never too old to set another goal or to dream a new dream.",
            "Push yourself, because no one else is going to do it for you.",
            "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
            "Do something today that your future self will thank you for.",
            "What you get by achieving your goals is not as important as what you become by achieving your goals.",
            "Small steps in the right direction can turn out to be the biggest step of your life.",
            "If it doesn’t challenge you, it won’t change you.",
            "The only limit to our realization of tomorrow is our doubts of today.",
            "It always seems impossible until it's done." ,
            "You miss 100% of the shots you don’t take.",
            "Success is walking from failure to failure with no loss of enthusiasm." ,
            "Act as if what you do makes a difference. It does.",
            "Discipline is the bridge between goals and accomplishment." 
        ];
let num=0;
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let quote=document.getElementById("quote");
    quote.textContent=arr[num];
    num++;
    if(num >= arr.length){
        num=0;
    }
})



