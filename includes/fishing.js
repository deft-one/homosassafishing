document.addEventListener('click', function(event) {
    if (event.target.classList.contains('item-image')) {
        if (event.target.nextElementSibling.classList.contains('descripDisplay')) {
            event.target.nextElementSibling.classList.remove('descripDisplay');
            event.target.nextElementSibling.classList.add('descripHide');
        } else if (event.target.nextElementSibling.classList.contains('descripHide')) {
            event.target.nextElementSibling.classList.remove('descripHide');
            event.target.nextElementSibling.classList.add('descripDisplay');
        } else {
            event.target.nextElementSibling.classList.add('descripDisplay');
        }
    }
}, false);

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('descripDisplay')) {
        event.target.classList.remove('descripDisplay');
        event.target.classList.add('descripHide');
    }
}, false);

function scrollFunc() {
    event.target.scrollIntoView({behavior: "smooth", block: "center"});
}

document.addEventListener('click', function(event) {
    function classSwap(callBack) {
        if (event.target.classList.contains('the-boat')) {
            if (event.target.classList.contains('gallerySizeUp')) {
                event.target.classList.remove('gallerySizeUp');
                event.target.classList.add('gallerySizeDn');
            } else if (event.target.classList.contains('gallerySizeDn')) {
                event.target.classList.remove('gallerySizeDn');
                event.target.classList.add('gallerySizeUp');
            } else {
                event.target.classList.add('gallerySizeUp');
            }
        }
        callBack();
    }
    classSwap(scrollFunc);
    
}, false);