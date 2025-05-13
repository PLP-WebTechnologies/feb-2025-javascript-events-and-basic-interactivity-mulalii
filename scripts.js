const btn = document.querySelector("#btn1");
const text = document.getElementById("btn-text");
const div = document.querySelector("#buttonsection");

btn.addEventListener("click", function() {
  document.body.style.backgroundColor = "#FF7E00";
});

const btn2 = document.getElementById("btn2").addEventListener("mouseover", function() {
  text.innerText = "Hi There";
});

document.addEventListener("keydown", function(event) {
  if (event.key === "r" || event.key === "R") {
    window.location.href="https://google.com";
  }
});

document.addEventListener("mousedown", function(event) {
  if (event.button === 2) {
    div.innerHTML = "<h1>fuck you nigga!</h1>";
  }
});