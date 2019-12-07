/* eslint-disable linebreak-style */
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const getColor = () => {
  const variableColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[variableColor];
};

const changeBackgroundColor = {
  start() {
    refs.start.setAttribute('disable', true);
    this.changeColor = setInterval(() => {
      getColor(colors);
    }, 1000);
  },
  stop() {
    refs.start.removeAttribute('disable');
    clearInterval(this.changeColor);
  },
};

refs.start.addEventListener(
  'click',
  changeBackgroundColor.start.bind(changeBackgroundColor),
);

refs.stop.addEventListener(
  'click',
  changeBackgroundColor.stop.bind(changeBackgroundColor),
);
