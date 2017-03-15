
var images = [];

var resultsArray = [];
var productArray =[];
count = 0;


var imageObject = function(imageSource, Name){
  this.label = Name;
  this.imageSource = imageSource;
  this.y = 0;
  // productArray.push(this);

};

 images.push(new imageObject("bag.jpg", "bag"));
 images.push(new imageObject("banana.jpg", "banana"));
 images.push(new imageObject("boots.jpg", "boots"));
 images.push(new imageObject("chair.jpg", "chair"));
 images.push(new imageObject("cthulhu.jpg","cthulhu"));
 images.push(new imageObject("dragon.jpg","dragon"));
 images.push(new imageObject("pen.jpg","pen"));
 images.push(new imageObject("scissors.jpg", "scissors"));
 images.push(new imageObject("shark.jpg","shark"));
 images.push(new imageObject("sweep.jpg","sweep"));
 images.push(new imageObject("unicorn.jpg","unicorn"));
 images.push(new imageObject("usb.jpg","usb"));
 images.push(new imageObject("water_can.jpg","water can"));
 images.push(new imageObject("wine_glass.jpg","wine glass"));


//shows 3 random images on the screen
function showImages() {
  // check if there has been 15 selections
  if (count === 15) {
    seeTotals();
    count = 0;
  } else {
    //clear the done button
    var buttonLocation = document.getElementById("doneButton");
    buttonLocation.innerHTML = "";
    //get 3 images
    var randomImageArray = [];
    var container = document.getElementById("images-container");
    container.innerHTML = "";
    for (var index = 1; index <= 3; index++) {
      do{
        var randomIndex = Math.floor(Math.random() * images.length);

        var randomImage = images[randomIndex];
        console.log(randomImage.imageSource);
        console.log(randomImageArray.indexOf(randomImage.imageSource));
      } while (randomImageArray.indexOf(randomImage.imageSource) >=0);
      var image = document.createElement("img");
      image.setAttribute("src","images/"+randomImage.imageSource);

      randomImageArray.push(randomImage.imageSource);


      container.appendChild(image);
      makeImagesClickable();
    }
  }
};

function makeImagesClickable() {
  var images = document.getElementsByTagName("img");
  for (var index = 0; index < images.length; index++) {
    images[index].addEventListener("click", recordClick);
  }
};

function recordClick(event) {
  var clickedItem = event.target;
  var itemSource = clickedItem.src;
  var lastSlash = itemSource.lastIndexOf("/") + 1;
  itemSource = itemSource.substring(lastSlash);
  console.log(itemSource + " was clicked.");
  resultsArray.push(itemSource);
  count++;
  showImages();
  progressBar();
for (var index = 0; index < images.length; index++) {
  if ((images[index].imageSource) === itemSource) {
images[index].y ++;
  }
};


};

function seeTotals(){
  var buttonLocation = document.getElementById("doneButton");
  var buttonElement=  document.createElement("button");
  console.log(images);
  buttonElement.addEventListener("click",showChart);
  var buttontext =  document.createTextNode("Show Results");
  buttonElement.appendChild(buttontext);
  buttonLocation.appendChild(buttonElement);
};




function progressBar() {
    var elem = document.getElementById("myBar");
    var width = (Math.floor((resultsArray.length/15)*100)+1);
    console.log(width);
    var id = setTimeout(frame, 250);

    function frame() {
        if (width >= 100) {
    width -= 100;
    elem.style.width = width + '%';
    elem.innerHTML = width * 1 + '%';
        } else {
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}


function showChart() {
  var chart = new CanvasJS.Chart("chartContainer", {
    // theme: "theme2",//theme1
    title:{
      text: "Products that were picked"
      // fontColor: "blue",
      // fontFamily: "Optima"
    },
    animationEnabled: false,   // change to true
    data: [
      {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "doughnut",
        dataPoints: images
      }
    ]
  });
  chart.render();
}


window.addEventListener("load", showImages);
window.addEventListener("load", makeImagesClickable);
