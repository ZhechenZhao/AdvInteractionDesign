// document.addEventListener('DOMContentLoaded', function() {
//     var loadButtons = document.querySelectorAll('.load-btn');
//     loadButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
//         var block = this.parentNode;
//         var img = block.querySelector('img');
//         img.style.display = 'block';
//         this.style.display = 'none';
//       });
//     });
//   });
  
document.addEventListener("DOMContentLoaded", () => {
  /**
   * GSAP Documentation: https://gsap.com/docs/v3/
   * GSAP Plugin: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
   */
  

 
})

// BLOCK 1
document.getElementById("btn1").addEventListener("click", function() {
  // Get the image and wiper elements
  var image = document.getElementById("image1");
  var wiper = document.getElementById("windshield-wiper1");
  
  // Increase opacity of the image by 10% or reset to 0% based on the current opacity
  var currentOpacity = parseFloat(image.style.opacity) || 0;
  var newOpacity = (currentOpacity < 1) ? (currentOpacity + 0.24) : 0;

  // If the next click will make opacity greater than 100%, refresh the page
  if (newOpacity > 0.99) {
      window.location.reload();
      return; // Stop further execution
  }

  // Set the new opacity
  image.style.opacity = newOpacity;
  
  // Trigger the wiper animation directly by adding the class
  wiper.classList.add("wiper-active");
  
  // Remove the class after the animation duration to reset it for the next click
  setTimeout(function() {
      wiper.classList.remove("wiper-active");
  }, 1500); // Adjust the duration as needed (1500ms = 1.5 seconds)
});


// BLOCK 2
// Get the snow and shovel elements
var snowElements = [document.getElementById("Snow1"), document.getElementById("Snow2"), document.getElementById("Snow3"), document.getElementById("Snow4")];
var shovelElements = [document.getElementById("Shovel1"), document.getElementById("Shovel2"), document.getElementById("Shovel3"), document.getElementById("Shovel4")];

// Variable to track the current position
var currentPosition = 0;

// Add an event listener to the button
document.getElementById("btn2").addEventListener("click", function() {
    // Move the current snow and shovel elements
    moveElements();

    // Increment the currentPosition
    currentPosition++;

    // If currentPosition exceeds the last position, refresh the webpage
    if (currentPosition >= snowElements.length + 1) {
        window.location.reload();
    }
});

// Function to move the snow and shovel elements based on currentPosition
function moveElements() {
    // Calculate the next position to move
    var nextPosition = currentPosition % snowElements.length;

    // Move the snow and shovel elements based on nextPosition
    if (nextPosition % 2 === 0) { // Move up
        snowElements[nextPosition].style.transition = "top 1.3s ease-out";
        snowElements[nextPosition].style.top = "-120%";
        shovelElements[nextPosition].style.top = "-120%";
    } else { // Move down
        snowElements[nextPosition].style.transition = "bottom 1.3s ease-out";
        snowElements[nextPosition].style.bottom = "-120%";
        shovelElements[nextPosition].style.bottom = "-120%";
    }
}



// BLOCK 3
// Initialize the blurAmount variable to track the current blur amount
var blurAmount = 100;

// Add an event listener to the button
document.getElementById("btn3").addEventListener("click", function() {
    // Get the blur layer element
    var blurLayer = document.querySelector(".blur");

    // Decrease the blur amount by a dynamic decrement value
    var decrement = 20; // Default decrement value
    if (blurAmount <= 20) {
        decrement = 4; // Change decrement to 4 when blurAmount <= 20
    }
    if (blurAmount <= 8) {
        decrement = 1; // Change decrement to 2 when blurAmount <= 10
    }
    
    // Decrease the blur amount by the calculated decrement
    blurAmount -= decrement;

    // If the blur amount is less than or equal to 0, refresh the webpage
    if (blurAmount < 0) {
        window.location.reload();
        return; // Stop further execution
    }

    // Set the new blur amount
    blurLayer.style.backdropFilter = "blur(" + blurAmount + "px)";
});



// BLOCK 4
// Initialize the originalWidth and originalHeight variables to store the original dimensions of the image
var originalWidth = 4;
var originalHeight = 4;

// Add an event listener to the button
document.getElementById("btn4").addEventListener("click", function() {
    // Get the image element
    var image = document.querySelector("#frame4 img");
    
    // Get the current width and height of the image
    var currentWidth = parseFloat(image.style.width) || originalWidth;
    var currentHeight = parseFloat(image.style.height) || originalHeight;
    
    // Calculate the new width and height by increasing them by 10%
    var newWidth = currentWidth * 1.1;
    var newHeight = currentHeight * 1.1;
    
    // If the new width or height is more than four times the original, reset to the original size
    if (newWidth > originalWidth * 5 || newHeight > originalHeight * 5) {
        image.style.width = originalWidth + "vw";
        image.style.height = originalHeight + "vw";
    } else {
        // Otherwise, set the new width and height
        image.style.width = newWidth + "vw";
        image.style.height = newHeight + "vw";
    }
});


// BLOCK 5
// Initialize a counter to track the number of clicks
var clickCount = 0;

