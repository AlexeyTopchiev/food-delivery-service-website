const $buttonAuth = document.querySelector(".button-auth")
const $modalAuth = document.querySelector(".modal-auth")
const $closeAuth = document.querySelector(".close-auth")
const $buttonOut = document.querySelector(".button-out")
const $userName = document.querySelector(".user-name")
const $logInForm = document.getElementById("logInForm")
const $inputLogin = document.getElementById("login")
const $inputPassword = document.getElementById("password")
const $warningLogin = document.querySelector(".warning-login")
const $warningPassword = document.querySelector(".warning-password")

const login = user => {
  $buttonAuth.style.display = "none"

  $buttonOut.style.display = "block"
  $userName.style.display = "block"

  $userName.textContent = user.login
  $modalAuth.style.display = "none"
}

const logout = () => {
  $buttonAuth.style.display = "flex"

  $buttonOut.style.display = "none"
  $userName.style.display = "none"
  $userName.textContent = ""

  localStorage.removeItem("user")
}

$buttonAuth.addEventListener("click", () => {
  $modalAuth.style.display = "flex"
  $inputLogin.focus()
})

$closeAuth.addEventListener("click", () => {
  $modalAuth.style.display = "none"
})

$buttonOut.addEventListener("click", () => {
  logout()
})

$inputLogin.addEventListener("input", e => {
  if (!e.target.value) {
    $warningLogin.style.display = "block"
  } else {
    $warningLogin.style.display = "none"
  }
})

$inputLogin.addEventListener("change", e => {
  if (!e.target.value) {
    $warningLogin.style.display = "block"
  } else {
    $warningLogin.style.display = "none"
  }
})

$inputPassword.addEventListener("input", e => {
  if (!e.target.value) {
    $warningPassword.style.display = "block"
  } else {
    $warningPassword.style.display = "none"
  }
})

$inputPassword.addEventListener("change", e => {
  if (!e.target.value) {
    $warningPassword.style.display = "block"
  } else {
    $warningPassword.style.display = "none"
  }
})

$logInForm.addEventListener("submit", e => {
  e.preventDefault()

  const user = {
    login: $inputLogin.value,
    password: $inputPassword.value
  }

  if (!user.login && !user.password) {
    $warningLogin.style.display = "block"
    $warningPassword.style.display = "block"
    return
  } else if (!user.login) {
    $warningLogin.style.display = "block"
    return
  } else if (!user.password) {
    $warningPassword.style.display = "block"
    return
  }

  localStorage.setItem("user", JSON.stringify(user))
  login(user)
})

if (localStorage.getItem("user")) {
  login(JSON.parse(localStorage.getItem("user")))
}
