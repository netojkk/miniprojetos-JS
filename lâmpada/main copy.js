let turnOn = document.querySelector("#lig");
const turnOff = document.querySelector("#des");
const lamp = document.querySelector("#lampada");

function lampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function onLamp() {
  if (!lampBroken()) {
    lamp.src = "img/ligada.jpg";
  }
}

function offLamp() {
  if (!lampBroken()) {
    lamp.src = "img/desligada.jpg";
  }
}

function broken() {
  lamp.src = "img/quebrada.jpg";
}

turnOn.addEventListener("click", onLamp);
turnOff.addEventListener("click", offLamp);
lamp.addEventListener("mouseover", onLamp);
lamp.addEventListener("mouseout", offLamp);
lamp.addEventListener("dblclick", broken);
