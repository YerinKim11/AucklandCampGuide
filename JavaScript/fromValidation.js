function ValidateForm() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
    document.getElementById("inquiryError").innerText = "";

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let inquiry = document.getElementById("inquiry").value;

    let valid = true;

    // Validation for full name
    if (name.length < 5) {
        document.getElementById("nameError").innerText = "The name should be more than 5 characters";
        document.getElementById("name").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("name").classList.add("is-valid");
    }

    // Validation for phone
    let phonePattern = /^[0-9]{2}-[0-9]{8}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Format: 00-12345678";
        document.getElementById("phone").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("phone").classList.add("is-valid");
    }

    // Validation for email
    let reEmail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!reEmail.test(email)) {
        document.getElementById("emailError").innerText = "Email format is not correct.";
        document.getElementById("email").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("email").classList.add("is-valid");
    }

    // Validation for inquiry
    if (inquiry === "") {
        document.getElementById("inquiryError").innerText = "Please select an inquiry type.";
        document.getElementById("inquiry").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("inquiry").classList.add("is-valid");
    }

    // Validation for message
    let wordCount = 1;

    if (message === "") {
        wordCount = 0;
    } else {
        wordCount = message.trim().split(" ").length;
    }

    if (wordCount < 20) {
        document.getElementById("messageError").innerText = "Please provide at least 20 words";
        document.getElementById("message").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("message").classList.add("is-valid");
    }

    return valid;
}
