let contactForm = document.getElementById('contactForm');

contactForm.addEventListener('click', function(event) {
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
    let firstInput = document.getElementById('firstInput');
    let lastInput = document.getElementById('firstInput');
    let emailInput = document.getElementById('firstInput');

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
            // inputSection.style.display = 'none';
        }
    }
    
    lastStep();

    function resetForm() {
        bookBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        questionBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        scallopingBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        fishingBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        halfBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        fullBtn.style.backgroundColor = 'rgb(184, 184, 184)';
        typeSelect.style.display = 'none';
        timeframeSelect.style.display = 'none';
        dateSelect.style.display = 'none';
        inputSection.style.display = 'none';
        daySelect.style.backgroundColor = 'rgb(184, 184, 184)';
        daySelect.innerHTML = '';
        monthSelect.style.backgroundColor = 'rgb(184, 184, 184)';
        monthSelect.innerHTML = '';
        yearSelect.style.backgroundColor = 'rgb(184, 184, 184)';
        yearSelect.innerHTML = ['<option value=""></option>',
                                '<option value="' + thisYear + '">' + thisYear + '</option>',
                                '<option value="' + nextYear + '">' + nextYear + '</option>'];
    }

    if (event.target === questionBtn) {
        resetForm();
        questionBtn.style.backgroundColor = 'rgb(102, 255, 0)';
        inputSection.style.display = 'flex';
        submit.innerText = 'Send';
    } else if (event.target === bookBtn) {
        resetForm();
        bookBtn.style.backgroundColor = 'rgb(102, 255, 0)';
        typeSelect.style.display = 'flex';
        submit.innerText = 'Book It!';
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
                               '<option value="6">6</option>',
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

function dynamicVariables1() {
    if (questionBtn.style.backgroundColor === 'rgb(102, 255, 0)') {
        let option1 = questionBtn.innerText.toLowerCase() + '.';
        return option1;
    } else if (bookBtn.style.backgroundColor === 'rgb(102, 255, 0)') {
        let option1 = bookBtn.innerText.toLowerCase();
        return option1;
    }
}

function dynamicVariables2() {
    if (fishingBtn.style.backgroundColor === 'rgb(102, 255, 0)') {
        let option2 = fishingBtn.innerText;
        return option2;
    } else if (scallopingBtn.style.backgroundColor === 'rgb(102, 255, 0)') {
        let option2 = scallopingBtn.innerText;
        return option2;
    }
}

function dynamicVariables3() {
    if (fullBtn.style.backgroundColor === 'rgb(102, 255, 0)') {
        let option3 = fullBtn.innerText;
        return option3;
    } else if (halfBtn.style.backgroundColor === 'rgb(102, 255, 0)') {
        let option3 = halfBtn.innerText;
        return option3;
    }
}

contactForm.addEventListener('keyup', function() {
    if (questionBtn.style.backgroundColor === 'rgb(102, 255, 0)') {
        messageBox.innerHTML = '\n\n\n' + firstInput.value + ' ' + lastInput.value + '\n' + emailInput.value;
    } else if (bookBtn.style.backgroundColor === 'rgb(102, 255, 0)') {
        messageBox.innerHTML = 'I would like to ' + dynamicVariables1() + '\n\n\n' +
        'Type: ' + dynamicVariables2() + '\n\n' +
        'Length: ' + dynamicVariables3() + '\n\n' +
        'Date: ' + monthSelect.value + ' ' + daySelect.value + ' ' + yearSelect.value + '\n\n\n' +
        firstInput.value + ' ' + lastInput.value + '\n' + emailInput.value;
    }
});