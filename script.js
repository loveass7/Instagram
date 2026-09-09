// ===============================
// PREMIUM LINK VAULT
// Change these credentials here.
// NOTE: This is a front-end demo login.
// For real security, use server-side authentication.
// ===============================
const LOGIN_USERNAME = "admin";
const LOGIN_PASSWORD = "1234";

const loginScreen = document.getElementById("loginScreen");
const app = document.getElementById("app");
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginError = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");

function showApp() {
  loginScreen.classList.add("hidden");
  app.classList.remove("hidden");
}

function showLogin() {
  app.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  password.value = "";
  username.focus();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    username.value.trim() === LOGIN_USERNAME &&
    password.value === LOGIN_PASSWORD
  ) {
    sessionStorage.setItem("linkVaultLoggedIn", "yes");
    loginError.textContent = "";
    showApp();
  } else {
    loginError.textContent = "Incorrect username or password.";
    password.value = "";
    password.focus();
  }
});

logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("linkVaultLoggedIn");
  showLogin();
});

if (sessionStorage.getItem("linkVaultLoggedIn") === "yes") {
  showApp();
} else {
  showLogin();
}
