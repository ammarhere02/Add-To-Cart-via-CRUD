//hitting API with user response as input and showing it to front-end

document.getElementById("subbtn").addEventListener("click", function (event) {
  event.preventDefault();

  console.log("before fetch");
  // Fetch POST request
  fetch("https://fakestoreapi.com/products", {
using Post fetch API method to read and post the user data
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("success", data);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("after fetch");
  const listadd = document.getElementById("container-2");

  listadd.innerHTML = "";

  const newitem = document.createElement("li");

  newitem.innerHTML += `<div>
<h3>${data.id}</h3>  </div>`;

  listadd.appendChild(newitem);
});
