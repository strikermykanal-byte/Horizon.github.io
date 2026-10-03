const Username = document.getElementById("user");
const Number = document.getElementById('num');
const email = document.getElementById('email');
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
if(!email.value){
    alert('Email is required')
    return;
}
if(!Number.value){
    alert('Email is required')
    return;
}
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Email must be a valid email address.');
        return;
    }
    if(!Username.value){
        alert('Username is required')
    }
    alert('Sent successfully');

    window.location.href = 'index.html';
})
