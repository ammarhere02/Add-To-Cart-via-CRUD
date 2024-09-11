let firstin = "";
const uform = document.getElementById("userform");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn1").addEventListener("click", function () {
    console.log("button clicked");
    document.querySelector("form").style.display = "block";

    document.getElementById("id").addEventListener("input", check);
    document.getElementById("userid").addEventListener("input", check);
    document.getElementById("date").addEventListener("input", check);
  });

  function check() {
    document.getElementById("id").value;
    document.getElementById("userid").value;
    document.getElementById("date").value;
  }
  // product-id save button in (if-else) state
  document.getElementById("subbtn").addEventListener("click", function (event) {
    event.preventDefault();
    firstin = document.getElementById("id").value;

    if (firstin === "") {
      alert("Please fill all the fields");
    } else {
      alert("value is displayed");
      console.log("inside else-statement");
    }
  });
});

//creating input
const id = document.getElementById("id").value;
// Creating the data object
const data = {
  id: id,
};

//hitting API with user response as input and showing it to front-end
document.getElementById("subbtn").addEventListener("click", function (event) {
  event.preventDefault();

  console.log("before fetch");
  // Fetch POST request
  fetch("https://fakestoreapi.com/products", {
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

//using delete button to delete data from cart
const delbtn = document.getElementById("deletebtn");
document.getElementById("btn2").addEventListener("click", function () {
  if (delbtn.style.display === "none" || delbtn.style.display === "") {
    delbtn.style.display = "block";
  }

  document.getElementById("deletebtn").addEventListener("click", function () {
    fetch("https://fakestoreapi.com/carts", {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response.json());
        alert("Item deleted successfully");
      })

      .catch((error) => console.log("oops", error));
  });

  //reading the data

  console.log("outside fetch");
  fetch("https://fakestoreapi.com/carts", {
    method: "get",
  })
    .then((response) => response.json()) //important to convert the response to json
    //appending a child to parent
    .then((response) => {
      console.log("displaying data", response);

      const cartitem = document.getElementById("container-1");
      cartitem.innerHTML = "";
      response.map((item) => {
        const newitem = document.createElement("li");

        console.log(item, "item");

        newitem.innerHTML += `<div>
            <h3> USER-ID :</h3 <H5>${item.userId}</h5>
              <h3> DATE : </h3 <H5>${item.date}</h5>

        </div>
    <button id="deletebtn">DELETE</button>`;

        cartitem.append(newitem);
      });
    });
});

//storing user information in local storage

document.getElementById("usub").addEventListener("click", function (eve) {
  eve.preventDefault();

  const input1 = document.getElementById("uname").value;
  const input2 = document.getElementById("uphone").value;
  const input3 = document.getElementById("uemail").value;
  if (input1 === "" || input2 === "" || input3 === "") {
    alert("Please fill all the blanks");
  } else {
    const arr = JSON.stringify({ input1, input2, input3 }); // converting the data to string so that it access local storage
    console.log(arr);
    console.log("We got your data");

    localStorage.setItem("user", arr);

    const dataa = localStorage.getItem("user");

    const parse = JSON.parse(dataa); //storing the parsed data which is saved in local storage

    alert("User input data is stored");
  }
});
