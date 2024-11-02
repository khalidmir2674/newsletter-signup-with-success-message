let successBtn = document.querySelector("#successBtn");
let dismissBtn = document.querySelector("#dismissBtn");
let submitContainer = document.querySelector(".container");
let successContainer = document.querySelector(".container2");

let inputEmail = document.querySelector("#inputEmail");
let ErrorMsg = document.querySelector(".error");
let emailEntered = document.querySelector(".emailEntered");


successBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(validate(inputEmail.value)) {
        ErrorMsg.classList.add("invalid");
        emailEntered.innerHTML = inputEmail.value;
        submitContainer.classList.add("hide");
        successContainer.classList.remove("hide");

    } else {
        ErrorMsg.classList.remove("invalid");
    }
    
    
    
});

dismissBtn.addEventListener("click", function(e){
    e.preventDefault();
    inputEmail.value = '';
    submitContainer.classList.remove("hide");
    successContainer.classList.add("hide");
});

function validate (email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
