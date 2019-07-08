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

// *************************** CONTACT PAGE ****************************

let bookQuestionForm = document.getElementById('bookQuestionForm');

bookQuestionForm.addEventListener('click', function (event) {
    let questionButton = document.getElementById('questionButton');
    let bookButton = document.getElementById('bookButton');
    let timeframeSelect = document.getElementById('timeframeSelect');
    let typeSelect = document.getElementById('typeSelect');
    let dateSelect = document.getElementById('dateSelect');
    let fullButton = document.getElementById('fullButton');
    let halfButton = document.getElementById('halfButton');
    let fishingButton = document.getElementById('fishingButton');
    let scallopingButton = document.getElementById('scallopingButton');
    let monthSelect = document.getElementById('monthSelect');
    let daySelect = document.getElementById('daySelect');
    
    function dynamicYear() {
        let yearSelect = document.getElementById('yearSelect');
        today = new Date();
        let year = today.getYear() + 1900;
        let nextYear = today.getYear() + 1901;
        yearSelect.innerHTML = '<option name=' + '"' + year + '">' + year + '</option><option name=' + '"' + nextYear + '">' + nextYear + '</option>';
    }

    dynamicYear();

    if (event.target === questionButton) {
        event.preventDefault();
        timeframeSelect.style.display = 'none';
        typeSelect.style.display = 'none';
        dateSelect.style.display = 'none';
        bookButton.style.backgroundColor = 'rgb(0, 75, 12)';
        questionButton.style.backgroundColor = 'rgb(0, 255, 42)';
    } else if (event.target === bookButton) {
        event.preventDefault();
        timeframeSelect.style.display = 'block';
        typeSelect.style.display = 'block';
        dateSelect.style.display = 'block';
        questionButton.style.backgroundColor = 'rgb(0, 75, 12)';
        bookButton.style.backgroundColor = 'rgb(0, 255, 42)';
    } else if (event.target === fullButton) {
        event.preventDefault();
        if (scallopingButton.style.backgroundColor === 'rgb(0, 255, 42)') {
            fullButton.style.backgroundColor = 'rgb(0, 75, 12)';
            halfButton.style.backgroundColor = 'rgb(0, 255, 42)';
        } else {
            halfButton.style.backgroundColor = 'rgb(0, 75, 12)';
            fullButton.style.backgroundColor = 'rgb(0, 255, 42)';
        }
    } else if (event.target === halfButton) {
        event.preventDefault();
        fullButton.style.backgroundColor = 'rgb(0, 75, 12)';
        halfButton.style.backgroundColor = 'rgb(0, 255, 42)';
    } else if (event.target === fishingButton) {
        event.preventDefault();
        monthSelect.innerHTML = '<option value="Jan">Jan</option><option value="Feb">Feb</option><option value="Mar">Mar</option><option value="Apr">Apr</option><option value="May">May</option><option value="Jun">Jun</option><option value="Jul">Jul</option><option value="Aug">Aug</option><option value="Sep">Sep</option><option value="Oct">Oct</option><option value="Nov">Nov</option><option value="Dec">Dec</option>';
        scallopingButton.style.backgroundColor = 'rgb(0, 75, 12)';
        fishingButton.style.backgroundColor = 'rgb(0, 255, 42)';
    } else if (event.target === scallopingButton) {
        event.preventDefault();
        monthSelect.innerHTML = '<option value="Jul">Jul</option><option value="Aug">Aug</option><option value="Sep">Sep</option>';
        fishingButton.style.backgroundColor = 'rgb(0, 75, 12)';
        scallopingButton.style.backgroundColor = 'rgb(0, 255, 42)';
        fullButton.style.backgroundColor = 'rgb(0, 75, 12)';
        halfButton.style.backgroundColor = 'rgb(0, 255, 42)';
        }

});
