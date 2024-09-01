const apiKey = "D2zzF5f3FqQS2kO98BqGe2CzzaM9DNmm";

const postBTN = document.getElementById("POST");

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
  const that = await response.json();
  console.log(that.createdAt);
  console.log(that.id);
  console.log(that.name);
  console.log(that.movies);

//   const test = await fetch("https://reqres.in/api/users?page=2");
//   if (!test.ok) {
//     throw new Error(`Response status: ${response.status}`);
//   }
//   const data = await test.json();

//   console.log(data);
};

export {apiKey, response, postBTN};