//Fetching buttons
let backBtn = document.getElementById("back");
let loginBtn = document.getElementById('login_btn');
let forgotPassBtn = document.getElementById('forgot-password');
let tokenBckBtn = document.getElementById('token-bck-button');
let backupTokenBtn = document.getElementById('backup-token');
let backTokenBtn = document.getElementById('back-token-btn');

//Container div for forms
let loginFormDiv = document.getElementById('login');
let tokenFormDiv = document.getElementById('token-form');
let resetPassDiv = document.getElementById('reset-form');
let backupTokenDiv = document.getElementById('backup-token-form');

loginBtn.addEventListener('click', function(){
    loginFormDiv.style.cssText = 'left: -500px';
    tokenFormDiv.style.cssText = 'right: 0;'
});
backBtn.addEventListener('click', function(){
    loginFormDiv.style.cssText = 'left: 0px;';
    tokenFormDiv.style.cssText = 'right: -500px;';
});
forgotPassBtn.addEventListener('click', function(){
    resetPassDiv.style.cssText = 'left: 0px';
    loginFormDiv.style.cssText = 'left: 500px';
});
tokenBckBtn.addEventListener('click', function(){
    resetPassDiv.style.left = '-500px';
    loginFormDiv.style.left = '0px'
});
backupTokenBtn.addEventListener('click', function(){
    backupTokenDiv.style.right = '0px';
    tokenFormDiv.style.right = '500px'
});
backTokenBtn.addEventListener('click', function(){
    backupTokenDiv.style.right = '-500px';
    tokenFormDiv.style.right = '0px';
})