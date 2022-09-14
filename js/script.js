function out(any) { console.log(any)}
out("ready to guess")

const lblMessage = document.querySelector(".message");
out(lblMessage);
const lblNumber = document.querySelector(".number");
out(lblNumber);
const lblScore = document.querySelector(".score");
out(lblScore);
const inpGuess = document.querySelector(".guess");
out(inpGuess);

function checkNumber(btn) {
    out("check number")
    let guess = inpGuess.value;
    out("Guess= " + guess)
}

let secretNumber = 0;
function getSecretNumber(btn) {
    out("start secret")
    secretNumber = Math.trunc(Math.random()*20) + 1;
    out("Secret number =" + secretNumber)
}

const pbCheck = document.querySelector(".check")
pbCheck.addEventListener('click', checkNumber)
const pbAgain = document.querySelector(".again")
pbAgain.addEventListener('click', getSecretNumber)
