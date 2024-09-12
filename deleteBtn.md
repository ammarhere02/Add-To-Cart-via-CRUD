//using delete button to delete data from cart
![image](https://github.com/user-attachments/assets/85aea4bf-747e-43cf-9612-02ea7ef4360e)
After hitting the button of display cart the data will be displayed along with the DELETE button

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
