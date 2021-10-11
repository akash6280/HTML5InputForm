const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "Invalid Name";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

const emailRegex= RegExp("^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9](([.+-_][a-zA-Z0-9]+)?)[@][a-zA-Z0-9]+[.]([a-z]{2,3})([.][a-zA-z]{2})?$");
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Invalid Email";
    }
});

const phoneRegex = RegExp('^([1-9][0-9])[ ]{1}[1-9][0-9]{9}$');
const telephone = document.querySelector('#tel');
const telephoneError = document.querySelector('.tel-error');
telephone.addEventListener('input', function() {
    if (phoneRegex.test(telephone.value)) {
        telephoneError.textContent = "";
    } else {
        telephoneError.textContent = "Invalid Telephone number";
    }
});


const passwordRegex = RegExp('^[a-zA-Z0-9@#$%^&-+=()]{8,}$')
const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function() {
    if (passwordRegex.test(password.value)) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "PASSWORD Is Incorrect";
    }
});
