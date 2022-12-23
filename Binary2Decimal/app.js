let binary = document.querySelector("#binary");
let button = document.querySelector(".btn");
let decimal = document.querySelector(".result")

button.addEventListener("click", (event) => {
    event.preventDefault()
    let decimalized = decimalize(binary.value)
    decimal.innerText = decimalized;
})

let decimalize = (value) => {
    let dec = 0;
    let rem = 0;
    let i = 0;
    while (value >= 1) {
        console.log(value)
        rem = value % 10;
        dec = dec + (rem * Math.pow(2, i));
        value = Math.floor(value / 10);
        i++;
    }

    return dec;
}
