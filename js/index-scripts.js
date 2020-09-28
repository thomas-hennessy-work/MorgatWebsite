"use strict";


var slideIndex = 0; //Slide selector
var imageArray = document.getElementsByClassName('slideshow-slide'); //Gathering all images labeled 'slideshow-slide'

slideshow();

function slideshow(){
  imageArray[slideIndex].style.display = "none"; //Set curent image to none
  slideIndex++; //go to next slide
  slideIndex %= imageArray.length; //do not go past the last slide (last image +1). If you do, go back to the first

  imageArray[slideIndex].style.display = "block"; //set the selected slide to block

  setTimeout(slideshow, 5000); //repeat process every 5 seconds
}