// Add an event listener to the button
document.getElementById("btn5").addEventListener("click", function() {
    // Get the walle-walking, deserted-city, and image5 elements
    var walleWalking = document.getElementById("walle-walking");
    var desertedCity = document.getElementById("deserted-city");
    var image5 = document.getElementById("image5");
    
    // Increment the click count
    clickCount++;

    // Move walle-walking from left: 6% to left: 42% on the first click
    if (clickCount === 1) {
        walleWalking.style.left = "40%";
    } 
    // Move walle-walking from left: 42% to left: 78% on the second click
    else if (clickCount === 2) {
        walleWalking.style.left = "74%";
    } 
    // Fade out walle-walking and deserted-city, and reveal image5 on the third click
    else if (clickCount === 3) {
        walleWalking.style.opacity = "0";
        desertedCity.style.opacity = "0";
        image5.style.opacity = "1";
    }
});




// BLOCK 6
document.getElementById("btn6").addEventListener("click", function() {
  // Array containing IDs of all bird images
  var birdIds = ["AB-bird-red", "AB-bird-yellow", "AB-bird-black"];
  
  // Get the index of the currently displayed bird
  var currentIndex = birdIds.indexOf(document.querySelector(".frame img[id^='AB-bird-']:not([style*='opacity: 0'])").id);
  
  // Calculate the index of the next bird
  var nextIndex = (currentIndex + 1) % birdIds.length;
  
  // Retrieve the next bird element
  var nextBird = document.getElementById(birdIds[nextIndex]);
  
  // Reset the position and opacity of all bird elements
  var allBirds = document.querySelectorAll(".frame img[id^='AB-bird-']");
  allBirds.forEach(function(bird) {
      bird.style.top = "50%";
      bird.style.opacity = "0";
  });
  
  // Reset next bird position and opacity
  nextBird.style.top = "50%";
  nextBird.style.opacity = "0";
  
  // Trigger a reflow by accessing a property
  nextBird.offsetHeight; // This line is important for resetting the transition
  
  setTimeout(function() {
    nextBird.style.top = "33%";
    nextBird.style.opacity = "1";
}, 1); 

  // Introduce a delay before moving next bird to new position
  setTimeout(function() {
      nextBird.style.top = "35%";
      nextBird.style.opacity = "1";
  }, 500); // You can adjust the delay value as needed
});


// BLOCK 7
// Initialize the opacity variable to track the current opacity of the black layer
var blackLayerOpacity = 100;

// Add an event listener to the button
document.getElementById("btn7").addEventListener("click", function() {
    // Get the black layer element
    var blackLayer = document.getElementById("black-layer");

    // Decrease opacity by 10% or reset to 100% based on the current opacity
    if (blackLayerOpacity > 0) {
        blackLayerOpacity -= 10;
    } else {
        blackLayerOpacity = 100;
    }

    // Set the new opacity
    blackLayer.style.opacity = blackLayerOpacity / 100;
});




// BLOCK 8
// Add event listeners to each button
// Add event listeners to each button
document.getElementById("btn8-1").addEventListener("click", function() {
  loadSunImage("image8-1.png");
});

document.getElementById("btn8-2").addEventListener("click", function() {
  loadSunImage("image8-2.png");
});

document.getElementById("btn8-3").addEventListener("click", function() {
  loadSunImage("image8-3.png");
});

document.getElementById("btn8-4").addEventListener("click", function() {
  loadSunImage("image8-4.png");
});

// Function to load the corresponding sun image with transition
function loadSunImage(imageSrc) {
  // Reset the display of all images
  var allImages = document.querySelectorAll("#frame8 img");
  allImages.forEach(function(image) {
      image.style.opacity = "0";
      image.style.transition = "opacity 1s";
  });

  // Find the corresponding image and display it with transition
  var selectedImage = document.querySelector("#frame8 img[src='" + imageSrc + "']");
  if (selectedImage) {
      selectedImage.style.opacity = "1";
  }
}

// BLOCK 9
// Get all the images and initialize the index to track the current image
var images = document.querySelectorAll("#frame9 img");
var currentIndex = 0;

// Initially hide all images except the first one
for (var i = 1; i < images.length; i++) {
    images[i].style.display = "none";
}

// Add an event listener to the button
document.getElementById("btn9").addEventListener("click", function() {
    // Hide the current image
    images[currentIndex].style.display = "none";

    // Move to the next image
    currentIndex++;

    // If currentIndex exceeds the last index, reset it to 0 to start from the beginning
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Display the next image
    images[currentIndex].style.display = "block";
});







// BLOCK 15
// Add an event listener to the button
document.getElementById("btn15").addEventListener("click", function() {
  // Get the minecraft image element
  var minecraftImage = document.getElementById("minecraft");

  // Set initial state to white
  var isWhite = true;

  // Toggle between white and original state with a delay to create blinking effect
  var blinkInterval = setInterval(function() {
      if (isWhite) {
          // Set minecraft image to original state
          minecraftImage.style.filter = "none";
      } else {
          // Set minecraft image to white
          minecraftImage.style.filter = "brightness(0) invert(1)";
      }
      isWhite = !isWhite; // Toggle state
  }, 200); // 200ms delay for blinking interval

  // After blinking, hide the minecraft image and show the "image15.png"
  setTimeout(function() {
      clearInterval(blinkInterval); // Stop blinking
      minecraftImage.style.display = "none"; // Hide minecraft image
      document.querySelector("#frame15 img[src='image15.png']").style.display = "block"; // Show image15.png
  }, 2500); // 2500ms delay to stop blinking and show image15.png
});
