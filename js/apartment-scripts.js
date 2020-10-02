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

  newButton.addEventListener("click", function nextListener(){
    for(var i = 0; slideshowList.length > i; i++){ //looping through all selector images
      if(slideshowList[i].src == image.src){ //atempting to match the selecotr image to the display image
        if((i + 2) > slideshowList.length){//if it is the last selector image in the list, restart
          var nextIDX = 0;
        } else { //go to next selector image
          var nextIDX = i+1;
        }
      }
    }
    image.src = slideshowList[nextIDX].src; //asign selector image to the display image

    for(var x = 0; slideshowList.length > x ; x++){ //selector images styling
      slideshowList[x].style.opacity = "0.4";
    }
    slideshowList[nextIDX].style.opacity = "1";
  });
}

function prevButtonListeners(nextButton, idDisplay, slideshowList){
  var newButton = document.getElementById(nextButton);
  var image = document.getElementById(idDisplay);

  newButton.addEventListener("click", function nextListener(){
    for(var i = 0; slideshowList.length > i; i++){ //looping through all selector images
      if(slideshowList[i].src == image.src){ //atempting to match the selecotr image to the display image
        if((i - 1) < 0){//if it is the last selector image in the list, restart
          var nextIDX = slideshowList.length - 1;
        } else { //go to next selector image
          var nextIDX = i-1;
        }
      }
    }
    image.src = slideshowList[nextIDX].src; //asign selector image to the display image

    for(var x = 0; slideshowList.length > x ; x++){ //selector images styling
      slideshowList[x].style.opacity = "0.4";
    }
    slideshowList[nextIDX].style.opacity = "1";
  });
}


var slideshowA = document.getElementsByClassName('slideshowA-img'); //gathers all the selector images in to an array
slideshowListners("apartment-A-display", "apartment-A-link", slideshowA); //Passes the class of the display image, the class of the image link and list of selector images
nextButtonListeners("A-next", "apartment-A-display", slideshowA);
prevButtonListeners("A-previous", "apartment-A-display", slideshowA);

var slideshowB = document.getElementsByClassName('slideshowB-img');
slideshowListners("apartment-B-display", "apartment-B-link", slideshowB);

var slideshowC = document.getElementsByClassName('slideshowC-img');
slideshowListners("apartment-C-display", "apartment-C-link", slideshowC);
