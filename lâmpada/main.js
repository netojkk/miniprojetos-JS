const buttons = document.querySelector(".buttons");
const lamp = document.querySelector("#image");

const findLamp = (event) => {
  turnOn[event.target.id]();
};

function lampBroken  () {

    return lamp.src.indexOf('quebrada') > -1
    
}

const onLight = () => {
  if ( !lampBroken() ) {
  lamp.src = "img/ligada.jpg";

}};
const offLight = () => {
  if ( !lampBroken() ) {

  lamp.src = "img/desligada.jpg";
}};
const lightBroken = () => {
    lamp.src = "img/quebrada.jpg";
}


const turnOn = {
  on: () => (onLight()),
  off: () => (offLight()),
};


buttons.addEventListener("click", findLamp);
lamp.addEventListener("mouseover", onLight);
lamp.addEventListener("mouseout", offLight);
lamp.addEventListener("dblclick", lightBroken);
