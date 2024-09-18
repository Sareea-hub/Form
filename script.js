document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Full Name validation
    const fullName = document.getElementById('fullName');
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        isValid = false;
    } else {
        fullName.classList.remove('is-invalid');
    }

    // Email validation
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Phone Number validation
    const phoneNumber = document.getElementById('phoneNumber');
    if (phoneNumber.value === '123456789' || phoneNumber.value.length !== 10) {
        phoneNumber.classList.add('is-invalid');
        isValid = false;
    } else {
        phoneNumber.classList.remove('is-invalid');
    }

    // Password validation
    const password = document.getElementById('password');
    const fullNameValue = fullName.value.toLowerCase();
    if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value.toLowerCase() === fullNameValue) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}
