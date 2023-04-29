// Retrieve user details from local storage
const user = JSON.parse(localStorage.getItem("user"));

// If user is not logged in, redirect to signup page
if (!user || !user.accessToken) {
  window.location.href = "signup.html";
}

// Display user details on the page
const userDetailsDiv = document.getElementById("user-details");
userDetailsDiv.innerHTML = `
  <p>Full Name: ${user.fullName}</p>
  <p>Email: ${user.email}</p>
  <p>Password: ${user.password}</p>
`;

// Logout button event listener
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
  // Clear user details from local storage and redirect to signup page
  localStorage.removeItem("user");
  window.location.href = "signup.html";
});
