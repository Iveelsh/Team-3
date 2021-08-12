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
  document.getElementById("Ustgah").style.color = "red";
  document.getElementById("Ustgah_2").style.color = "red";
}

ustgah.onmouseleave = () => {
  document.getElementById("Ustgah").style.color = "white";
  document.getElementById("Ustgah_2").style.color = "white";
}

let zasah = document.getElementsByClassName("Zasah")[0];

zasah.onmouseover = () => {
  document.getElementById("Zasah").style.color = "black";
  document.getElementById("Zasah_2").style.color = "black";
}

zasah.onmouseleave = () => {
  document.getElementById("Zasah").style.color = "white";
  document.getElementById("Zasah_2").style.color = "white";
}

let x_cont = document.getElementById("X_container");
let y_cont = document.getElementById("Y_container");

x_cont.onmouseover = () => {
  document.getElementById("X_container").style.backgroundColor = "#172662";
  document.getElementById("circle").style.backgroundColor = "#172662";
  document.getElementById("X").style.color = "white";
}

x_cont.onmouseleave = () => {
  document.getElementById("X_container").style.backgroundColor = "white";
  document.getElementById("circle").style.backgroundColor = "white";
  document.getElementById("X").style.color = "#172662";
}

y_cont.onmouseover = () => {
  document.getElementById("Y_container").style.backgroundColor = "#172662";
  document.getElementById("circle_2").style.backgroundColor = "#172662";
  document.getElementById("Y").style.color = "white";
}

y_cont.onmouseleave = () => {
  document.getElementById("Y_container").style.backgroundColor = "white";
  document.getElementById("circle_2").style.backgroundColor = "white";
  document.getElementById("Y").style.color = "#172662";
}