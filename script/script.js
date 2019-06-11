//For sliding two forms on startup
let backBtn = document.getElementById("back");
let loginDiv = document.getElementById('login');
let forgotDiv = document.getElementById('forgot');

show_forgot.addEventListener('click', function(){
    loginDiv.style.cssText = ' left: -1400px';
    forgotDiv.style.cssText = 'right: 0;'
})
backBtn.addEventListener('click', function(){
    loginDiv.style.cssText = 'left: 0px;';
    forgotDiv.style.cssText = 'right: -1400px;';
})