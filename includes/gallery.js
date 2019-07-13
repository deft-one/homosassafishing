function scrollFunc() {
    event.target.scrollIntoView({behavior: "smooth", block: "center"});
}

document.addEventListener('click', function(event) {
    function classSwap(callBack) {
        if (event.target.classList.contains('scallop-img')) {
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