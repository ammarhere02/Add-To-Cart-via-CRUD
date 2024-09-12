After hitting submit button the the API will send request and data will be displayed in Add section.
![image](https://github.com/user-attachments/assets/58901fcf-3b01-4610-8ecf-6873d77b5488)

 
 
 document.getElementById("subbtn").addEventListener("click", function (event) {
After hitting submit button the the API will send request and data will be displayed in Add section.
image

@ammarhere02	Reply…
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
