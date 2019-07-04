// TOGGLE HAMBURGER MENU IN-OUT
let hamburger = document.getElementById('hamburger');
let subNavUl = document.getElementById('subNavUl');

hamburger.addEventListener('click', function() {
    if (subNavUl.classList.contains('menu-out') === true) {
        subNavUl.classList.remove('menu-out');
        subNavUl.classList.add('menu-in');
    } else if (subNavUl.classList.contains('menu-in') === true) {
        subNavUl.classList.remove('menu-in');
        subNavUl.classList.add('menu-out');
    } else {
        subNavUl.classList.add('menu-in');
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
        console.log('over 400 contains fade out');
        toTop.classList.remove('toTopFadeOut');
        toTop.classList.add('toTopFadeIn');
    } else  {
        console.log('over 400 does not contain fade in');
        toTop.classList.add('toTopFadeIn');
    }
} else if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
    if (toTop.classList.contains('toTopFadeIn') === true) {
        console.log('under 400 contains fade in');
        toTop.classList.remove('toTopFadeIn');
        toTop.classList.add('toTopFadeOut');
    }
}

// When the user clicks on the button, scroll to the top of the document
toTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})}