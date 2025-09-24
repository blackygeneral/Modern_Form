const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#regester");
const loginform = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    loginform.style.left = "50%";
    registerForm.style.left = "-50%";
    loginform.style.opacity = 1;
    registerForm.style.opacity = 0;
});

registerBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";
    loginform.style.left = "150%";
    registerForm.style.left = "50%";
    loginform.style.opacity = 0;
    registerForm.style.opacity = 1;
});


const logInputField= document.getElementById('logPassword')

const loginInputIcon = document.getElementById('log-pass-icon')


const regInputField= document.getElementById('regInput')

const reginInputIcon = document.getElementById('reg-pass-icon')


function myLogPassword(){
    if(logInputField.type === "password"){
        logInputField.type = "text"
    loginInputIcon.name = "eye-off-outline"
    loginInputIcon.style.cursor = "pointer"}
    else{
        logInputField.type ="password"
        loginInputIcon.name = "eye-outline"
        loginInputIcon.style.cursor = "pointer"
    }
}
function myRegPassword(){
    if(regInputField.type === "password"){
        regInputField.type = "text"
    reginInputIcon.name = "eye-off-outline"
    reginInputIcon.style.cursor = "pointer"}
    else{
        regInputField.type ="password"
        reginInputIcon.name = "eye-outline"
    reginInputIcon.style.cursor = "pointer"
    }
}
function changeIcon(value){
    if(value.length > 0)
    {
        loginInputIcon.name="eye-outline"
        reginInputIcon.name="eye-outline"

    }
    else{
        loginInputIcon.name = "lock-closed-outline"
        reginInputIcon.name = "lock-closed-outline"
    }
}

