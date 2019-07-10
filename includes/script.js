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

document.addEventListener('click', function(event) {
    let questionBtn = document.getElementById('questionBtn');
    let bookBtn = document.getElementById('bookBtn');
    let fullBtn = document.getElementById('fullBtn');
    let halfBtn = document.getElementById('halfBtn');
    let fishingBtn = document.getElementById('fishingBtn');
    let scallopingBtn = document.getElementById('scallopingBtn');
    let timeframeSelect = document.getElementById('timeframeSelect');
    let typeSelect = document.getElementById('typeSelect');
    let dateSelect = document.getElementById('dateSelect');
    let inputSection = document.getElementById('inputSection');
    let submit = document.getElementById('submit');
    let yearSelect = document.getElementById('yearSelect');
    let monthSelect = document.getElementById('monthSelect');
    let daySelect = document.getElementById('daySelect');

    event.preventDefault();

    function dynamicYear() {
        let year = new Date();
        thisYear = year.getFullYear();
        nextYear = year.getFullYear() + 1;
    }

    dynamicYear();

    function lastStep() {
        if (yearSelect.value !== '' && monthSelect.value !== '' && daySelect.value !== '') {
            inputSection.style.display = 'flex';
        }if (yearSelect.value === '' || monthSelect.value === '' || daySelect.value === '') {
            inputSection.style.display = 'none';
        }
    }
    
    lastStep();

    if (event.target === questionBtn) {
        questionBtn.style.backgroundColor = 'rgb(102, 255, 0)';
        bookBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        typeSelect.style.display = 'none';
        timeframeSelect.style.display = 'none';
        dateSelect.style.display = 'none';
        inputSection.style.display = 'flex';
        submit.innerText = 'Send';
    } else if (event.target === bookBtn) {
        bookBtn.style.backgroundColor = 'rgb(102, 255, 0)';
        questionBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        typeSelect.style.display = 'flex';
        timeframeSelect.style.display = 'none';
        dateSelect.style.display = 'none';
        inputSection.style.display = 'none';
        submit.innerText = 'Book It!';
        yearSelect.innerHTML = ['<option value=""></option>',
                                '<option value="' + thisYear + '">' + thisYear + '</option>',
                                '<option value="' + nextYear + '">' + nextYear + '</option>'];
    } else if (event.target === fishingBtn) {
        fishingBtn.style.backgroundColor = 'rgb(102, 255, 0)';
        scallopingBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        timeframeSelect.style.display = 'flex';
        fullBtn.style.display = 'block';
        monthSelect.innerHTML = ['<option value=""></option>',
                                 '<option value="Jan">Jan</option>',
                                 '<option value="Feb">Feb</option>',
                                 '<option value="Mar">Mar</option>',
                                 '<option value="Apr">Apr</option>',
                                 '<option value="May">May</option>',
                                 '<option value="Jun">Jun</option>',
                                 '<option value="Jul">Jul</option>',
                                 '<option value="Aug">Aug</option>',
                                 '<option value="Sep">Sep</option>',
                                 '<option value="Oct">Oct</option>',
                                 '<option value="Nov">Nov</option>',
                                 '<option value="Dec">Dec</option>'];
    } else if (event.target === scallopingBtn) {
        scallopingBtn.style.backgroundColor = 'rgb(102, 255, 0)';
        fishingBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        timeframeSelect.style.display = 'flex';
        fullBtn.style.display = 'none';
        monthSelect.innerHTML = ['<option value=""></option>',
                                 '<option value="Jul">Jul</option>',
                                 '<option value="Aug">Aug</option>',
                                 '<option value="Sep">Sep</option>'];
    } else if (event.target === fullBtn) {
        fullBtn.style.backgroundColor = 'rgb(102, 255, 0)';
        halfBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        dateSelect.style.display = 'flex';
    } else if (event.target === halfBtn) {
        halfBtn.style.backgroundColor = 'rgb(102, 255, 0)';
        fullBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        dateSelect.style.display = 'flex';
    }
});

