const jokes = document.querySelector("#joke");
joke.innerHTML = ":-)";

const jokebutton = document.querySelector("#jokeBtn");

jokebutton.addEventListener("click", () => {
    fetchjoke();
})

fetchjoke = function () {
    fetch('https://v2.jokeapi.dev/joke/any')
        .then((response) => response.json())
        .then((data) => console.log(data.joke ? jokes.innerText = data.joke : jokes.innerText = data.setup + data.delivery))
}