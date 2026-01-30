const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
     validateForm();

});
// validateForm()
function validateForm() {
    // Name
    if (nameInput.value === "") {
        showError(nameInput, "Name is required");
    } else {
        showSuccess(nameInput);
    }

    // Email
    if (emailInput.value === "") {
        showError(emailInput, "Email is required");
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Email is not valid");
    } else {
        showSuccess(emailInput);
    }

    // Password
    if (passwordInput.value === "") {
        showError(passwordInput, "Password is required");
    } else if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be 6 characters");
    } else {
        showSuccess(passwordInput);
    }
}






function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    formControl.querySelector("small").innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}