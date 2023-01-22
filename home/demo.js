// nav bar
let bars = document.getElementById("bars");
let menu = document.getElementById("menu");
bars.addEventListener("click", () => {
    bars.classList.toggle("active");
    menu.classList.toggle("active");
    console.log("ssssss");
})

//end

// slider
images = [
    "./images/slider/slider (1).jpg",
    "./images/slider/slider (2).jpg",
    "./images/slider/slider (3).jpg",
    "./images/slider/slider (4).jpg",
    "./images/slider/slider (5).jpg",
]


let imageNumber;
function sliderImages(image = 0) {
    imageNumber=image
    
    let addInSlider = `
            <img class="imageSlider" src="${images[image]}" alt="slider"/>
            <p id="backward">❮</p>
            <p id="forward">❯</p> `
    let inputSlider = document.getElementById("inputSlider")
    inputSlider.innerHTML=addInSlider;
    addingfunctionalty(imageNumber);

}
setInterval(() => {
    if (imageNumber == (images.length)-1) {
        
            sliderImages()
       
    } else {
        
            sliderImages(imageNumber + 1)
        
    }
}, 10000);


sliderImages();

function addingfunctionalty(imageNumber){
    let forward=document.getElementById("forward")
    let backward=document.getElementById("backward")
    if (imageNumber == 0) {
        backward.addEventListener("click", function () {
            sliderImages(images.length-1)
        })
    } else {
        backward.addEventListener("click", function () {
            sliderImages(imageNumber - 1)
        })
    }


    if (imageNumber == (images.length)-1) {
        forward.addEventListener("click", function () {
            sliderImages()
        })
    } else {
        forward.addEventListener("click", function () {
            sliderImages(imageNumber + 1)
        })
    }
}

// end

// categories
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

function getpictures(categorie="Buildings"){
   let pictures =[];
    for(let i =0 ; i<data.length;i++){
        if (data[i].name==categorie){
           pictures.push(data[i])
        }
    }
    displayCard(pictures);
    buttonsCategories();
    addNumberCartFunction();
}

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

function displayCard(pictures) {
    let cardsOfImages = ``;
    pictures.forEach((image) => (cardsOfImages += cards(image)))
    document.querySelector(".products").innerHTML = cardsOfImages;

};


function buttonsCategories(){
    let buttons = document.querySelectorAll(".button")
    
        buttons[0].addEventListener("click", function () {getpictures("Buildings")})
        buttons[1].addEventListener("click", function () {getpictures("Plants")})
        buttons[2].addEventListener("click", function () {getpictures("Sea View")})
        buttons[3].addEventListener("click", function () {getpictures("Sky")})
        buttons[4].addEventListener("click", function () {getpictures("Sunrise And Sunset")})
        
}
getpictures();

// end

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


