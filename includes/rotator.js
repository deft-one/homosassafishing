function plusImages(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showImages(imageIndex -= 1);
    } else {
        showImages(imageIndex += 1);
    }
    if (n === 1) {
        myTimer = setInterval(function() {
            plusImages(n = 2)
        }, 4000);
    } else {
        myTimer = setInterval(function() {
            plusImages(n + 1)
        }, 4000);
    }
}

function showImages(n) {
    let i;
    let images = document.getElementsByClassName('images');
    let dots = document.getElementsByClassName('dots');
    if (n > images.length) {
        imageIndex = 1;
    }
    if (n < 1) {
        imageIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[imageIndex - 1].style.display = "block";
    dots[imageIndex - 1].className += " active";
}

let imageIndex = 1;
let myTimer;
window.addEventListener('load', function() {
    showImages(imageIndex);
    myTimer = setInterval(function() {
        plusImages(1)
    }, 4000);
})

function currentImage(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusImages(n + 1)
    }, 4000);
    showImages(imageIndex = n);
}