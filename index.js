// document.addEventListener("DOMContentLoaded", function () {
//     const signupForm = document.getElementById("signup-form");
//     const loginForm = document.getElementById("login-form");
//     const logoutBtn = document.getElementById("logout-btn");
  
//     signupForm.addEventListener("submit", function (event) {
//       event.preventDefault();
  
//       // Get email and password from the form
//       const email = document.getElementById("signup-email").value;
//       const password = document.getElementById("signup-password").value;
  
//       // Implement your signup/authentication logic here
//       // For simplicity, we'll just log the details for now
//       console.log("Signup - Email:", email, "Password:", password);
  
//       // Reset the form
//       signupForm.reset();
//     });
  
//     loginForm.addEventListener("submit", function (event) {
//       event.preventDefault();
  
//       // Get email and password from the form
//       const email = document.getElementById("login-email").value;
//       const password = document.getElementById("login-password").value;
  
//       // Implement your login/authentication logic here
//       // For simplicity, we'll just log the details for now
//       console.log("Login - Email:", email, "Password:", password);
  
//       // Show the logout button
//       logoutBtn.classList.remove("hidden");
  
//       // Reset the form
//       loginForm.reset();
//     });
  
//     logoutBtn.addEventListener("click", function () {
//       // Implement your logout logic here
//       // For simplicity, we'll just log a message for now
//       console.log("Logout");
  
//       // Hide the logout button
//       logoutBtn.classList.add("hidden");
//     });
//   });
  