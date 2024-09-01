const apiKey = "D2zzF5f3FqQS2kO98BqGe2CzzaM9DNmm";

const postBTN = document.getElementById("POST");

async function response() {
  alert(
    "You will now use the POST feature to add an actor and their movies to a database. Press 'OK' to continue."
  );

  let actorFirstName = prompt("Please enter an actor's first name");
  let actorLastName = prompt("Please enter an actor's last name");
  let actorMovies = prompt(
    "Please enter a comma separated list of the actor's movies"
  );
  if (!actorFirstName || !actorLastName || !actorMovies) {
    alert("Request not submitted! Please fill in all fields.");
    return;
  }

  const moviesArray = actorMovies.split(",").map((movie) => movie.trim());

try {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: {
        firstName: actorFirstName,
        lastName: actorLastName,
      },
      movies: moviesArray,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

  const that = await response.json();

  alert(
    `You successfully POSTed at ${that.createdAt}.
    Your actor's full name is ${that.name.firstName} ${that.name.lastName}.
    Your actor's user ID is ${that.id}.
    The movies ${that.name.firstName} ${
      that.name.lastName
    } has starred in: ${that.movies.join(", ")}
    `
  );
} catch (err) {
    alert(`An error has occurred: ${err.message}. Please try again.`);
};
};

export { apiKey, response, postBTN };
