
   
  
   function redirectToAnotherPage(){ 
      let emailInput = document.getElementById("email");
      let passwordInput = document.getElementById("password");
      
      let enteredEmail=emailInput.value
      let enteredPassword=passwordInput.value

      localStorage.setItem("Email", enteredEmail)
      localStorage.setItem("Password", enteredPassword)

 

      alert('Signup successful! You can now login.');
      window.location.href = "login.html";
    return false
   }