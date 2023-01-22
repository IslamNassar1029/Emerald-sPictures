// nav bar
let bars = document.getElementById("bars");
let menu = document.getElementById("menu");
bars.addEventListener("click", () => {
    bars.classList.toggle("active");
    menu.classList.toggle("active");
    console.log("ssssss");
})

//end
//      data
let data = [
    { src: "./images/buildings/buildings (1).jpg", name: "Buildings", description: "Brice : $00 <br>location: Tower Bridge londan" },
    { src: "./images/buildings/buildings (2).jpg", name: "Buildings", description: "Brice : $00 <br>location: Burj Khalifa Dubai" },
    { src: "./images/buildings/buildings (3).jpg", name: "Buildings", description: "Brice : $00 <br>location: The shard londan" },
    { src: "./images/buildings/buildings (4).jpg", name: "Buildings", description: "Brice : $00 <br>location: Chalets Marsa Matrouh" },
    { src: "./images/buildings/buildings (5).jpg", name: "Buildings", description: "Brice : $00 <br>location: Chalets Marsa Matrouh" },
    { src: "./images/plants/plants (1).jpg", name: "Plants", description: "Brice : $00 <br>location: Miracle Garden Dubai" },
    { src: "./images/plants/plants (2).jpg", name: "Plants", description: "Brice : $00 <br>location: Miracle Garden Dubai" },
    { src: "./images/plants/plants (3).jpg", name: "Plants", description: "Brice : $00 <br>location: Countryside Cairo" },
    { src: "./images/plants/plants (4).jpg", name: "Plants", description: "Brice : $00 <br>location: Countryside Cairo" },
    { src: "./images/plants/plants (5).jpg", name: "Plants", description: "Brice : $00 <br>location: Countryside Cairo" },
    { src: "./images/plants/plants (6).jpg", name: "Plants", description: "Brice : $00 <br>location: Countryside Cairo" },
    { src: "./images/plants/plants (7).jpg", name: "Plants", description: "Brice : $00 <br>location: Countryside Cairo" },
    { src: "./images/Sea view/seaview (1).jpg", name: "Sea View", description: "Brice : $00 <br>location: Cleopatra Marsa Matrouh" },
    { src: "./images/Sea view/seaview (2).jpg", name: "Sea View", description: "Brice : $00 <br>location: Ageeba Marsa Matrouh" },
    { src: "./images/Sea view/seaview (3).jpg", name: "Sea View", description: "Brice : $00 <br>location: Ageeba Marsa Matrouh" },
    { src: "./images/Sea view/seaview (4).jpg", name: "Sea View", description: "Brice : $00 <br>location: blue beach Marsa Matrouh" },
    { src: "./images/Sea view/seaview (5).jpg", name: "Sea View", description: "Brice : $00 <br>location: Cleopatra Marsa Matrouh" },
    { src: "./images/Sea view/seaview (6).jpg", name: "Sea View", description: "Brice : $00 <br>location: Cleopatra Marsa Matrouh" },
    { src: "./images/Sea view/seaview (7).jpg", name: "Sea View", description: "Brice : $00 <br>location: Ageeba Marsa Matrouh" },
    { src: "./images/Sea view/seaview (8).jpg", name: "Sea View", description: "Brice : $00 <br>location: Elfayrouz Marsa Matrouh" },
    { src: "./images/Sea view/seaview (9).jpg", name: "Sea View", description: "Brice : $00 <br>location: Elfayrouz Marsa Matrouh" },
    { src: "./images/Sea view/seaview (10).jpg", name: "Sea View", description: "Brice : $00 <br>location: Elfayrouz Marsa Matrouh" },
    { src: "./images/Sea view/seaview (11).jpg", name: "Sea View", description: "Brice : $00 <br>location: Elfayrouz Marsa Matrouh" },
    { src: "./images/Sea view/seaview (12).jpg", name: "Sea View", description: "Brice : $00 <br>location: Elfayrouz Marsa Matrouh" },
    { src: "./images/Sea view/seaview (13).jpg", name: "Sea View", description: "Brice : $00 <br>location: Cleopatra Marsa Matrouh" },
    { src: "./images/sky/sky (1).jpg", name: "Sky", description: "Brice : $00 <br>location: Elfayrouz Marsa Matrouh" },
    { src: "./images/sky/sky (2).jpg", name: "Sky", description: "Brice : $00 <br>location: On A Plane" },
    { src: "./images/sky/sky (3).jpg", name: "Sky", description: "Brice : $00 <br>location: On My Way Back From ITI Cairo" },
    { src: "./images/sky/sky (4).jpg", name: "Sky", description: "Brice : $00 <br>location: Ageeba Marsa Matrouh" },
    { src: "./images/sky/sky (5).jpg", name: "Sky", description: "Brice : $00 <br>location: AlKorneash Marsa Matrouh" },
    { src: "./images/sky/sky (6).jpg", name: "Sky", description: "Brice : $00 <br>location: Countryside Cairo " },
    { src: "./images/sunset & sundown/sunrise&sunset (1).jpg", name: "Sunrise And Sunset", description: "Brice : $00 <br>location: Countryside Cairo" },
    { src: "./images/sunset & sundown/sunrise&sunset (2).jpg", name: "Sunrise And Sunset", description: "Brice : $00 <br>location: blue beach Marsa Matrouh " },
    { src: "./images/sunset & sundown/sunrise&sunset (3).jpg", name: "Sunrise And Sunset", description: "Brice : $00 <br>location: Ageeba Marsa Matrouh " },
    { src: "./images/sunset & sundown/sunrise&sunset (4).jpg", name: "Sunrise And Sunset", description: "Brice : $00 <br>location: On A Plane " },
    { src: "./images/sunset & sundown/sunrise&sunset (5).jpg", name: "Sunrise And Sunset", description: "Brice : $00 <br>location: On The Route TO Algharam Marsa Matrouh " },
    { src: "./images/sunset & sundown/sunrise&sunset (6).jpg", name: "Sunrise And Sunset", description: "Brice : $00 <br>location: Countryside Cairo" },
    { src: "./images/sunset & sundown/sunrise&sunset (7).jpg", name: "Sunrise And Sunset", description: "Brice : $00 <br>location: Countryside Cairo" },
    { src: "./images/sunset & sundown/sunrise&sunset (8).jpg", name: "Sunrise And Sunset", description: "Brice : $00 <br>location: Countryside Cairo" },
    { src: "./images/sunset & sundown/sunrise&sunset (9).jpg", name: "Sunrise And Sunset", description: "Brice : $00 <br>location: Countryside Cairo" },



]

