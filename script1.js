document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let emailOrUsername = document.getElementById("emailOrUsername").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Check if fields are empty
    if (emailOrUsername === "" || password === "") {
        errorMessage.textContent = "All fields are required!";
        return;
    }

    // Simulated authentication (Replace with real backend call later)
    if (emailOrUsername === "admin" && password === "12345") {
        alert("Login Successful! Redirecting...");
        window.location.href = "index.html"; // Redirect to the index page on successful login
    } else {
        errorMessage.textContent = "Invalid Email/Username or Password!";
    }
});