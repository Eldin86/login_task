//Fetching buttons
let backBtn = document.getElementById("back");
let loginBtn = document.getElementById('login_btn');
let forgotPassBtn = document.getElementById('forgot-password');

//Container div for forms
let loginFormDiv = document.getElementById('login');
let tokenFormDiv = document.getElementById('token-form');
let resetPassDiv = document.getElementById('reset-form')

loginBtn.addEventListener('click', function(){
    loginFormDiv.style.cssText = 'left: -1400px';
    tokenFormDiv.style.cssText = 'right: 0;'
})
backBtn.addEventListener('click', function(){
    loginFormDiv.style.cssText = 'left: 0px;';
    tokenFormDiv.style.cssText = 'right: -1400px;';
})

forgotPassBtn.addEventListener('click', function(){
    resetPassDiv.style.cssText = 'left: 0px';
    loginFormDiv.style.cssText = 'left: 500px';
})