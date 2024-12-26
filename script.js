const signUpButton=document.getElementById('sign-up-button');
const signInButton=document.getElementById('sign-in-button');
const signUpButton2=document.getElementById('sign-up-button2');
const signInButton2=document.getElementById('sign-in-button2');
const homeLogin=document.getElementById('home-login');
const signInForm=document.getElementById('sign-in');
const signUpForm=document.getElementById('sign-up');

signUpButton2.addEventListener('click',function(){
    homeLogin.style.display="none";
    signUpForm.style.display="block";
})
signInButton2.addEventListener('click', function(){
    homeLogin.style.display="none";
    signInForm.style.display="block";
})
signUpButton.addEventListener('click',function(){
    homeLogin.style.display="none";
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    homeLogin.style.display="none";
    signInForm.style.display="block";
    signUpForm.style.display="none";
})