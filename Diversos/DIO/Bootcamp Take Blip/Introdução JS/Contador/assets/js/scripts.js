var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber <= 14) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if (currentNumber > 0) {
            document.getElementById("currentNumber").style.color = "#0AA202";
        } else if (currentNumber < 0) {
            document.getElementById("currentNumber").style.color = "#FF0000";
        } else {
            document.getElementById("currentNumber").style.color = "#6E00FF";
        }
    } else {
        alert('O valor máximo já foi obtido.')
    }
}

function decrement() {
    if (currentNumber >= -14) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if (currentNumber > 0) {
            document.getElementById("currentNumber").style.color = "#0AA202";
        } else if (currentNumber < 0) {
            document.getElementById("currentNumber").style.color = "#FF0000";
        } else {
            document.getElementById("currentNumber").style.color = "#6E00FF";
        }
    } else {
        alert('O valor mínimo já foi obtido.')
    }
}


