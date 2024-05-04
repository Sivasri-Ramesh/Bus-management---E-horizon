const signup_btn = document.getElementById("signup_tab");
const login_btn = document.getElementById("login_tab");
const signup = document.getElementById("signup");
const login= document.getElementById("LOGIN");

signup_btn.addEventListener("click",() => {
     signup.style.display="block";
     login.style.display="none";
    signup_btn.style.background="silver";
    login_btn.style.background="white";
});

login_btn.addEventListener("click",() =>{
    login.style.display="block";
    signup.style.display="none";
    login_btn.style.background="silver";
    signup_btn.style.background="white";
});

	
