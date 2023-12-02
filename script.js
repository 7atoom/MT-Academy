// collecting all the elements

var sliderBoxes = Array.from(document.querySelectorAll(".slide"));
var bullets = Array.from(document.querySelectorAll(".bullet"));

var boxText = Array.from(document.querySelectorAll(".text"));

var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");

var toggleMenu = document.querySelector(".toggle-menu");

nextBtn.onclick = next;
prevBtn.onclick = prev;


toggleMenu.onclick = function() {
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
    toggleMenu.classList.toggle("active");
}




var boxesCounter = sliderBoxes.length;
var currentBox = 1;
var autoplayInterval;

// // Autoplay function
// function startAutoplay() {
//     if (currentBox == 1) {
//         autoplayInterval = setInterval(next, 6000); // Change the interval as per your requirement (in milliseconds)
//     } else {
//         autoplayInterval = setInterval(next, 5000); // Change the interval as per your requirement (in milliseconds)
//     }
// }

// // Stop autoplay function
// function stopAutoplay() {
//     clearInterval(autoplayInterval);
// }

// // Start autoplay on page load
// startAutoplay();




// Stop autoplay when user interacts with the slider
sliderBoxes.forEach(function(box) {
    box.addEventListener("mouseenter", stopAutoplay);
    box.addEventListener("mouseleave", startAutoplay);
});

for (var i = 0; i < bullets.length; i++) {
    bullets[i].onclick = function() {
        currentBox = bullets.indexOf(this) + 1;
        check();
    }
}

function next() {
    if (currentBox == boxesCounter) {
        currentBox = 1;
    } else {
        currentBox++;
    }
    check();
}

function prev() {
    if (currentBox == 1) {
        currentBox = boxesCounter;
    } else {
        currentBox--;
    }
    check();
}

function check() {
    removeActive();
    sliderBoxes[currentBox - 1].classList.add("active");
    bullets[currentBox - 1].classList.add("active");
}

function removeActive() {
    sliderBoxes.forEach(function(box) {
        box.classList.remove("active");
    });

    bullets.forEach(function(bullet) {
        bullet.classList.remove("active");
    });
}