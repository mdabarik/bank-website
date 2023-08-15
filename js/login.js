
// step-1: add click eventlister to login button
const loginButton = document.getElementById("login-submit");
loginButton.addEventListener('click', function () {
    // step2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById("type-email");
    const email = emailField.value;
    
    // step3: get password
    // 3.a: set id on the html element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById("type-password");
    const password = passwordField.value;

    // danger: do not verify email password on the client side
    // step4: verify email and password

    if (email === 'sontan@baap.com' && password === "secret") {
        window.location.href = "./bank.html"
    } else {
        alert("invalid user");
    }

})

