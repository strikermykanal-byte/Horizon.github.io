const Username = document.getElementById("user");
const Number = document.getElementById("num");
const email = document.getElementById("email");
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {

    if (!email.value) {
        event.preventDefault();
        alert("Email is required");
        return;
    }

    if (!Number.value) {
        event.preventDefault();
        alert("Phone number is required");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        event.preventDefault();
        alert("Email must be a valid email address.");
        return;
    }

    if (!Username.value) {
        event.preventDefault();
        alert("Username is required");
        return;
    }
});