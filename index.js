import { apiKey } from "./api.js";

const submitBTN = document.getElementById("submitBTN");

async function newGif() {
  const loadingWheel = document.querySelector(".loadingWheel");
  loadingWheel.style.display = "block";

  const searchResults = document.getElementById("searchBox").value;
  console.log(searchResults);

  const gifsContainer = document.querySelector(".gifsContainer");
  gifsContainer.innerHTML = "";

  let limit = 50;

  try {
    const results = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchResults}&limit=${limit}&offset=0&rating=g&lang=en`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await results.json();
    const gifs = data.data;

    let loadedImages = 0;
    const totalImages = limit;

    gifs.forEach((gif) => {
      let gifContainer = document.createElement("div");
      gifContainer.classList.add("gifContainer");
      let images = document.createElement("img");
      images.setAttribute("src", gif.images.downsized_medium.url);
      console.log(gif);

      images.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          gifsContainer.style.display = "grid";
          loadingWheel.style.display = "none";
        }
      };
      gifContainer.appendChild(images);
      gifsContainer.appendChild(gifContainer);
    });
  } catch (err) {
    console.error(err);
  }
}

newGif();
submitBTN.addEventListener("click", newGif);

// let iframe = document.createElement("img");
// iframe.setAttribute("src", gif.images.downsized_medium.url);
// iframe.onload = () => {
//     limit--;
//     if(limit === 0) {
//         loadingWheel.style.display = "none";
//         gifsContainer.style.display = "grid";
//     };
// };
// gifContainer.appendChild(iframe);
