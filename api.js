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

  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: {
        firstName: `${actorFirstName}`,
        lastName: `${actorLastName}`,
      },
      movies: [`${actorMovies}`],
    }),
  });
  const that = await response.json();
  alert(
    `You successfully POSTed at ${that.createdAt}.
    Your actor's full name is ${that.name.firstName} ${that.name.lastName}.
    Your actor's user ID is ${that.id}.
    The movies ${that.name.firstName} ${
      that.name.lastName
    } has starred in: ${that.movies.map((movie) => movie).join(", ")}
    `
  );
//   console.log(`You successfully POSTed at ${that.createdAt}`);
//   console.log(`Your actor's user ID is ${that.id}`);
//   console.log(
//     `Your actor's full name is ${that.name.firstName} ${that.name.lastName}`
//   );
//   console.log(
//     `The movies ${that.name.firstName} ${
//       that.name.lastName
//     } has starred in: ${that.movies.map((movie) => movie).join(", ")}`
//   );

  //   const test = await fetch("https://reqres.in/api/users?page=2");
  //   if (!test.ok) {
  //     throw new Error(`Response status: ${response.status}`);
  //   }
  //   const data = await test.json();

  //   console.log(data);
}

export { apiKey, response, postBTN };
