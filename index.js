import { apiKey } from "./api.js";

const submitBTN = document.getElementById("submitBTN");

async function newGif() {
  const loadingWheel = document.querySelector(".loadingWheel");
  loadingWheel.style.display = "block";

  const searchResults = document.getElementById("searchBox").value;
  console.log(searchResults);

  const gifsContainer = document.querySelector(".gifsContainer");gifsContainer.innerHTML = "";

  let limit = 10;

  try {
    const results = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchResults}&limit=${limit}&offset=0&rating=g&lang=en`
    );

    const data = await results.json();
    const gifs = data.data;

    gifs.forEach(gif => {
        let gifContainer = document.createElement("div");
        gifContainer.classList.add("gifContainer");
        let images = document.createElement("img");
        images.setAttribute("src", gif.images.downsized_medium.url);
        // let iframe = document.createElement("img");
        console.log(gif);
        // iframe.setAttribute("src", gif.images.downsized_medium.url);
        // iframe.onload = () => {
        //     limit--;
        //     if(limit === 0) {
        //         loadingWheel.style.display = "none";
        //         gifsContainer.style.display = "grid";
        //     };
        // };
        // gifContainer.appendChild(iframe);
        gifContainer.appendChild(images);
        gifsContainer.appendChild(gifContainer);

    });

  } catch (err) {
    console.error(err);
  }
};

newGif();
submitBTN.addEventListener("click", newGif);
