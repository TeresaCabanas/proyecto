let counter = 0;

const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

decreaseBtn.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterDisplay.textContent = counter;
});
