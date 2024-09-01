import * as apiStuffs from "./api.js";
import { firstload } from "./load.js";

const submitBTN = document.getElementById("submitBTN");
const submitForm = document.getElementById("searchBox");

async function newGif() {
  const loadingWheel = document.querySelector(".loadingWheel");
  loadingWheel.style.display = "block";

  const searchResults = document.getElementById("searchBox").value;

  const container = document.querySelector(".container");
  container.innerHTML = "";

  container.style.display = "grid";

  const sorry = document.querySelector(".sorry");
  sorry.style.display = "none";

  let limit = 50;

  try {
    const results = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiStuffs.apiKey}&q=${searchResults}&limit=${limit}&offset=0&rating=g&lang=en`
    );
    if (!results.ok) {
      throw new Error(`Response status: ${results.status}`);
    }

    const data = await results.json();
    const gifs = data.data;

    if (gifs.length === 0) {
      document.body.style.overflow = "hidden";
      loadingWheel.style.display = "none";
      sorry.style.display = "block";
      sorry.innerHTML = `<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHh5bW5lbDYwYmZpeXNrb3d5NjA4NHlsa3g0cnVuemJ3cHp6cmpmeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nd4XEur3eJxLqg32DR/giphy.webp" alt="No results image">
                <div class="sorryMessage">Oh no! There are no ${searchResults} gifs, please try a different search.</div>`
    }

    let loadedImages = 0;
    const totalImages = gifs.length;

    gifs.forEach((gif) => {
      let gifContainer = document.createElement("div");
      gifContainer.classList.add("gifContainer");
      let images = document.createElement("img");
      images.setAttribute("src", gif.images.downsized_medium.url);

      images.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          loadingWheel.style.display = "none";
        }
      };
      gifContainer.appendChild(images);
      container.appendChild(gifContainer);
    });
  } catch (err) {
    console.error(err);
    loadingWheel.style.display = "none";
    sorry.style.display = "block";
    sorry.innerHTML = err;
  }
};

window.addEventListener("load", firstload);
submitBTN.addEventListener("click", newGif);
submitForm.addEventListener("keydown", function(event) {
  if(event.key ==="Enter"){
    newGif();
  }
});
apiStuffs.postBTN.addEventListener("click", apiStuffs.response);