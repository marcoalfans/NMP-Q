const chk = document.getElementById("chk");
const html = document.querySelector("html");

chk.addEventListener("click", function () {
  //check color theme saat ini, lalu ubah
  if (html.dataset.colorMode === "dark") {
    html.dataset.colorMode = "light";
  } else {
    html.dataset.colorMode = "dark";
  }
});

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

//logic
const input = document.getElementById("name-input");
const placeholder = "Insert your name";
let charIndex = 0;

function typePlaceholder() {
  if (charIndex < placeholder.length) {
    input.placeholder = placeholder.slice(0, charIndex + 1);
    charIndex++;
    setTimeout(typePlaceholder, 100);
  }
}

window.onload = function () {
  input.placeholder = "";
  setTimeout(typePlaceholder, 1000);
};
