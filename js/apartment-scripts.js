"use-strict";

//Apartment A selector elements
const A1_selector = document.getElementById('A1-selector');
const A2_selector = document.getElementById('A2-selector');
const A3_selector = document.getElementById('A3-selector');
const A4_selector = document.getElementById('A4-selector');
const APlan_selector = document.getElementById('APlan-selector');

//Apartment A display images
const A1_display = document.getElementById('A1-display');
const A2_display = document.getElementById('A2-display');
const A3_display = document.getElementById('A3-display');
const A4_display = document.getElementById('A4-display');
const APlan_display = document.getElementById('APlan-display');

const A1_click = () => {
  //Make selected image bolder, fade the others
  A1_selector.classList.toggle('selector-image-active');
  A1_display.classList.toggle('apartment-slide-active')
  console.log(window.getComputedStyle(A2_display, null).getPropertyValue("display"));
}

const A2_click = () => {
  //Make selected image bolder, fade the others
  A2_selector.classList.toggle('selector-image-active');
  A2_display.classList.toggle('apartment-slide-active')
}

A1_selector.addEventListener("click", A1_click);
A2_selector.addEventListener("click", A2_click);
