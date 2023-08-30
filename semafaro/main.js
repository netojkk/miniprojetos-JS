const buttons = document.querySelector('.buttons')
const semaforo = document.querySelector('#semafaro')

let colorIndex = 0
let interval = null

const trafficLight = (event) =>  {
    stopLights()
    turnOn[event.target.id]();
    
}

const nextIndex = () => {
    if (colorIndex < 2){
        colorIndex++
    }else {
        colorIndex = 0
    }
}
const stopLights = () => {
    clearInterval (interval)
}

const changeColor = () => {
    const colors = ['red', 'yellow','green']
    const color = colors[colorIndex]
    turnOn[color](); 
    nextIndex()
}
const turnOn = {
    'red':    () => semaforo.src = 'img/vermelho.png',
    'yellow':     () => semaforo.src = 'img/amarelo.png',
    'green':  () => semaforo.src = 'img/verde.png',
    'pifado': () => interval = setInterval(changeColor, 500)
}

buttons.addEventListener('click', trafficLight);


// console.log(event.target.id)  // encontra a target de onde você está clicando e id