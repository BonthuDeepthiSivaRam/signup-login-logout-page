

function anotherPage(){
    var storedEmail = localStorage.getItem('Email');
var storedPassword= localStorage.getItem('Password');
   
    // Get email and password from the form
    let emailInput = document.getElementById("loginEmail");
    let passwordInput = document.getElementById("loginPassword");
    let enteredEmailId=emailInput.value
    let enteredPasswords=passwordInput.value
    console.log('Entered Email:', enteredEmailId);
    console.log('Entered Password:', enteredPasswords);
    console.log('Stored Email:', storedEmail);
    console.log('Stored Password:', storedPassword);
   
    if (enteredEmailId === storedEmail && enteredPasswords === storedPassword) {
        alert('Login successful!');
        localStorage.setItem("Email", enteredEmailId);
    localStorage.setItem("Password", enteredPasswords);
   window.location.href="logout.html"
    } else {
        alert('Invalid username or password. Please try again.');
    }
    return false
   
}
  