monthSelect.addEventListener('change', function() {
    if (event.target.value === 'Feb') {
        daySelect.innerHTML = ['<option value=""></option>',
                               '<option value="1">1</option>',
                               '<option value="2">2</option>',
                               '<option value="3">3</option>',
                               '<option value="4">4</option>',
                               '<option value="5">5</option>',
                               '<option value="5">6</option>',
                               '<option value="7">7</option>',
                               '<option value="8">8</option>',
                               '<option value="9">9</option>',
                               '<option value="10">10</option>',
                               '<option value="11">11</option>',
                               '<option value="12">12</option>',
                               '<option value="13">13</option>',
                               '<option value="14">14</option>',
                               '<option value="15">15</option>',
                               '<option value="16">16</option>',
                               '<option value="17">17</option>',
                               '<option value="18">18</option>',
                               '<option value="19">19</option>',
                               '<option value="20">20</option>',
                               '<option value="21">21</option>',
                               '<option value="22">22</option>',
                               '<option value="23">23</option>',
                               '<option value="24">24</option>',
                               '<option value="25">25</option>',
                               '<option value="26">26</option>',
                               '<option value="27">27</option>',
                               '<option value="28">28</option>'];
    } else if (event.target.value === 'Jan' || event.target.value === 'Mar' || event.target.value === 'May' || event.target.value === 'Jul' || event.target.value === 'Aug' || event.target.value === 'Oct' || event.target.value === 'Dec') {
        daySelect.innerHTML = ['<option value=""></option>',
                               '<option value="1">1</option>',
                               '<option value="2">2</option>',
                               '<option value="3">3</option>',
                               '<option value="4">4</option>',
                               '<option value="5">5</option>',
                               '<option value="5">6</option>',
                               '<option value="7">7</option>',
                               '<option value="8">8</option>',
                               '<option value="9">9</option>',
                               '<option value="10">10</option>',
                               '<option value="11">11</option>',
                               '<option value="12">12</option>',
                               '<option value="13">13</option>',
                               '<option value="14">14</option>',
                               '<option value="15">15</option>',
                               '<option value="16">16</option>',
                               '<option value="17">17</option>',
                               '<option value="18">18</option>',
                               '<option value="19">19</option>',
                               '<option value="20">20</option>',
                               '<option value="21">21</option>',
                               '<option value="22">22</option>',
                               '<option value="23">23</option>',
                               '<option value="24">24</option>',
                               '<option value="25">25</option>',
                               '<option value="26">26</option>',
                               '<option value="27">27</option>',
                               '<option value="28">28</option>',
                               '<option value="29">29</option>',
                               '<option value="30">30</option>',
                               '<option value="31">31</option>'];
    } else  {
        daySelect.innerHTML = ['<option value=""></option>',
                               '<option value="1">1</option>',
                               '<option value="2">2</option>',
                               '<option value="3">3</option>',
                               '<option value="4">4</option>',
                               '<option value="5">5</option>',
                               '<option value="5">6</option>',
                               '<option value="7">7</option>',
                               '<option value="8">8</option>',
                               '<option value="9">9</option>',
                               '<option value="10">10</option>',
                               '<option value="11">11</option>',
                               '<option value="12">12</option>',
                               '<option value="13">13</option>',
                               '<option value="14">14</option>',
                               '<option value="15">15</option>',
                               '<option value="16">16</option>',
                               '<option value="17">17</option>',
                               '<option value="18">18</option>',
                               '<option value="19">19</option>',
                               '<option value="20">20</option>',
                               '<option value="21">21</option>',
                               '<option value="22">22</option>',
                               '<option value="23">23</option>',
                               '<option value="24">24</option>',
                               '<option value="25">25</option>',
                               '<option value="26">26</option>',
                               '<option value="27">27</option>',
                               '<option value="28">28</option>',
                               '<option value="29">29</option>',
                               '<option value="30">30</option>'];
    }
});

dateSelect.addEventListener('change', function (event) {
    if (event.target === yearSelect || event.target === monthSelect || event.target === daySelect) {
        if (event.target.value !== '') {
            event.target.style.backgroundColor = 'rgb(102, 255, 0)';
        } else if (event.target.value === '') {
            event.target.style.backgroundColor = 'rgb(184, 184, 184)';
        }
    }
});
