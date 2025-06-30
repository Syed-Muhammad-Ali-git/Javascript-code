// chapter 45: Events: links

function popup(message) {
  alert(message);
}

// chapter 46: Events: buttons

// program 1 bulb on off

var h1El = document.getElementById("h11");
var bulbEl = document.getElementById("bulb");
var btnEl = document.getElementById("btn");
var isOpen = false;
var h1 = document.getElementById("h1");

function onClick() {
  if (isOpen) {
    isOpen = false;
    bulbEl.src = "./images/bulb-off.jfif";
    btnEl.innerText = "Button On";
    h1El.innerText = "Bulb is Off";
  } else {
    isOpen = true;
    bulbEl.src = "./images/bulb-on.jfif";
    btnEl.innerText = "Button Off";
    h1El.innerText = "Bulb is On";
  }
}

// chapter 47: Events: mouse

function mouseAlert() {
  alert("Mouse is over the on bulb image");
}
function mouseAlertOut() {
  alert("Mouse is out of the image");
}

// chapter 48: Events: fields
