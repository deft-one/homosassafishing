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

// When the user scrolls down 400px from the top of the document, show the button

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
}

window.onscroll = function() {
    scrollFunction()
};

// When the user clicks on the button, scroll to the top of the document
toTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});