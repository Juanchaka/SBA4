let intialLoadDone = false;

function firstload() {
  if (intialLoadDone) return;

  const container = document.querySelector(".container");
  container.innerHTML = "";
  let gifContainer = document.createElement("div");
  gifContainer.classList.add("gifContainer");
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJvcHV1cXphemxtOGNjYmVva2h0Z2NrYnN6bzRrN2VhaTF4MmZqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CnhXn5Z9OUCYTzBAVr/giphy.webp"
  );

  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "flex-start";
  container.style.height = "100vh";

  gifContainer.appendChild(image);
  container.appendChild(gifContainer);

  intialLoadDone = true;
};

export {firstload, intialLoadDone};