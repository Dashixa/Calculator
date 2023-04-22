const weightInput = document.querySelector('.weight');
const heightInput = document.querySelector('.height');
const ageInput = document.querySelector('.age');
const button = document.querySelector('.button');
const result = document.querySelector('.result');

function calculate(w, h, a, k) {
    res = (655.1 + (9.563 * w) + (1.85 * h) - (4.676 * a))*k;
    if ((w && h && a) == 0) {
        return 0;
    } else { return res; }
};

function checkRadio() {
    const radioButtons = document.getElementsByName('kef');

    for(let i = 0; i < radioButtons.length; i++ ) {
        if (radioButtons[i].type == 'radio' && radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }
}

function showResult(e) {
    e.preventDefault();
    result.textContent = calculate(weightInput.value, heightInput.value, ageInput.value, checkRadio());
}

button.addEventListener('click', showResult);