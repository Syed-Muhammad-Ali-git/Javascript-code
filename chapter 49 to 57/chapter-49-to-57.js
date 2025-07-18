const inputField = document.getElementById("inputField");
const btn = document.getElementById("submit_btn");
const pEl = document.getElementById("show_password");

function showPassword() {
  if (inputField.value !== "") {
    pEl.innerText = `Your Password is: ${inputField.value}`;
  }
}

const btn2 = document.getElementById("set_attribute_class");

function setAttribute_class() {
  btn2.setAttribute("class", "btn_styling");
}

function resetAttribute_class() {
  btn2.removeAttribute("class");
}
