// collecting all the elements

var sliderBoxes = Array.from(document.querySelectorAll(".slide"));
var bullets = Array.from(document.querySelectorAll(".bullet"));

var boxText = Array.from(document.querySelectorAll(".text"));

var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");

nextBtn.onclick = next;
prevBtn.onclick = prev;


var boxesCounter = sliderBoxes.length;
var currentBox = 1;




for (var i = 0; i < bullets.length; i++) {
    bullets[i].onclick = function() {
        currentBox = bullets.indexOf(this) + 1;
        check();
    }
}



function next() {
    if (currentBox === 1) {
        currentBox = boxesCounter;
    } else {
        currentBox--;
    }
    check();
}

function prev() {
    if (currentBox === boxesCounter) {
        currentBox = 1;
    } else {
        currentBox++;
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