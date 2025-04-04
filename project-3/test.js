let arr2 = ["red", "blue", "green", "pink", "grey", "yellow", "tomato", "black", "purple", "gold"]
let num = 0;
function one() {
    let name = document.getElementById("name");
    name.style.backgroundColor = arr2[num];
    num++;
    if (num >= arr2.length) {
        num = 0;
    }
}
let inp = document.getElementById("inp");
let inp1 = document.getElementById("inp1");
let ans = document.querySelector(".ans");
let btn = document.querySelectorAll(".btn");
// let btn1=document.getElementById("btn1")
// console.log(btn);


let a = Array.from(btn);
console.log(a);
a.forEach((e) => {
    e.style.backgroundColor = "blue"
    // e.style.marginLeft = "20px"
    e.style.marginTop = "30px"
    e.style.border = "none"
    e.style.width = "100px"
    e.style.height = "30px"
    e.style.color = "white"
})

inp.style.width = "90%"
inp.style.marginLeft = "10px"
inp.style.marginTop = "25px"

inp1.style.width = "90%"
inp1.style.marginLeft = "10px"
inp1.style.marginTop = "15px"
// console.log(typeof(btn));



function test() {
    ans.innerHTML = Number(inp.value) + Number(inp1.value);
    // inp.value="";
    // inp1.value="";
}
function test1() {
    ans.innerHTML = Number(inp.value) - Number(inp1.value);
    // inp.value="";
    // inp1.value="";
}
function test2() {
    ans.innerHTML = Number(inp.value) * Number(inp1.value);
    // inp.value="";
    // inp1.value="";
}
function test3() {
    ans.innerHTML = Number(inp.value) / Number(inp1.value);
    // inp.value="";
    // inp1.value="";
}
function test4() {
    ans.innerHTML = Number(inp.value) % Number(inp1.value);
    inp.value = "";
    inp1.value = "";
}
let marks = [];
function marksheet() {

    for (let i = 0; i < 5; i++) {
        let mark = parseFloat(prompt(`Enter marks for Subject ${i + 1}:`));


        if (mark < 0 || mark > 100) {
            alert("Please enter valid marks between 0 and 100.");
            return;
        }
        marks.push(mark);
    }
    document.getElementById("marksheet").innerText = marks[0];
    document.getElementById("marksheet1").innerText = marks[1];
    document.getElementById("marksheet2").innerText = marks[2];
    document.getElementById("marksheet3").innerText = marks[3];
    document.getElementById("marksheet4").innerText = marks[4];
}
function showResult() {

    let totalMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
    }
    let percentage = (totalMarks / 500) * 100;


    document.getElementById("total").innerText = totalMarks;
    document.getElementById("per").innerText = percentage.toFixed(2) + "%";
}
function marksheet1() {

    let clear = ["marksheet", "marksheet1", "marksheet2", "marksheet3", "marksheet4", "total", "per"];
    clear.forEach(clear => document.getElementById(clear).innerText = "");
}
function place() {
    let ph = document.getElementById("ph");
    ph.style.top = "1227px";
    ph.style.fontSize = "12px";
    ph.style.fontWeight = "400";
    ph.style.transitionDuration = "0.5s"
}
function place1() {
    let pass = document.getElementById("pass");
    pass.style.top = "1270px";
    pass.style.fontSize = "12px";
    pass.style.fontWeight = "400";
    pass.style.transitionDuration = "0.5s"
}
function btnpass() {
    let inputpass = document.getElementById("inputpass");
    let togglebtn = document.getElementById("togglebtn");
    let type = inputpass.getAttribute("type");

    if (type == "password") {
        inputpass.setAttribute("type", "text");
        togglebtn.textContent = "hide";

    }
    else {
        inputpass.setAttribute("type", "password");
        togglebtn.textContent = "show";

    }

}
