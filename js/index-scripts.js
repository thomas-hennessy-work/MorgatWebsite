"use strict";

function slideshow(imageArray, slideIndex){
  console.log(slideIndex);
  console.log(imageArray[slideIndex]);
  imageArray[slideIndex].style.display = "none"; //Set curent image to none
  slideIndex++; //go to next slide
  slideIndex %= imageArray.length; //do not go past the last slide (last image +1). If you do, go back to the first

  imageArray[slideIndex].style.display = "block"; //set the selected slide to block

  setTimeout(function(){slideshow(imageArray, slideIndex)}, 5000); //repeat process every 5 seconds
}

//first slideshow
var slideAPos = 0;
var imageAItems = document.getElementsByClassName('slideshow-A-slide'); //Gathering all images labeled 'slideshow-slide'
slideshow(imageAItems, slideAPos);

//Second slideshow
var slideBPos = 0;
var imageBItems = document.getElementsByClassName('slideshow-B-slide'); //Gathering all images labeled 'slideshow-slide'
slideshow(imageBItems, slideAPos);
