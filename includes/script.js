// TOGGLE HAMBURGER MENU IN-OUT
let hamburger = document.getElementById('hamburger');
let subNavUl = document.getElementById('subNavUl');

document.body.addEventListener('click', function(event) {
    if (event.target === hamburger) {
        if (subNavUl.classList.contains('menu-out') === true) {
            subNavUl.classList.remove('menu-out');
            subNavUl.classList.add('menu-in');
        } else if (subNavUl.classList.contains('menu-in') === true) {
            subNavUl.classList.remove('menu-in');
            subNavUl.classList.add('menu-out');
        } else {
            subNavUl.classList.add('menu-in');
        }
    } else if (event.target !== hamburger) {
        if (subNavUl.classList.contains('menu-in') === true) {
            subNavUl.classList.remove('menu-in');
            subNavUl.classList.add('menu-out');
        }
    }
});
// -----------------------------------------------------------

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

let toTop = document.getElementById('toTop');

function scrollFunction() {
let toTop = document.getElementById('toTop');
if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    if (toTop.classList.contains('toTopFadeOut') === true) {
        toTop.classList.remove('toTopFadeOut');
        toTop.classList.add('toTopFadeIn');
    } else  {
        toTop.classList.add('toTopFadeIn');
    }
} else if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
    if (toTop.classList.contains('toTopFadeIn') === true) {
        toTop.classList.remove('toTopFadeIn');
        toTop.classList.add('toTopFadeOut');
    }
}

// When the user clicks on the button, scroll to the top of the document
toTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})}

// -----------------------------------------------------------


// need event listener for leftArrow to run plusSlides(-1)
// need event listener for leftArrow to run plusSlides(1)

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