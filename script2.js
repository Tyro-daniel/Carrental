document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Form validation (optional)
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let license = document.getElementById("driversLicense").value.trim();
    let address = document.getElementById("address").value.trim();

    if (!fullName || !email || !password || !phone || !dob || !license || !address) {
        alert("Please fill out all required fields.");
        return;
    }

    // Redirect to the home page after successful form submission
    window.location.href = "index.html";
});
