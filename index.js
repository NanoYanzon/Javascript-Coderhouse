localStorage.setItem("username", "profe");
localStorage.setItem("password", "1234");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");

// función para verificar el inicio de sesión
function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // verifica si el usuario y la contraseña son correctos
  if (
    username === localStorage.getItem("username") &&
    password === localStorage.getItem("password")
  ) {
    loginMessage.textContent = "Inicio de sesión correcto";
    window.location.href = "portal.html";
  } else {
    loginMessage.textContent = "Usuario o contraseña incorrectos";
  }
}

// agrega el event listener al botón de inicio de sesión
loginButton.addEventListener("click", checkLogin);
