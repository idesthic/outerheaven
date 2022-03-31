function showNav() {
  var nav = document.getElementById("navbar__nav");
  var bar = document.getElementById("bar");
  nav.style.display = "inline";
  bar.style.color = "white";
  bar.style.position = "fixed";
  bar.style.marginTop = "1vh";
}

function hideNav() {
  var bar = document.getElementById("bar");
  var nav = document.getElementById("navbar__nav");
  nav.style.display = "none";
  bar.style.display = "inline";
  bar.style.color = "#919191";
  bar.style.marginTop = "0vh";
}

function showContactForm() {
  var x = document.getElementById("form-wrapper");
  var y = document.getElementById("button--contact");
  var z = document.getElementById("close");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.background = "#e6e6e6";
    y.style.color = "#1a1a1c";
    z.style.display = "inline-block";
  } else {
    x.style.display = "none";
    y.style.background = "#1a1a1c";
    y.style.color = "#e6e6e6";
    z.style.display = "none";
  }
}
