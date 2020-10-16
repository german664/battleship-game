const board1 = document.getElementById('board')
const board2 = document.getElementById('board2')
const matriz = [];
const barco1 = [];
const barco2 = [];
const barco3 = [];
const barco4 = [];
const barco5 = [];
const barco6 = [];
const barco7 = [];
const botonPosiciones1 = document.getElementById('posiciones1')
const botonPosiciones2 = document.getElementById('posiciones2')
let counter1 = 0;
let counter2 = 0;
let currentPlayer = 1;
const mensaje1 = document.getElementById("mensaje1");
const mensaje2 = document.getElementById("mensaje2");
const disparar1 = document.getElementById("disparar");
let numberComputer = 90


const computerTurn = () => {
    if (currentPlayer === 2) {
        let randomNumber = Math.floor(Math.random() * numberComputer)
        let intento = matriz[randomNumber]
        matriz.splice(randomNumber, 1)
        const target = document.getElementById("board2")
        const targeted = target.getElementsByClassName(intento)[0]

        if (barco5.includes(intento) || barco6.includes(intento) || barco7.includes(intento)) {

            targeted.classList.add('found');

            counter2++
            if (counter2 === 9) {
                mensaje2.classList.remove('hide')
            }
        } else {
            targeted.classList.add('missed')
        }
        numberComputer--
        currentPlayer = 1
        console.log(matriz)
    }
}

const checkIfFind = (e, firstBarco, secondBarco, thirdBarco, contador, num) => {
    if (currentPlayer === num) {

        const targetId = parseInt(e.target.id)
        let realContador;
        let elmensaje;
        if (num === 1) {
            elmensaje = mensaje1

        } else if (num === 2) {
            elmensaje = mensaje2
        }
        if (firstBarco.includes(targetId) || secondBarco.includes(targetId) || thirdBarco.includes(targetId)) {
            e.target.classList.add('found');
            if (num === 1) {
                realContador = counter1++

            } else if (num === 2) {
                realContador = counter2++
            }
            realContador++
            if (realContador === 9) {
                elmensaje.classList.remove('hide')
            }
        } else {
            e.target.classList.add('missed')
        }
        if (num === 1) {
            currentPlayer = 2

        } else if (num === 2) {
            currentPlayer = 1
        }
    }
    computerTurn(num)
}


const createBoard = (board, firstBarco, secondBarco, thirdBarco, num, contador) => {
    for (let i = 0; i <= 89; i++) {
        let box = document.createElement('div')
        box.id = i
        box.classList.add('boxes' + num)
        box.classList.add(i)
        board.appendChild(box)
        if (num === 1) {
            matriz.push(i)
        }

        box.addEventListener("click", (e) => {
            checkIfFind(e, firstBarco, secondBarco, thirdBarco, contador, num)
        })
        let randomNumber1 = Math.floor(Math.random() * 89)
        let randomNumber2 = Math.floor(Math.random() * 89)
        do {
            randomNumber2 = Math.floor(Math.random() * 89)
        } while (randomNumber1 === randomNumber2)

        let randomNumber
        if (num === 1) {
            randomNumber = randomNumber2
        } else {
            randomNumber = randomNumber1
        }
        if (firstBarco.length < 1) {

            if (!firstBarco.includes(randomNumber)) {
                if ((randomNumber + 1).toString().split('')[1] == 0) {
                    firstBarco.push(randomNumber, randomNumber - 1)
                } else {
                    firstBarco.push(randomNumber, randomNumber + 1)
                }
            }
        }

        if (secondBarco.length < 1) {
            if (!firstBarco.includes(randomNumber) && !firstBarco.includes(randomNumber - 1) && !firstBarco.includes(randomNumber - 2) && !firstBarco.includes(randomNumber + 1) && !firstBarco.includes(randomNumber + 2) && !secondBarco.includes(randomNumber)) {
                if ((randomNumber + 1).toString().split('')[1] == 0 || (randomNumber + 2).toString().split('')[1] == 0) {
                    secondBarco.push(randomNumber, randomNumber - 1, randomNumber - 2)
                } else {
                    secondBarco.push(randomNumber, randomNumber + 1, randomNumber + 2)
                }
            }
        }

        if (thirdBarco.length < 1) {
            if (!firstBarco.includes(randomNumber) && !firstBarco.includes(randomNumber + 10) && !firstBarco.includes(randomNumber + 20) && !firstBarco.includes(randomNumber + 30) && !firstBarco.includes(randomNumber - 10) && !firstBarco.includes(randomNumber - 20) && !firstBarco.includes(randomNumber - 30) && !secondBarco.includes(randomNumber) && !secondBarco.includes(randomNumber + 10) && !secondBarco.includes(randomNumber + 20) && !secondBarco.includes(randomNumber + 30) && !secondBarco.includes(randomNumber - 10) && !secondBarco.includes(randomNumber - 20) && !secondBarco.includes(randomNumber - 30) && !barco3.includes(randomNumber) && !barco3.includes(randomNumber + 10) && !barco3.includes(randomNumber + 20) && !barco3.includes(randomNumber + 30) && !barco3.includes(randomNumber - 10) && !barco3.includes(randomNumber - 20) && !barco3.includes(randomNumber - 30) && !thirdBarco.includes(randomNumber)) {
                if (randomNumber > 59) {
                    thirdBarco.push(randomNumber, randomNumber - 10, randomNumber - 20, randomNumber - 30)
                } else {
                    thirdBarco.push(randomNumber, randomNumber + 10, randomNumber + 20, randomNumber + 30)
                }
            }
        }



    }
}

window.addEventListener("load", () => {
    createBoard(board1, barco1, barco2, barco4, 1, counter1)
    createBoard(board2, barco5, barco6, barco7, 2, counter2)
})
disparar1.addEventListener("click", () => {
    const valor = parseInt(prompt("Elige el número al que quieres disparar. Ej: 3 Horizontal + 4 Vertical = 34"))
    let realCounter;
    const boxEscogida = document.getElementById(valor)
    if (barco1.includes(valor) || barco2.includes(valor) || barco4.includes(valor)) {
        if (currentPlayer === 1) {
            realContador = counter1++

        } else if (currentPlayer === 2) {
            realContador = counter2++
        }


        boxEscogida.classList.add('found')
        realContador++;
        currentPlayer = 2
        computerTurn()
        if (realContador === 9) {
            mensaje1.classList.remove('hide')
        }
    } else {
        boxEscogida.classList.add('missed')
        currentPlayer = 2
        computerTurn()
    }

})




const boxes1 = document.getElementsByClassName("boxes1")
const boxes2 = document.getElementsByClassName("boxes2")

botonPosiciones1.addEventListener("click", () => {

    Array.from(boxes1).map(box => {
        if (barco1.includes(parseInt(box.id)) || barco2.includes(parseInt(box.id)) || barco4.includes(parseInt(box.id))) {
            if (box.classList.contains("border")) {
                box.classList.remove('border')
            } else {
                box.classList.add('border')
            }

        }
    })
})

botonPosiciones2.addEventListener("click", () => {

    Array.from(boxes2).map(box => {
        if (barco5.includes(parseInt(box.id)) || barco6.includes(parseInt(box.id)) || barco7.includes(parseInt(box.id))) {
            if (box.classList.contains("border")) {
                box.classList.remove('border')
            } else {
                box.classList.add('border')
            }

        }
    })
})