let noOfPages = data.length / 8
let whoHasTurn = [];
let pageNum;
function everyPageDisplay(pageNumber = 1) {
    pageNum=pageNumber
    for (let i = 0; i <= noOfPages - 1; i++) {
        if (i == pageNumber - 1) {
            whoHasTurn = data.slice((i * (8)), (((i + 1) * (8))))


        }
    }
    console.log(pageNum)
    displayCard(whoHasTurn);
    createNav(noOfPages);
    functionalty(noOfPages, pageNum);
    addNumberCartFunction();

}

everyPageDisplay()



function cards(image) {
    return `
    <div class="card text-center mb-3 product" style="width: 28rem;">
    <img src="${image.src}"  style="height: 350px; object-fit: cover;  " class="card-img-top" alt="photo of ${image.name}">
    <div class="card-body">
      <h5 class="card-title">${image.name}</h5>
      <p class="card-text">${image.description}</p>
      <button  class="btn btn-outline-primary addToCart">Add To Cart</button>
    </div>
  </div>`
}

function displayCard(whoHasTurn) {
    let cardsOfImages = ``;
    whoHasTurn.forEach((image) => (cardsOfImages += cards(image)))
    document.querySelector(".products").innerHTML = cardsOfImages;

};


function createNav(noOfPages) {
    let insideNav = `
    <ul class="pagination">
     <li name="pagination" class="page-item">
       <a id ="disabledBtn"class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
     </a>
    </li>`

    for (let i = 1; i <= noOfPages; i++) {
        insideNav += `<li name="pagination" class="page-item"><a class="page-link" href="#">${i}</a></li>`
    }
    insideNav += `
     <li  name="pagination" class="page-item inserting">
      <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
      </a>
     </li>
    </ul>`
    let navBar = document.getElementById("insertInIt")
    navBar.innerHTML = insideNav;
}

function functionalty(noOfPages, pageNum) {
    let navBar = document.getElementsByName("pagination")
    if (pageNum == 1) {
        navBar[0].addEventListener("click", function () {

            everyPageDisplay(pageNum)
        })
    } else {
        navBar[0].addEventListener("click", function () {
            everyPageDisplay(pageNum - 1)
        })
    }

    for (let i = 1; i <= noOfPages; i++) {
        navBar[i].addEventListener("click", function () {
            everyPageDisplay(i)
        })
    }
    if (pageNum == (noOfPages)) {
        navBar[(navBar.length) - 1].addEventListener("click", function () {
            everyPageDisplay((noOfPages ))
        })
    } else {
        navBar[(navBar.length) - 1].addEventListener("click", function () {
            everyPageDisplay(pageNum + 1)
        })
    }

}




//end
//addToCart/
let noOfProduct=0;
let addNumberCart=document.getElementById("addNumberCart")
function addNumberCartFunction(){
    let button =document.querySelectorAll(".addToCart")
    console.log(button)
    for(let i=0 ; i<button.length; i++){
        button[i].addEventListener("click",function(){
            noOfProduct++
            console.log(noOfProduct)
            if(  addNumberCart.classList.contains("buy")){
              addNumberCart.innerHTML=noOfProduct  
            }else{
              addNumberCart.classList.add("buy")
              addNumberCart.innerHTML=noOfProduct  
            }
            
            
        })
    }
}