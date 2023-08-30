const lights = document.querySelector("#semafaro");
const buttons = document.querySelector(".buttons");

let interval = null;
let colorsIndex = 0;

const trafficLighter = (event) => {
  stopLights();
  turnOn[event.target.id]();
};
const stopLights = () => {
  clearInterval(interval);
};

const nextIndex = () => {
  if (colorsIndex < 2) {
    colorsIndex++;
  } else {
    colorsIndex = 0;
  }
};
const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorsIndex];
  turnOn[color]();
  nextIndex();
};

const turnOn = {
  red: () => (lights.src = "img/vermelho.png"),
  yellow: () => (lights.src = "img/amarelo.png"),
  green: () => (lights.src = "img/verde.png"),
  automatic: () => (interval = setInterval(changeColor, 1000)),
};

buttons.addEventListener("click", trafficLighter);

// console.log(event.target.id)  // encontra a target de onde você está clicando e id
