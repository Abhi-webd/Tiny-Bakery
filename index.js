var text = ["Chocolates","Cookies","Donuts","CupCakes","Cakes","Ice-Creams"];
var image = [
"image/gulkand choco.jpeg",
"image/chocochip cook.jpg",
"image/chocodo.jpeg",
"image/gjcc.jpeg",
"image/rasmalai cake.jpg",
"image/rose ice.jpeg"];

var counter = 0;
var elem = document.getElementById("elements");
var elem2 = document.getElementById("home-image");
var inst = setInterval(change, 3000);

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



