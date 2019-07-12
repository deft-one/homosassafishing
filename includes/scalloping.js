(function() {
    let inSeason = document.getElementById('inSeason');
    let outSeason = document.getElementById('outSeason');
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDay();
    if (month >= 6 && month <= 9) {
        if (month >= 6 && month <=8) {
            inSeason.style.display = 'block';
            outSeason.style.display = 'none';
        } else if (month === 9 && day <= 24) {
            inSeason.style.display = 'block';
            outSeason.style.display = 'none';
        }
    } else {
        outSeason.style.display = 'block';
        inSeason.style.display = 'none';
    }
}());