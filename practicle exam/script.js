let fname = document.getElementById("name");
let surname = document.getElementById("surname");
let age = document.getElementById("age");
let btn = document.getElementById("btn");
let list = document.getElementById("list")
let editindex=null;

btn.addEventListener("click", () => {
    let oldrecord = JSON.parse(localStorage.getItem("student")) || [];
    let obj = {
        id: Date.now(),
        fname: fname.value,
        surname: surname.value,
        age: age.value,
    };
    // oldrecord=[...oldrecord,obj];
    oldrecord.push(obj);
    localStorage.setItem("student", JSON.stringify(oldrecord));
    alert('Data add into localstorage');

    fname.value = " ";
    surname.value = " ";
    age = age.value = " ";

    getdata();
})
function getdata() {
    let alldata = JSON.parse(localStorage.getItem("student"));
    list.innerHTML = " ";
    alldata.forEach((item, index) => {
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");
        let delbtn = document.createElement("button");
        let editbtn = document.createElement("button");

        delbtn.setAttribute("data-id", item.id);
        editbtn.setAttribute("data-id", item.id);

        li1.innerText = index + 1;
        li2.innerText = item.fname;
        li3.innerText = item.surname;
        li4.innerText = item.age;
        delbtn.innerHTML = "Delete";
        delbtn.classList = "deletebtns"
        editbtn.innerHTML = "Edit";
        editbtn.classList = "editbtns"

        delbtn.style.width = "100px"
        delbtn.style.height = "30px"
        delbtn.style.backgroundColor = "black"
        delbtn.style.color = "white"
        delbtn.style.border = "none"

        editbtn.style.width = "100px"
        editbtn.style.height = "30px"
        editbtn.style.backgroundColor = "black"
        editbtn.style.color = "white"
        editbtn.style.border = "none"
        editbtn.style.marginLeft="10px"

        list.append(li1);
        list.append(li2);
        list.append(li3);
        list.append(li4);
        list.append(delbtn);
        list.append(editbtn);
    });

    let deletebuttons = document.querySelectorAll(".deletebtns");

    deletebuttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            let alldata = JSON.parse(localStorage.getItem("student"));
            let btnid = btn.getAttribute("data-id");
            let newrecord = alldata.filter((item) => item.id != btnid);
            localStorage.setItem("student", JSON.stringify(newrecord));
            getdata();
        });

    });
let editbtn = document.querySelectorAll(".editbtns");

  editbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let allData = JSON.parse(localStorage.getItem("student"));
      let btnId = btn.getAttribute("data-id");

      let singleData = allData.find((item) => item.id == btnId);
      fname.value = singleData.fname;
      subject.value = singleData.subject;
      age.value = singleData.age;
      document.getElementById("btn").innerHTML = "Update Data";
      editindex = btnId;     
    });
  });
    
}
getdata();
