const apiKey = "D2zzF5f3FqQS2kO98BqGe2CzzaM9DNmm";

const postBTN = document.getElementById("POST");

async function response() {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: {
        firstName: "paul", 
        lastName: "rudd"
    },
      movies: ["I Love You Man", "Role Models"],
    }),
  });
  const that = await response.json();
  console.log(`You successfully POSTed at ${that.createdAt}`);
  console.log(`Your actor's user ID is ${that.id}`);
  console.log(`Your actor's full name is ${that.name.firstName} ${that.name.lastName}`);
  console.log(`The movies ${that.name.firstName} ${that.name.lastName} has starred in: ${that.movies.map(movie => movie).join(', ')}`);

//   const test = await fetch("https://reqres.in/api/users?page=2");
//   if (!test.ok) {
//     throw new Error(`Response status: ${response.status}`);
//   }
//   const data = await test.json();

//   console.log(data);
};

export {apiKey, response, postBTN};