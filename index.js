var text = ["Ice-Creams", "Chocolates","Cookies","Donuts","Cakes"];
var image = ["image/rose ice.jpeg",
"image/gulkand choco.jpeg",
"image/chocochip cook.jpg",
"image/choco do.jpeg",
"image/rasmalai cake.jpg"];

var counter = 0;
var elem = document.getElementById("elements");
var elem2 = document.getElementById("home-image");
var inst = setInterval(change, 5000);

function change() {
  elem.innerHTML = text[counter];
  elem2.setAttribute("src",image[counter])
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }

}

var date = new Date();
var year = date.getFullYear();
var badal = document.getElementById("Copy");


function saal(){
  badal.innerHTML = year;
}

saal();



