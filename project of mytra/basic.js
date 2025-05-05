let slides = document.querySelectorAll(".slide");
let slider = document.getElementById("slider");
let slideindex = 0;
function automatic() {
  slideindex++;
  if (slideindex >= slides.length) {
    slideindex = 0;
  }
  slider.style.transform = `translateX(-${slideindex * 100}%)`;
}
setInterval(automatic, 2000);

let obj1 = {
  "id": 1,
  "title": "Fjallraven Bag",
  "price": 19.95,
  "description": "Your perfect pack for everyday use and walks in the forest....",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }

}
let obj2 = {
  "id": 2,
  "title": "Mens Casual T-Shirts ",
  "price": 22.3,
  "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "rating": {
    "rate": 4.1,
    "count": 259
  }
}
let obj3 = {
  "id": 3,
  "title": "Mens Cotton Jacket",
  "price": 55.99,
  "description": "great outerwear jackets for Spring/Autumn/Winter... ",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "rating": {
    "rate": 4.7,
    "count": 500
  }
}
let obj4 = {
  "id": 4,
  "title": "Mens Casual Slim Fit",
  "price": 15.99,
  "description": "The color could be slightly different between on the screen and in practice...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  "rating": {
    "rate": 2.1,
    "count": 430
  }
}
let obj5 = {
  "id": 5,
  "title": "Women's Gold Chain Bracelet",
  "price": 695,
  "description": "From our Legends Collection, the Naga was inspired by the mythical water...",
  "category": "Silver jewelery",
  "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  "rating": {
    "rate": 4.6,
    "count": 400
  }
}
let obj6 = {
  "id": 6,
  "title": "Solid Gold Petite Micropave ",
  "price": 168,
  "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
  "category": "Silver jewelery",
  "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 70
  }
}
let obj7 = {
  "id": 7,
  "title": "White Gold Plated Princess",
  "price": 9.99,
  "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring...",
  "category": "Silver jewelery",
  "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  "rating": {
    "rate": 3,
    "count": 400
  }
}
let obj8 = {
  "id": 8,
  "title": "Rose Gold Plated Double",
  "price": 10.99,
  "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings...",
  "category": "Gold jewelery",
  "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  "rating": {
    "rate": 1.9,
    "count": 100
  }
}
let obj9 = {
  "id": 9,
  "title": "WD 2TB Hard Drive - USB 3.0 ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC...",
  "category": "electronics item",
  "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  "rating": {
    "rate": 3.3,
    "count": 203
  }
}
let obj10 = {
  "id": 10,
  "title": "SanDisk 1TB SSD",
  "price": 109,
  "description": "Easy upgrade for faster boot up, shutdown, application load...",
  "category": "electronics item",
  "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  "rating": {
    "rate": 2.9,
    "count": 470
  }
}
let obj11 = {
  "id": 11,
  "title": "Silicon Power 256GB SSD",
  "price": 109,
  "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable...",
  "category": "electronics item",
  "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  "rating": {
    "rate": 4.8,
    "count": 319
  }
}
let obj12 = {
  "id": 12,
  "title": "WD 4TB Gaming Drive",
  "price": 114,
  "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy...",
  "category": "electronics item",
  "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  "rating": {
    "rate": 4.8,
    "count": 400
  }
}
let obj13 = {
  "id": 13,
  "title": "Acer SB220Q bi 21.5 inches TV",
  "price": 599,
  "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon...",
  "category": "electronics item",
  "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  "rating": {
    "rate": 2.9,
    "count": 250
  }
}
let obj14 = {
  "id": 14,
  "title": "Samsung 49-Inch Gaming Monitor",
  "price": 999,
  "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR...",
  "category": "electronics item",
  "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  "rating": {
    "rate": 2.2,
    "count": 140
  }
}
let obj15 = {
  "id": 15,
  "title": "BIYLACLESEN Women's Jacket",
  "price": 56.99,
  "description": "The Jackets is US standard size, Please choose size as your...",
  "category": "women's cloth",
  "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  "rating": {
    "rate": 2.6,
    "count": 235
  }
}
let obj16 = {
  "id": 16,
  "title": "Women's Leather Jacket",
  "price": 29.95,
  "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining)...",
  "category": "women's cloth",
  "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  "rating": {
    "rate": 2.9,
    "count": 340
  }
}
let obj17 = {
  "id": 17,
  "title": "Women Rain Jacket",
  "price": 39.99,
  "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded...",
  "category": "women's cloth",
  "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  "rating": {
    "rate": 3.8,
    "count": 679
  }
}
let obj18 = {
  "id": 18,
  "title": "MBJ Women's Short Sleeve Neck V ",
  "price": 9.85,
  "description": "95% RAYON 5% SPANDEX, Made in USA or Imported...",
  "category": "women's cloth",
  "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  "rating": {
    "rate": 4.7,
    "count": 130
  }
}
let obj19 = {
  "id": 19,
  "title": "Opna Women's Moisture",
  "price": 7.95,
  "description": "100% Polyester, Machine wash, 100% cationic polyester interlock...",
  "category": "women's cloth",
  "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  "rating": {
    "rate": 4.5,
    "count": 146
  }
}
let obj20 = {
  "id": 20,
  "title": "DANVOUY Womens T Shirt",
  "price": 12.99,
  "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print...",
  "category": "women's cloth",
  "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  "rating": {
    "rate": 3.6,
    "count": 145
  }
}
localStorage.setItem("student", JSON.stringify([obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20]));

