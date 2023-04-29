const signupForm = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

function handleSignup(event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!name || !email || !password || !confirmPassword) {
    errorMessage.textContent = "Error: All the fields are mandatory";
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "Error: Passwords do not match";
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  nameDisplay.textContent = `Name: ${name}`;
  emailDisplay.textContent = `Email: ${email}`;

  signupForm.reset();
  errorMessage.style.display = "none";
  successMessage.textContent = "Successfully Signed Up!";
  successMessage.style.display = "block";

  // Redirect to profile page after successful signup
  window.location.href="Profile.html"
}

signupForm.addEventListener("submit", handleSignup);
