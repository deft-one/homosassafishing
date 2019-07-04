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