let mainsec = document.getElementById("mainsec");
mainsec.classList.add("main");
function exercise() {

  let alldata = JSON.parse(localStorage.getItem("student"));
  alldata.forEach((item) => {

    let img = document.createElement("img");
    img.src = item.image;
    img.classList.add("image")
    let div1 = document.createElement("div");
    div1.classList.add("card");

    let title = document.createElement("p");
    title.innerText = item.title;
    title.classList.add("title");

    let description = document.createElement("p");
    description.innerText = item.description;
    description.classList.add("description");

    let category = document.createElement("p");
    category.innerText = item.category;
    category.classList.add("category");


    let price = document.createElement("p");
    price.innerText = `Price: $${item.price}`;
    price.classList.add("price");


    let rating = document.createElement("p");
    rating.innerText = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;
    rating.classList.add("rating");

    let addtocart = document.createElement("button");
    addtocart.classList = "cartBtn"
    addtocart.innerHTML = "Add to Cart";
    addtocart.style.width = "95%"
    addtocart.style.marginLeft = "8px"
    addtocart.style.height = "30px"
    addtocart.style.position = "relative"
    addtocart.style.bottom = "18px"
    addtocart.style.backgroundColor = "black"
    addtocart.style.color = "white"
    addtocart.style.border = "none"
    addtocart.style.borderRadius = "5px"

    addtocart.setAttribute("btn-id",item.id);
    
    
    mainsec.append(div1)  
    div1.append(img)
    div1.append(title)
    div1.append(description)
    div1.append(category)
    div1.append(price)
    div1.append(rating)
    div1.append(addtocart)


  });
  let cartBtn = document.querySelectorAll(".cartBtn")

    cartBtn.forEach((btn)=>{
      btn.addEventListener("click", () => {
        let oldcardrecord=JSON.parse(localStorage.getItem("student")) || [];
        let oldcartrecord=JSON.parse(localStorage.getItem("cart")) || [];
        let btnid=btn.getAttribute("btn-id");
        
        let singledata=oldcardrecord.find((item) => item.id == btnid);
        oldcartrecord.push(singledata)
        localStorage.setItem("cart", JSON.stringify(oldcartrecord));
        alert('add to cart data')
      });
    })
}
exercise();

