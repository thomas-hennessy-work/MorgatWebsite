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
  //Make selected image bolder, fade the others, if it is not already selected
  if(window.getComputedStyle(A1_display, null).getPropertyValue("display") == 'none'){
    A1_display.classList.toggle('apartment-slide-active');
    A1_selector.classList.toggle('selector-image-active');

    if(window.getComputedStyle(A2_display, null).getPropertyValue("display") == 'block'){
      A2_display.classList.toggle('apartment-slide-active');
      A2_selector.classList.toggle('selector-image-active');
    }
    if(window.getComputedStyle(A3_display, null).getPropertyValue("display") == 'block'){
      A3_display.classList.toggle('apartment-slide-active');
      A3_selector.classList.toggle('selector-image-active');
    }
    if(window.getComputedStyle(A4_display, null).getPropertyValue("display") == 'block'){
      A4_display.classList.toggle('apartment-slide-active');
      A4_selector.classList.toggle('selector-image-active');
    }
    if(window.getComputedStyle(APlan_display, null).getPropertyValue("display") == 'block'){
      APlan_display.classList.toggle('apartment-slide-active');
      APlan_selector.classList.toggle('selector-image-active');
    }
  }
}

const A2_click = () => {
  //Make selected image bolder, fade the others, if it is not already selected
  if(window.getComputedStyle(A2_display, null).getPropertyValue("display") == 'none'){
    A2_selector.classList.toggle('selector-image-active');
    A2_display.classList.toggle('apartment-slide-active');
  }

  if(window.getComputedStyle(A1_display, null).getPropertyValue("display") == 'block'){
    A1_display.classList.toggle('apartment-slide-active');
    A1_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(A3_display, null).getPropertyValue("display") == 'block'){
    A3_display.classList.toggle('apartment-slide-active');
    A3_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(A4_display, null).getPropertyValue("display") == 'block'){
    A4_display.classList.toggle('apartment-slide-active');
    A4_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(APlan_display, null).getPropertyValue("display") == 'block'){
    APlan_display.classList.toggle('apartment-slide-active');
    APlan_selector.classList.toggle('selector-image-active');
  }
}

const A3_click = () => {
  //Make selected image bolder, fade the others, if it is not already selected
  if(window.getComputedStyle(A3_display, null).getPropertyValue("display") == 'none'){
    A3_selector.classList.toggle('selector-image-active');
    A3_display.classList.toggle('apartment-slide-active');
  }

  if(window.getComputedStyle(A1_display, null).getPropertyValue("display") == 'block'){
    A1_display.classList.toggle('apartment-slide-active');
    A1_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(A2_display, null).getPropertyValue("display") == 'block'){
    A2_display.classList.toggle('apartment-slide-active');
    A2_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(A4_display, null).getPropertyValue("display") == 'block'){
    A4_display.classList.toggle('apartment-slide-active');
    A4_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(APlan_display, null).getPropertyValue("display") == 'block'){
    APlan_display.classList.toggle('apartment-slide-active');
    APlan_selector.classList.toggle('selector-image-active');
  }
}

const A4_click = () => {
  //Make selected image bolder, fade the others, if it is not already selected
  if(window.getComputedStyle(A4_display, null).getPropertyValue("display") == 'none'){
    A4_selector.classList.toggle('selector-image-active');
    A4_display.classList.toggle('apartment-slide-active');
  }

  if(window.getComputedStyle(A1_display, null).getPropertyValue("display") == 'block'){
    A1_display.classList.toggle('apartment-slide-active');
    A1_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(A2_display, null).getPropertyValue("display") == 'block'){
    A2_display.classList.toggle('apartment-slide-active');
    A2_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(A3_display, null).getPropertyValue("display") == 'block'){
    A3_display.classList.toggle('apartment-slide-active');
    A3_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(APlan_display, null).getPropertyValue("display") == 'block'){
    APlan_display.classList.toggle('apartment-slide-active');
    APlan_selector.classList.toggle('selector-image-active');
  }
}

const APlan_click = () => {
  //Make selected image bolder, fade the others, if it is not already selected
  if(window.getComputedStyle(APlan_display, null).getPropertyValue("display") == 'none'){
    APlan_selector.classList.toggle('selector-image-active');
    APlan_display.classList.toggle('apartment-slide-active');
  }

  if(window.getComputedStyle(A1_display, null).getPropertyValue("display") == 'block'){
    A1_display.classList.toggle('apartment-slide-active');
    A1_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(A2_display, null).getPropertyValue("display") == 'block'){
    A2_display.classList.toggle('apartment-slide-active');
    A2_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(A3_display, null).getPropertyValue("display") == 'block'){
    A3_display.classList.toggle('apartment-slide-active');
    A3_selector.classList.toggle('selector-image-active');
  }
  if(window.getComputedStyle(A4_display, null).getPropertyValue("display") == 'block'){
    A4_display.classList.toggle('apartment-slide-active');
    A4_selector.classList.toggle('selector-image-active');
  }
}

//Called onload by the html body
function initialDisplay(){
  A1_display.classList.toggle('apartment-slide-active');
  A1_selector.classList.toggle('selector-image-active');
}

//Event listeners
A1_selector.addEventListener("click", A1_click);
A2_selector.addEventListener("click", A2_click);
A3_selector.addEventListener("click", A3_click);
A4_selector.addEventListener("click", A4_click);
APlan_selector.addEventListener("click", APlan_click);
