// elementos do DOM para manipulação do formulário de login e registro
const mainForm = document.querySelector('.main-form');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.icon-close');

// eventos para alternar entre os formulários de login e registro
registerLink.addEventListener('click' , ()=>{
    mainForm.classList.add('active');
});

loginLink.addEventListener('click' , ()=>{
    mainForm.classList.remove('active');
});

btnLogin.addEventListener('click' , ()=>{
    mainForm.classList.add('active-main-form');
});

btnClose.addEventListener('click' , ()=>{
    console.log('Close clicado!');
    mainForm.classList.remove('active-main-form');
});


// elementos para manipulação do campo de senha
const iconEyeLogin = document.getElementById('btn-senha-login');
const iconEyeRegister = document.getElementById('btn-senha-register');
const inputPass = document.getElementById('senha');
const inputPassRegister = document.getElementById('senha-register');

// eventos para alternar a visibilidade da senha nos formulários de login e registro
iconEyeLogin.addEventListener('click' , ()=>{
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type' , 'text');
        iconEyeLogin.classList.replace('bi-eye-fill' , 'bi-eye-slash-fill');
    }else{
        inputPass.setAttribute('type' , 'password');
        iconEyeLogin.classList.replace( 'bi-eye-slash-fill','bi-eye-fill');
    }
});


iconEyeRegister.addEventListener('click' , ()=>{
    if(inputPassRegister.type === 'password'){
        inputPassRegister.setAttribute('type' , 'text');
        iconEyeRegister.classList.replace('bi-eye-fill' , 'bi-eye-slash-fill');
    }else{
        inputPassRegister.setAttribute('type' , 'password');
        iconEyeRegister.classList.replace( 'bi-eye-slash-fill','bi-eye-fill');
    }
});

/* iconEyeRegister.addEventListener('click' , ()=>{
    if(inputPass.type === 'password'){
        inputPass.type = 'text'
        iconEyeRegister.classList.replace('bi-eye-fill' , 'bi-eye-slash-fill')
    }else{
        inputPass.type = 'password'
        iconEyeRegister.classList.replace( 'bi-eye-slash-fill','bi-eye-fill')
    }
}) */