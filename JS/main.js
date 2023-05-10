let usernameInput = document.getElementById("sign-name");
let emailInput = document.getElementById("sign-email");
let passwordInput = document.getElementById("sign-password");
let signupInput = document.getElementById("btn-sign");
let loginInput = document.getElementById("btn-login");
let loginEmailInput = document.getElementById("login-email");
let loginPasswordInput = document.getElementById("login-password");
let fillMsgInput = document.getElementById("fillMsg");
let wrongMsgInput = document.getElementById("wrongMsg");

let container;
if (localStorage.getItem("users") == null) {
  container = [];
} else {
  container = JSON.parse(localStorage.getItem("users"));
}

//-------------------------------------------------------------------------------> Sign Up Function
 function signUp(){
  if (validationInputUser() == true && isExist() == false) {
    let user = {
      name: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    container.push(user); //array of Object
    localStorage.setItem("users", JSON.stringify(container)); //add in local and covert to string
    document.getElementById("exist").innerHTML = `<span class="text-success">Success</span>`;
  } else if(isExist() == true) {
    document.getElementById("exist").innerHTML = `<span class="text-danger">email or user already exists</span>`;
  }
  else{
    document.getElementById("exist").innerHTML = `<span class="text-danger">signUp failed ! Try again</span>`;

  }
};


//-------------------------------------------------------------------------------> User Validation
function usernameValidation() {
  const usernameAlert = document.getElementById("usernameAlert");
  let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10}?)$/;
  if (regex.test(usernameInput.value) == true && usernameInput.value !== "") {
    usernameInput.classList.add("is-valid");
    usernameInput.classList.remove("is-invalid");
    usernameAlert.classList.replace("d-block", "d-none");
    
    return true;
  } else {
    usernameInput.classList.add("is-invalid");
    usernameInput.classList.remove("is-valid");
    usernameAlert.classList.replace("d-none", "d-block");
    document.getElementById("exist").innerHTML = `<span class="text-danger"></span>`;

    return false;
  }
}
//-------------------------------------------------------------------------------> Password Validation
function passwordValidation() {
  let regex = /^.{5,15}$/;
  const userPasswordAlert = document.getElementById("userPasswordAlert");
  if (regex.test(passwordInput.value) == true && passwordInput.value !== "") {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    userPasswordAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
    userPasswordAlert.classList.replace("d-none", "d-block");
    document.getElementById("exist").innerHTML = `<span class="text-danger"></span>`;

    return false;
  }
}
//-------------------------------------------------------------------------------> Email Validation
function emailValidation() {
  let regex = /@[a-z]{5,10}(\.com)$/;
  const userEmailAlert = document.getElementById("userEmailAlert");
  if (regex.test(emailInput.value) == true && emailInput.value !== "") {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    userEmailAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    userEmailAlert.classList.replace("d-none", "d-block");
    document.getElementById("exist").innerHTML = `<span class="text-danger"></span>`;
    return false;
  }
}
//-------------------------------------------------------------------------------> test validation true or false
function validationInputUser() {
  if (
    usernameValidation() == true &&
    passwordValidation() == true &&
    emailValidation() == true
  ) {
    return true;
  } else {
    return false;
  }
}
//-------------------------------------------------------------------------------> Check user-name and email exist or no
function isExist() {
  for (let i = 0; i < container.length; i++) {
    if (
      container[i].name.toLowerCase() == usernameInput.value.toLowerCase() ||
      container[i].email.toLowerCase() == emailInput.value.toLowerCase()
    ) {
      usernameInput.classList.remove("is-valid");
      emailInput.classList.remove("is-valid");
      passwordInput.classList.remove("is-valid");
      return true;
    }
  }
  return false;
}
//-------------------------------------------------------------------------------> User Validation

let userName=localStorage.getItem("name-user")
function login(){
  //empty inputs
  if(loginEmailInput.value==""||loginPasswordInput.value==""){    
    fillMsgInput.classList.replace("d-none","d-block")
    wrongMsgInput.classList.replace("d-block","d-none")
  }
  else{
    for(let i=0 ; i<container.length ; i++){
      if(container[i].email.toLowerCase()==loginEmailInput.value&&container[i].password.toLowerCase()==loginPasswordInput.value){
        localStorage.setItem("name-user",container[i].name)
        loginInput.setAttribute("href","welcom/welcom.html" )
        wrongMsgInput.classList.replace("d-block","d-none")
  
      }
      else{
        wrongMsgInput.classList.replace("d-none","d-block")
        fillMsgInput.classList.replace("d-block","d-none")
  
      }
    }
  }
}
//-------------------------------------------------------------------------------> display massage welcom
function getUser(){
  document.getElementById("welcomMassage").innerHTML=`welcome ${userName}`
}
function logOut(){
  localStorage.removeItem("name-user")
}