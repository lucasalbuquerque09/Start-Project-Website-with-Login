/// Elementos do DOM
const inputPassword = document.getElementById('senha');
const showHidePassword = document.getElementById('btn-senha');
const btnLogin = document.querySelector('.btn-menu');
const loginForm = document.querySelector('.interface-form');
const btnclose = document.getElementById('close');

// Função para mostrar ou ocultar a senha
function showHide(){
    if(inputPassword.type === 'password'){
        inputPassword.setAttribute('type' , 'text');
        showHidePassword.classList.replace('bi-eye-fill' , 'bi-eye-slash-fill');
    }else{
        inputPassword.setAttribute('type' , 'password');
        showHidePassword.classList.replace('bi-eye-slash-fill' , 'bi-eye-fill');
    }
        
}

// Função para mostrar o formulário de login
function showFormLogin(){
     
    loginForm.classList.add('show-Form');
}  

// Função para ocultar o formulário de login
function hideFormLogin(){
    loginForm.classList.add('hide-Form');
    loginForm.classList.remove('show-Form');

    setTimeout(() => {
        loginForm.classList.remove('hide-Form');
    }, 800);    

}

// Eventos para desktop
showHidePassword.addEventListener('click' , showHide);
btnLogin.addEventListener('click' , showFormLogin);
btnclose.addEventListener('click' , hideFormLogin);

// Eventos para dispositivos móveis
showHidePassword.addEventListener('touchstart' , showHide);
btnLogin.addEventListener('touchstart' , showFormLogin);
btnclose.addEventListener('touchstart' , hideFormLogin);