// import { apiKey } from "./api.js";

// const submitBTN = document.getElementById("submitBTN");

// async function newGif() {
//   const loadingWheel = document.querySelector(".loadingWheel");
//   loadingWheel.style.display = "block";

//   const searchResults = document.getElementById("searchBox").value;
//   console.log(searchResults);

//   const gifsContainer = document.querySelector(".gifsContainer");
//   gifsContainer.innerHTML = "";

//   let limit = 50;

//   try {
//     const results = await fetch(
//       `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchResults}&limit=${limit}&offset=0&rating=g&lang=en`
//     );
//     if (!results.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const data = await results.json();
//     const gifs = data.data;

//     let loadedImages = 0;
//     const totalImages = limit;

//     gifs.forEach((gif) => {
//       let gifContainer = document.createElement("div");
//       gifContainer.classList.add("gifContainer");
//       let images = document.createElement("img");
//       images.setAttribute("src", gif.images.downsized_medium.url);
//       console.log(gif);

//       images.onload = () => {
//         loadedImages++;
//         if (loadedImages === totalImages) {
//           gifsContainer.style.display = "grid";
//           loadingWheel.style.display = "none";
//         }
//       };
//       gifContainer.appendChild(images);
//       gifsContainer.appendChild(gifContainer);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// newGif();
// submitBTN.addEventListener("click", newGif);

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

async function response() {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "paul rudd",
      movies: ["I Love You Man", "Role Models"],
    }),
  });
  const that = await response.json()
  console.log(that.createdAt);
  console.log(that.id);
  console.log(that.name);
  console.log(that.movies);

  const test = await fetch("https://reqres.in/api/users?page=2");
  if (!test.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const data = await test.json();

  console.log(data);
}

response()

// async function testing() {
//   try {
//     const test = await fetch("https://reqres.in/api/users");
//     if (!test.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const data = test.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// testing();
