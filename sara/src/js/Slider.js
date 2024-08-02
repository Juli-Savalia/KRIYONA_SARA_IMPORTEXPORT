import $ from "jquery"
// parallax 1st section

document.addEventListener("mousemove",parallax);
function parallax(e){
  document.querySelectorAll(".obj").forEach(function(move){
    var moving_val = move.getAttribute("data-value");
    var x = (e.clientX * moving_val) / 250;
    var y = (e.clientY * moving_val) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  })
}

// testimonial slider
// vars
// vars
'use strict'
var testim = document.getElementById("testim");
var testimDots = document.getElementById("testim-dots")?.children;
var testimContent = document.getElementById("testim-content")?.children;
var testimLeftArrow = document.getElementById("left-arrow");
var testimRightArrow = document.getElementById("right-arrow");
var testimSpeed = 4500;
var currentSlide = 0;
var currentActive = 0;
var testimTimer;
var touchStartPos;
var touchEndPos;
var touchPosDiff;
var ignoreTouch = 30;

window.onload = function() {
    // keyboard shortcuts
    document.addEventListener("keydown", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow?.click();
                break;

            case 39:
                testimRightArrow?.click();
                break;
        }
    })

    // add event listeners
    testimLeftArrow?.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow?.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots?.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = Array.prototype.indexOf.call(testimDots, this));
        })
    }

    // touch events
    testim?.addEventListener("touchstart", function(e) {
        touchStartPos = e.changedTouches[0].clientX;
    })

    testim?.addEventListener("touchend", function(e) {
        touchEndPos = e.changedTouches[0].clientX;

        touchPosDiff = touchStartPos - touchEndPos;

        console.log(touchPosDiff);
        console.log(touchStartPos);    
        console.log(touchEndPos);    

        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow?.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow?.click();
        } else {
            return;
        }
    })

    // start timer
    testimTimer = setInterval(function() {
        playSlide(currentSlide += 1);
    }, testimSpeed)
}

function playSlide(slide) {
    for (var k = 0; k < testimContent?.length; k++) {
        testimContent[k].classList.remove("active");
        testimContent[k].classList.remove("inactive");
    }

    if (slide < 0) {
        slide = currentSlide = testimContent?.length - 1;
    }

    if (slide > testimContent?.length - 1) {
        slide = currentSlide = 0;
    }

    if (testimContent) {
        testimContent[slide].classList.add("active");
    }

    changeDots(slide);
}

function changeDots(slide) {
    for (var j = 0; j < testimDots?.length; j++) {
        testimDots[j].classList.remove("active");
    }

    if (testimDots) {
        testimDots[slide].classList.add("active");
    }
}