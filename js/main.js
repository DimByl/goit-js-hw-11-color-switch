const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
   startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = 0;

function onChangeColorsInterval () {
    refs.startBtn.setAttribute('disabled', 'disabled');
    intervalId = setInterval(changeBodyColour, 1000);
};

function onStopColorsInterval() {
    refs.startBtn.removeAttribute('disabled');
    clearInterval(intervalId);
};

function changeBodyColour() {
    const bodyColour = colors[randomIntegerFromInterval(0, colors.length-1)]
    refs.body.style.backgroundColor = bodyColour;
};

refs.startBtn.addEventListener('click', onChangeColorsInterval);
refs.stopBtn.addEventListener('click', onStopColorsInterval);
