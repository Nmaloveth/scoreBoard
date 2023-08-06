let sumEL1 = document.getElementById("1sum-el")
let sumEL2 = document.getElementById("2sum-el")


let homePoints = 0
let guestPoints = 0
let newGame = 0


function add1Points() {
    homePoints += 1
    sumEL1.textContent = homePoints
}

function add2Points() {
    homePoints += 2
    sumEL1.textContent = homePoints
}

function add3Points() {
    homePoints += 3
    sumEL1.textContent = homePoints
}

function add4Points() {
    guestPoints += 1
    sumEL2.textContent = guestPoints
}

function add5Points() {
    guestPoints += 2
    sumEL2.textContent = guestPoints
}

function add6Points() {
    guestPoints += 3
    sumEL2.textContent = guestPoints
}

function startGame() {
 newGame += 0
 sumEL1.textContent = newGame   
}