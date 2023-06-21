"use strict";
const chuckxd = document.querySelector(".chuckxd");
const p = document.querySelector(".p");
chuckxd.onclick = () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(json => { p.textContent = json.value; });
};
