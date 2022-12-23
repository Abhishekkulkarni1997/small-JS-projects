const button = document.querySelector("#button");

const bgc = document.querySelector("#canvas");

button.addEventListener("click", (event) => {

    let randomhex = Math.floor(Math.random() * 12345678).toString(16);
    bgc.style.backgroundColor = "#" + randomhex;
})