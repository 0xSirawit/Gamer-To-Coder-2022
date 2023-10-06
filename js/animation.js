let bg = document.getElementById("bg");
let ground = document.getElementById("ground");
let nav = document.getElementById("nav");
let icon = document.getElementById("icon");
let navul = document.getElementById("navul");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  bg.style.top = value * 0.5 + "px";
  ground.style.top = value * 0 + "px";
  console.log(value);
  if (value > 0) {
    nav.style.background = "rgba(34, 34, 34, 0.98)";
    nav.style.boxShadow = "0 0 4px rgb(0 0 0 / 10%);";
    nav.style.padding = "14px 8%";
    icon.style.top = "22px";
  } else {
    if (icon.name === "open") {
      nav.style.background = "rgba(34, 34, 34, 0.98)";
    } else {
      nav.style.background = "transparent";
    }
    nav.style.padding = "20px 8%";
    nav.style.boxShadow = "none";
    icon.style.top = "26px";
  }
});

function menu() {
  if (icon.name === "close") {
    navul.style.position = "absolute";
    navul.style.left = "0%";
    icon.name = "open";
    nav.style.background = "rgba(34, 34, 34, 0.98)";
  } else {
    navul.style.position = "absolute";
    navul.style.left = "100%";
    icon.name = "close";
    if (value <= 0) {
      nav.style.background = "transparent";
    }
  }
}

window.addEventListener("resize", function () {
  if (screen.width > 1100) {
    navul.style.position = "static";
  } else {
    navul.style.position = "absolute";
    nav.style.background = "rgba(34, 34, 34, 0.98)";
  }
});
