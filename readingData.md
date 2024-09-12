 //reading the data
![image](https://github.com/user-attachments/assets/ca7b5ed2-47f5-4262-86b7-a69aea537dcb)
reading the data using GET API , from the database of my fake API which I am using

@ammarhere02	Reply…

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
