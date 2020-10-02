"use-strict";

function slideshowListners(idDisplay, idDisplayLink, slideshowList){
  var image = document.getElementById(idDisplay); //Gathers the display image
  var imageLink = document.getElementById(idDisplayLink); //Gathers the link to enlargen the image
  for(var i = 0; slideshowList.length > i ; i++){ //loops through the selector images
    slideshowList[i].addEventListener("click", function(){ //adds event listener to selector images and defines the behaviour of the event listener
      image.src = this.src; //sets the display image source to the clicked selector image
      imageLink.href = this.src; //changes the link of the image


      for(var x = 0; slideshowList.length > x ; x++){ //sets the opacity of selector images to 0.4
        slideshowList[x].style.opacity = "0.4";
      }

      this.style.opacity = "1"; //sets the opacity of the clicked image to 1
    });
  }
}

function nextButtonListeners(nextButton, idDisplay, slideshowList){
  var newButton = document.getElementById(nextButton);
  var image = document.getElementById(idDisplay);

  newButton.addEventListener("click", function nextListeners(idDisplay, slideshowList){
    var nextImageIDX = slideshowList.src.indexOf(image.src) + 1;

    if(nextImageIDX == slideshowList.length + 1){
      image.src = slideshowList[0].src;
    } else {
      image.src = slideshowList[nextImageIDX].src;
    }

  });
}


var slideshowA = document.getElementsByClassName('slideshowA-img'); //gathers all the selector images in to an array
slideshowListners("apartment-A-display", "apartment-A-link", slideshowA); //Passes the class of the display image, the class of the image link and list of selector images
nextButtonListeners("A-next", "apartment-A-link", slideshowA);

var slideshowB = document.getElementsByClassName('slideshowB-img');
slideshowListners("apartment-B-display", "apartment-B-link", slideshowB);

var slideshowC = document.getElementsByClassName('slideshowC-img');
slideshowListners("apartment-C-display", "apartment-C-link", slideshowC);
