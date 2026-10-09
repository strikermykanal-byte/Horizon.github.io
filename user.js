const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");

    localStorage.setItem("username", usernameInput.value);

    window.location.href = "index.html";
    const email = document.getElementById('email');
    localStorage.setItem('email',email.value);
    const number = document.getElementById('num');
    localStorage.setItem('num',number.value);
    const password = document.getElementById('psw');
    localStorage.setItem('psw',password.value);
});
