import { apiKey } from "./api.js";

const submitBTN = document.getElementById("submitBTN");

async function newGif() {
  const loadingWheel = document.querySelector(".loadingWheel");
  loadingWheel.style.display = "block";

  const searchResults = document.getElementById("searchBox").value;

  const gifsContainer = document.querySelector(".gifsContainer");
  gifsContainer.innerHTML = "";

  const sorry = document.querySelector(".sorry");
  sorry.style.display = "none";

  let limit = 10;

  try {
    const results = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchResults}&limit=${limit}&offset=0&rating=g&lang=en`
    );
    if (!results.ok) {
      throw new Error(`Response status: ${results.status}`);
    }

    const data = await results.json();
    const gifs = data.data;

    if (gifs.length === 0) {
      loadingWheel.style.display = "none";
      sorry.style.display = "block";
    }

    let loadedImages = 0;
    const totalImages = gifs.length;

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
          gifsContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
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

function firstload() {
  const gifsContainer = document.querySelector(".gifsContainer");
  gifsContainer.innerHTML = "";
  let gifContainer = document.createElement("div");
  gifContainer.classList.add("gifContainer");
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJvcHV1cXphemxtOGNjYmVva2h0Z2NrYnN6bzRrN2VhaTF4MmZqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CnhXn5Z9OUCYTzBAVr/giphy.webp"
  );

  gifsContainer.style.display = "flex";
  gifsContainer.style.justifyContent = "center";
  gifsContainer.style.alignItems = "flex-start";
  gifsContainer.style.height = "100vh";

  gifContainer.appendChild(image);
  gifsContainer.appendChild(gifContainer);
}

submitBTN.addEventListener("click", newGif);
window.addEventListener("load", newGif);

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

// async function response() {
//   const response = await fetch("https://reqres.in/api/users?page=2", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "paul rudd",
//       movies: ["I Love You Man", "Role Models"],
//     }),
//   });
//   const that = await response.json();
//   console.log(that.createdAt);
//   console.log(that.id);
//   console.log(that.name);
//   console.log(that.movies);

//   const test = await fetch("https://reqres.in/api/users?page=2");
//   if (!test.ok) {
//     throw new Error(`Response status: ${response.status}`);
//   }
//   const data = await test.json();

//   console.log(data);
// };

// response();
