const display = document.getElementById('display');
const display2 = document.querySelector('.display2');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    display2.innerHTML = '&nbsp;';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(display.value);
        display2.innerText = display.value;
        display.value = result;
    } catch (e) {
        alert('Invalid expression');
    }
}

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', function () {
        const value = this.value;

        switch (value) {
            case 'AC':
                clearDisplay();
                break;
            case 'DE':
                deleteLast();
                break;
            case '=':
                calculateResult();
                break;
            default:
                appendToDisplay(value);
                break;
        }
    });
});
