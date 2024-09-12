let firstin = "";
const uform = document.getElementById("userform");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn1").addEventListener("click", function () {

    document.getElementById("id").addEventListener("input", check);
    document.getElementById("userid").addEventListener("input", check);
    document.getElementById("date").addEventListener("input", check);
  });
