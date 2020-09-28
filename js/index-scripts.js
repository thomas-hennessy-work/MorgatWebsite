"use strict";

// Slide show scripts
// https://www.w3schools.com/w3css/w3css_slideshow.asp
// https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr

var slideIndex = 0;
slideshow();

//Operates the automated slideshow on the index page
function slideshow() {
  var i;
  var x = document.getElementsByClassName('slideshow-slide'); //gathers the eliments denoted by the class slideshow-slide
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none"; //display none of the slides
  }
  slideIndex++; //go to next slide
  if (slideIndex > x.length) {slideIndex = 1} //when reaching the end of the slides, go back to the first
  x[slideIndex-1].style.display = "block"; //display the selected slide
  setTimeout(slideshow, 5000); //run slideshow again after 5 seconds
}
