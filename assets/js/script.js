const userEmail = document.getElementById('user-email');
const msgSpan = document.getElementById('email-input');
const subBtn = document.querySelector('.submit-btn');
const dismissBtn = document.querySelector('.dismiss-btn');
const formDiv = document.querySelector('.main-container');
const successDiv = document.querySelector('.success-card');
const errorMsg = document.getElementById('invalid-msg');
const emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

subBtn.addEventListener("click", submitEmail);
function checkEmail(userEmail){
    var email = String(userEmail.value).toLowerCase();
   
    if (emailChecker.test(email)){
        return true;
    }

    else{
        return false;
    }
}

function submitEmail(e){
    e.preventDefault();

    if (checkEmail(userEmail) == true){
        msgSpan.innerText = userEmail.value;
        formDiv.style.display = "none";
        successDiv.style.display = "flex";
    }

    else{
        errorMsg.style.display = "block";
        userEmail.style.borderColor="#FF6155";
        userEmail.style.backgroundColor="rgba(255, 97, 85, 0.15)";
    }
}

dismissBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    successDiv.style.display = "none";
    formDiv.style.display = "flex";
    userEmail.value = '';
    errorMsg.style.display = "none";
    userEmail.style.borderColor="rgba(25, 24, 43, 0.25)";
    userEmail.style.backgroundColor="white";
});