let men = document.getElementById("men");
men.addEventListener("click", () => {
  let alldata = JSON.parse(localStorage.getItem("student"));
  let menfilter = alldata.filter((item) => item.category == "men's clothing")
  mainsec.innerHTML = "";

  menfilter.forEach((item) => {
    let img = document.createElement("img");
    img.src = item.image;
    img.classList.add("image");

    let div1 = document.createElement("div");
    div1.classList.add("card");

    let title = document.createElement("p");
    title.innerText = item.title;
    title.classList.add("title");

    let description = document.createElement("p");
    description.innerText = item.description;
    description.classList.add("description");

    let category = document.createElement("p");
    category.innerText = item.category;
    category.classList.add("category");

    let price = document.createElement("p");
    price.innerText = `Price: $${item.price}`;
    price.classList.add("price");

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;
    rating.classList.add("rating");

    let addtocart = document.createElement("button");
    addtocart.innerHTML = "Add to Cart";
    addtocart.style.width = "95%"
    addtocart.style.marginLeft = "8px"
    addtocart.style.height = "30px"
    addtocart.style.position = "relative"
    addtocart.style.bottom = "18px"
    addtocart.style.backgroundColor = "black"
    addtocart.style.color = "white"
    addtocart.style.border = "none"
    addtocart.style.borderRadius = "5px"

    mainsec.append(div1)
    div1.append(img)
    div1.append(title)
    div1.append(description)
    div1.append(category)
    div1.append(price)
    div1.append(rating)
    div1.append(addtocart)
  });
});

let women = document.getElementById("women");
women.addEventListener("click", () => {
  let alldata = JSON.parse(localStorage.getItem("student"));
  let womenfilter = alldata.filter((item) => item.category == "women's cloth")
  mainsec.innerHTML = "";

  womenfilter.forEach((item) => {
    
    let img = document.createElement("img");
    img.src = item.image;
    img.classList.add("image");

    let div1 = document.createElement("div");
    div1.classList.add("card");

    let title = document.createElement("p");
    title.innerText = item.title;
    title.classList.add("title");

    let description = document.createElement("p");
    description.innerText = item.description;
    description.classList.add("description");

    let category = document.createElement("p");
    category.innerText = item.category;
    category.classList.add("category");

    let price = document.createElement("p");
    price.innerText = `Price: $${item.price}`;
    price.classList.add("price");

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;
    rating.classList.add("rating");

    let addtocart = document.createElement("button");
    addtocart.innerHTML = "Add to Cart";
    addtocart.style.width = "95%"
    addtocart.style.marginLeft = "8px"
    addtocart.style.height = "30px"
    addtocart.style.position = "relative"
    addtocart.style.bottom = "18px"
    addtocart.style.backgroundColor = "black"
    addtocart.style.color = "white"
    addtocart.style.border = "none"
    addtocart.style.borderRadius = "5px"

    mainsec.append(div1)
    div1.append(img)
    div1.append(title)
    div1.append(description)
    div1.append(category)
    div1.append(price)
    div1.append(rating)
    div1.append(addtocart)
  });
});

let electric = document.getElementById("electric");
electric.addEventListener("click", () => {
  let alldata = JSON.parse(localStorage.getItem("student"));
  let electricfilter = alldata.filter((item) => item.category == "electronics item")
  mainsec.innerHTML = "";

  electricfilter.forEach((item) => {

    let img = document.createElement("img");
    img.src = item.image;
    img.classList.add("image");

    let div1 = document.createElement("div");
    div1.classList.add("card");

    let title = document.createElement("p");
    title.innerText = item.title;
    title.classList.add("title");

    let description = document.createElement("p");
    description.innerText = item.description;
    description.classList.add("description");

    let category = document.createElement("p");
    category.innerText = item.category;
    category.classList.add("category");

    let price = document.createElement("p");
    price.innerText = `Price: $${item.price}`;
    price.classList.add("price");

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${item.rating.rate} (${item.rating.count} reviews)`;
    rating.classList.add("rating");

    let addtocart = document.createElement("button");
    addtocart.innerHTML = "Add to Cart";
    addtocart.style.width = "95%"
    addtocart.style.marginLeft = "8px"
    addtocart.style.height = "30px"
    addtocart.style.position = "relative"
    addtocart.style.bottom = "18px"
    addtocart.style.backgroundColor = "black"
    addtocart.style.color = "white"
    addtocart.style.border = "none"
    addtocart.style.borderRadius = "5px"

    mainsec.append(div1)
    div1.append(img)
    div1.append(title)
    div1.append(description)
    div1.append(category)
    div1.append(price)
    div1.append(rating)
    div1.append(addtocart)
  });
});

let all = document.querySelector(".all");
all.addEventListener("click", () => {
  mainsec.innerHTML = "";
  exercise();
})


