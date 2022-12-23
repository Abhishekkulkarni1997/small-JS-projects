const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");
const generate = document.getElementById("generate");
const result = document.getElementById("result");


result.addEventListener('click', () => {
    console.log(clicked)
})

generate.addEventListener('click', () => {
    generatePassword();
})

function generatePassword(lower, length) {
    let password = lower(length);
    return password;
}

function lower() {
    if (lowercase.checked) {
        let lowercased = "";
        let characters = 'qwertyuiopasdfghjklzxcvbnm';
        for (i = 0; i < length; i++) {
            lower += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return lowercased;
    }
    else {
        return "";
    }
}