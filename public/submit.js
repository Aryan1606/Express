// // import axios from "axios";

// // console.log("bruuu");
// document.getElementById("formm").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const location = document.getElementById("location").value;
//   const newUser = {
//     name,
//     location,
//   };
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const body = JSON.stringify(newUser);

//     const op = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     };
//     // let response = await
//     fetch("/api", op).then((res) => {
//       console.log(res);
//     });
//     // let data2 = await response.json();
//     // console.log(data2);
//     // const res = await axios.post("/api/users", body, config);
//     // console.log("Done2");

//     //Done
//     // let reponse = await fetch("/api/show", op);
//     // console.log(res.data);
//   } catch (error) {
//     console.log("hey");

//     console.error(error.message);
//   }
// });
