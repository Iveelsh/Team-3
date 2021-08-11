let Dropdown_2 = document.getElementById("Dropdowns_2");
let Dropdown = document.getElementById("Dropdowns");

function myfunction() {
  let container = document.getElementById("dropdown-container");
  let btn = document.getElementById("Dropbtn");

  Dropdown.style.visibility = "visible";
  Dropdown_2.style.visibility = "visible";
}
function showfunction() {
  let container = document.getElementById("dropdown-container");

  Dropdown.style.visibility = "hidden";
  Dropdown_2.style.visibility = "hidden";
}
function dropfunction() {
  let container = document.getElementById("dropdown-container");
  let btn = document.getElementById("Dropbtn");

  Dropdown.style.visibility = "visible";
  Dropdown_2.style.visibility = "visible";
}
function dropLeavefunction() {
  let container = document.getElementById("dropdown-container");
  let btn = document.getElementById("Dropbtn");

  Dropdown.style.visibility = "hidden";
  Dropdown_2.style.visibility = "hidden";
}

let Home = document.getElementById("Home");
let Wishlist = document.getElementById("Wishlist");
let Settings = document.getElementById("Settings");
let Tasks = document.getElementById("Tasks");

let ustgah = document.getElementById("Wishlist");

ustgah.addEventListener("onmouseover", () => {
  ustgah.setAttribute("class", "red")
}, false)
ustgah.onmouseover = () => {
  console.log("Aa")
  ustgah.classList.add("red")

}