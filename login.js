function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("login-message").textContent = data.message;
        if (data.success) {
            window.location.href = "dashboard.html"; // Redirect to dashboard
        }
    });
}
