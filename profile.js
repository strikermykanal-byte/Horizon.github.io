
const user = localStorage.getItem('username');
const email = localStorage.getItem('email');
const number = localStorage.getItem('num');

const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const numElement = document.getElementById('num');

const password = document.getElementById('psw');
const passwordElement = document.getElementById('psw');

if (usernameElement) {
    usernameElement.textContent = user || 'Not specified';
}

if (emailElement) {
    emailElement.textContent = email || 'Not specified';
}

if (numElement) {
    numElement.textContent = number || 'Not specified';
}
if(password){
    passwordElement.textContent = password|| 'Not specified';
}
