import { apiKey } from "./api.js";

const submitBTN = document.getElementById("submitBTN");

async function newGif() {
  const loadingWheel = document.querySelector(".loadingWheel");
  loadingWheel.style.display = "block";

  const searchResults = document.getElementById("searchBox").value;
  console.log(searchResults);

  const limit = 10;

  try {
    const results = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchResults}&limit=${limit}&offset=0&rating=g&lang=en`
    );

    const data = await results.json();
    console.log(data.data);
  } catch (err) {
    console.error(err);
  } finally {
    loadingWheel.style.display = "none";
  }
}

newGif();
submitBTN.addEventListener("click", newGif);
