var images = [];



var resultsArray = [];

count = 0;


var imageObject = function(imageSource){
  this.imageSource = imageSource;

};

var bag = images.push(new imageObject("bag.jpg"));
var banana = images.push(new imageObject("banana.jpg"));
var boots = images.push(new imageObject("boots.jpg"));
var chair = images.push(new imageObject("chair.jpg"));
var cthulhu = images.push(new imageObject("cthulhu.jpg"));
var dragon = images.push(new imageObject("dragon.jpg"));
var pen = images.push(new imageObject("pen.jpg"));
var scissors   = images.push(new imageObject("scissors.jpg"));
var shark = images.push(new imageObject("shark.jpg"));
var sweep = images.push(new imageObject("sweep.jpg"));
var unicorn  = images.push(new imageObject("unicorn.jpg"));
var usb = images.push(new imageObject("usb.jpg"));
var water_can = images.push(new imageObject("water_can.jpg"));
var wine_glass = images.push(new imageObject("wine_glass.jpg"));



function showImages() {
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
      var imageRandomIndex = images[randomIndex];
      var randomIndex = Math.floor(Math.random() * images.length);
      var image = document.createElement("img");
      image.setAttribute("src",image.src);
      randomImageArray.push(image.src);

      //image.src = "images/"+imageRandomIndex.imageSource;

      // if (randomImageArray.indexOf(randomIndex) >= 0) {
      //
      // }
      //    console.log(count);

  // container.appendChild();
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

};

function seeTotals(){
  var buttonLocation = document.getElementById("doneButton");
  var buttonElement=  document.createElement("button");
  buttonElement.setAttribute("onclick", "tableBuilder()");
  var buttontext =  document.createTextNode("Show Results");
  buttonElement.appendChild(buttontext);
  buttonLocation.appendChild(buttonElement);
};


function tableBuilder(tableLocation, arrayDataBuilder) {
  var body = document.getElementsByClassName(tableLocation)[0];
  var resultArray = arrayDataBuilder;
  var row = document.createElement("tr");
  for (var index = 0; index < resultArray.length; index++) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(resultArray[index]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  };
  //row added to end of table body
  body.appendChild(row);
}

window.onload = function () {
	var chart = new CanvasJS.Chart("partners", {
		title:{
			text: "My First Chart in CanvasJS"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  }
			]
		}
		]
	});
	chart.render();
}

window.addEventListener("load", showImages);
window.addEventListener("load", makeImagesClickable);
