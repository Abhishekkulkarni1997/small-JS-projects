const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    let copyText = resultEl.textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
})

generateEl.addEventListener('click', () => {
    let length = lengthEl.value;
    generatePassword(randomFunc.lower(length), randomFunc.upper(length), randomFunc.number(length), randomFunc.symbol(length), length);
})

function generatePassword(lower, upper, number, symbol, length) {
    let password = lower + upper + number + symbol;
    let pass = '';
    for (let i = 0; i < length; i++) {
        pass += password.charAt(Math.floor(Math.random() *
            password.length));
    }
    resultEl.innerText = pass;
    console.log(pass);
}

function getRandomLower(length) {
    if (lowercaseEl.checked) {
        let lower = '';
        let characters = 'qwertyuiopasdfghjklzxcvbnm';
        for (let i = 0; i < length; i++) {
            lower += characters.charAt(Math.floor(Math.random() *
                characters.length));
        }
        return lower;
    }
    else {
        return "";
    }


}

function getRandomUpper(length) {
    if (uppercaseEl.checked) {
        let upper = '';
        let characters = 'qwertyuiopasdfghjklzxcvbnm';
        for (let i = 0; i < length; i++) {
            upper += characters.charAt(Math.floor(Math.random() *
                characters.length));
        }
        return upper.toUpperCase();
    }
    else {
        return "";
    }

}

function getRandomNumber(length) {
    if (numbersEl.checked) {
        let number = '';
        let numbers = '0123456789';
        for (let i = 0; i < length; i++) {
            number += numbers.charAt(Math.floor(Math.random() *
                numbers.length));
        }
        return number;
    }

    else {
        return "";
    }

}

function getRandomSymbol(length) {
    if (symbolsEl.checked) {
        let symbol = '';
        let symbols = '~!@#$%^&*()_+{}|:"<>?`[];",./';
        for (let i = 0; i < length; i++) {
            symbol += symbols.charAt(Math.floor(Math.random() *
                symbols.length));
        }
        return symbol;
    }

    else {
        return "";
    }
}