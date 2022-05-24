const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const sayHi = document.querySelector("#sayHi");

function sendName(event){
  event.preventDefault();
  loginForm.classList.add("hidden");
  const userName = loginInput.value;
  sayHi.innerText = `Welcome ${userName} :)`;
  sayHi.classList.remove("hidden");
}

loginForm.addEventListener("submit", sendName);