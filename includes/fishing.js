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