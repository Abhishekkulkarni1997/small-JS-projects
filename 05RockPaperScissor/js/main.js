const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

let userCount = document.getElementById("userScoreVal");
let compCount = document.getElementById("compScoreVal");
let finalResult = document.getElementById("final-result");



rock.addEventListener('click', () => {
    let result = "rock"
    const rockResult = document.getElementById('user-result').innerText = result;
    let compResult = randomGenerator();

    while (compResult === "rock") {
        compResult = randomGenerator();
    }

    checkResult(result, compResult);

    const compuResult = document.getElementById('comp-result').innerText = compResult;

})

paper.addEventListener('click', () => {
    let result = "paper"
    const rockResult = document.getElementById('user-result').innerText = result;
    let compResult = randomGenerator();

    while (compResult === "paper") {
        compResult = randomGenerator();
    }

    checkResult(result, compResult);

    const compuResult = document.getElementById('comp-result').innerText = compResult;
})

scissors.addEventListener('click', () => {
    let result = "scissors "
    const rockResult = document.getElementById('user-result').innerText = result;
    let compResult = randomGenerator();

    while (compResult === "scissors ") {
        compResult = randomGenerator();
    }

    checkResult(result, compResult);

    const compuResult = document.getElementById('comp-result').innerText = compResult;
})

function randomGenerator(value) {
    let game = ["rock", "paper", "scissors "];
    let compResult = game[Math.floor(Math.random() * 3)];
    return compResult;
}

let checkResult = (input, generated) => {
    if (input === "rock") {
        if (generated === "paper") {
            compCount.innerText++;
            finalResult.innerText = "Computer";
        }
        else {
            userCount.innerText++;
            finalResult.innerText = "User";
        }
    }
    else if (input === "paper") {
        if (generated === "scissors ") {
            compCount.innerText++;
            finalResult.innerText = "Computer";
        }
        else {
            userCount.innerText++;
            finalResult.innerText = "User";
        }
    }
    else {
        if (generated === "rock") {
            compCount.innerText++;
            finalResult.innerText = "Computer";
        }
        else {
            userCount.innerText++;
            finalResult.innerText = "User";
        }
    }
}