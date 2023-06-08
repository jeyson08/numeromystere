let numMin = 1
let numMax = 3
let nbAttempt = 3
let choice = 0
let attempt = 0
let win = false
const answer = document.getElementById("answer")
const button = document.querySelector("button")
const input = document.querySelector("input")
let numMystere = 0

function numMyster() {
    numMystere = Math.floor(Math.random()*numMax + numMin)
    console.log(numMystere)
}

function reset() {
    attempt = 0
    numMyster()
}

function game() {
    numMyster()
    if(choice === numMystere){
        answer.innerHTML = `<p>C'est gagné</p>`
        input.style.display = "none"        
   } if(choice < numMystere) {
        answer.innerHTML = `<p>C'est plus</p>`
   } if(choice > numMystere) {
        answer.innerHTML = `<p>C'est moins</p>`
   } if(attempt === nbAttempt && win === false) {
        answer.innerHTML = `<p>C'est perdu, le numéro mystère était le ${numMystere}</p>`
   }
}

button.addEventListener('click', () => {
    attempt ++
    choice = Number(input.value)
    console.log(typeof choice)
    if(choice < numMin || choice > numMax){
        alert(`votre numéro doit être compris entre ${numMin} et ${numMax}`)
    } else {
        game()
    }
})



// for(i=1; i<=nbAttempt; i++){
//     if(choice === numMystere){
//          console.log("gagné")
//          break
//     } if(choice < numMystere) {
//         console.log("c'est plus")
//     } if(choice > numMystere) {
//         console.log("c'est moins")
//     } if(i === nbAttempt) {
//         console.log("perdu")
//     }
// }

