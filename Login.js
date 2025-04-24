const form = document.getElementById("form");

form.addEventListener("submit", function(event) { 
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageElement = document.getElementById("msg");  

    if (name === "" || email === "" || password === "") {  
          messageElement.innerText = "Please fill out all fields!";  
        messageElement.style.color = "red";  
      
    } else {  
        messageElement.style.color = "green";  
        messageElement.innerText = "Your form is successfully submitted!";  

        document.getElementById("name").value = "";  
        document.getElementById("email").value = ""; 
        document.getElementById("password").value = "";
    }
});
function valideEmail(email) {
    let emailPattern= /^[^ ]+\.[a-z]{2,3}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    let passwordPattern= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return passwordPattern.test(password);
}

if(password != validatePassword) {
    messageElement.innerText = "Please enter your password";
    messageElement.style.color = "red";  
}