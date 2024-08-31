import { apiKey } from "./api.js";


const submitBTN = document.getElementById("submitBTN");

function newGif () {
    const loadingWheel = document.querySelector(".loadingWheel");
    loadingWheel.style.display = "block";

};



submitBTN.addEventListener("click", newGif);