"use-strict";

function slideshowListners(idSelector, slideshowList){
  var image = document.getElementById(idSelector); //Gathers the display image
  for(var i = 0; slideshowList.length > i ; i++){ //loops through the selector images
    slideshowList[i].addEventListener("click", function(){ //adds event listener to selector images and defines the behaviour of the event listener
      image.src = this.src; //sets the display image source to the clicked selector image

      for(var x = 0; slideshowList.length > x ; x++){ //sets the opacity of selector images to 0.4
        slideshowList[x].style.opacity = "0.4";
      }

      this.style.opacity = "1"; //sets the opacity of the clicked image to 1
    });
  }
}

var slideshow1 = document.getElementsByClassName('slideshow1-img'); //gathers all the selector images in to an array
slideshowListners("apartment-A-display", slideshow1); //Passes the class of the display image and list of selector images
