function checkPassword() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm_password");
    let error_msg = document.getElementById("error_msg");
    if (password.value != confirmPassword.value) {
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
        error_msg.innerHTML = "*Passwords do not match";
        let submitButton = document.getElementById("button");
        // submitButton.ariaDisabled = true;
    }
    else {
        password.style.border = "2px solid green";
        confirmPassword.style.border = "2px solid green";
        error_msg.innerHTML = "";
    }
 
}

// function checkInput() {
//     let password = document.getElementById("password");
//     let confirmPassword = document.getElementById("confirm_password");
//     let firstname = document.getElementById("first_tname");
//     let lastname = document.getElementById("last_name");
//     let email = document.getElementById("email");
//     let phone = document.getElementById("phone_number");
//     if (password.value == "" || confirmPassword.value == "" || firstname.value == "" || lastname.value == "" || email.value == "" || phone.value == "") {
//         let submitButton = document.getElementById("button");
//         submitButton.style.backgroundColor = "red";
//     }

// }