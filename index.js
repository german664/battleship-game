const board = document.getElementById('board')
const matriz = [[]];
const barco1 = [];
const barco2 = [];
const barco3 = [];
const barco4 = [];
const botonPosiciones = document.getElementById('posiciones')
let counter = 0;
const mensaje = document.getElementById("mensaje");
const disparar = document.getElementById("disparar");

const checkIfFind = (e) => {
    const targetId = parseInt(e.target.id)
    if (barco1.includes(targetId) || barco2.includes(targetId) || barco3.includes(targetId) || barco4.includes(targetId)) {
        e.target.classList.add('found')
        counter++;
        if (counter === 9) {
            mensaje.classList.remove('hide')

        }
    } else {
        e.target.classList.add('missed')
    }
}


const createBoard = () => {
    for (let i = 1; i <= 90; i++) {
        let box = document.createElement('div')
        box.id = i
        box.classList.add('boxes')
        board.appendChild(box)
        matriz.push(i)
        box.addEventListener("click", checkIfFind)
        if (barco1.length < 1) {
            randomNumber = Math.floor(Math.random() * 80) + 1
            if (!barco1.includes(randomNumber)) {
                if (randomNumber % 10 === 0) {
                    barco1.push(randomNumber, randomNumber - 1)
                } else {
                    barco1.push(randomNumber, randomNumber + 1)
                }
            }
        }

        if (barco2.length < 1) {
            randomNumber = Math.floor(Math.random() * 80) + 1
            if (!barco1.includes(randomNumber) && !barco1.includes(randomNumber - 1) && !barco1.includes(randomNumber - 2) && !barco1.includes(randomNumber + 1) && !barco1.includes(randomNumber + 2) && !barco2.includes(randomNumber)) {
                if (randomNumber % 10 === 0 || (randomNumber + 1) % 10 === 0) {
                    barco2.push(randomNumber, randomNumber - 1, randomNumber - 2)
                } else {
                    barco2.push(randomNumber, randomNumber + 1, randomNumber + 2)
                }
            }
        }

        if (barco4.length < 1) {
            randomNumber = Math.floor(Math.random() * 80) + 1;
            if (!barco1.includes(randomNumber) && !barco1.includes(randomNumber + 10) && !barco1.includes(randomNumber + 20) && !barco1.includes(randomNumber + 30) && !barco1.includes(randomNumber - 10) && !barco1.includes(randomNumber - 20) && !barco1.includes(randomNumber - 30) && !barco2.includes(randomNumber) && !barco2.includes(randomNumber + 10) && !barco2.includes(randomNumber + 20) && !barco2.includes(randomNumber + 30) && !barco2.includes(randomNumber - 10) && !barco2.includes(randomNumber - 20) && !barco2.includes(randomNumber - 30) && !barco3.includes(randomNumber) && !barco3.includes(randomNumber + 10) && !barco3.includes(randomNumber + 20) && !barco3.includes(randomNumber + 30) && !barco3.includes(randomNumber - 10) && !barco3.includes(randomNumber - 20) && !barco3.includes(randomNumber - 30) && !barco4.includes(randomNumber)) {
                if (randomNumber > 60) {
                    barco4.push(randomNumber, randomNumber - 10, randomNumber - 20, randomNumber - 30)
                } else {
                    barco4.push(randomNumber, randomNumber + 10, randomNumber + 20, randomNumber + 30)
                }
            }
        }



    }
}

window.addEventListener("load", createBoard)
disparar.addEventListener("click", () => {
    const valor = parseInt(prompt("Elige el número al que quieres disparar. Ej: 3 Horizontal + 4 Vertical = 34"))
    const boxEscogida = document.getElementById(valor)
    if (barco1.includes(valor) || barco2.includes(valor) || barco4.includes(valor)) {
        boxEscogida.classList.add('found')
        counter++;
        if (counter === 9) {
            mensaje.classList.remove('hide')
        }
    } else {
        boxEscogida.classList.add('missed')
    }
    console.log(boxEscogida)
})


const boxes = document.getElementsByClassName("boxes")

botonPosiciones.addEventListener("click", () => {

    Array.from(boxes).map(box => {
        if (barco1.includes(parseInt(box.id)) || barco2.includes(parseInt(box.id)) || barco4.includes(parseInt(box.id))) {
            if (box.classList.contains("border")) {
                box.classList.remove('border')
            } else {
                box.classList.add('border')
            }

        }
    })
})
