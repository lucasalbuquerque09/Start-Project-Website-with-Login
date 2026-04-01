// Elementos do DOM para desktop
const inputPassword = document.getElementById('senha');
const showHidePassword = document.getElementById('btn-senha');
const btnLogin = document.querySelector('.btn-menu');
const loginForm = document.querySelector('.interface-form');
const btnclose = document.getElementById('close');


// Função para mostrar ou ocultar a senha no campo de input
function showHide(){
    if(inputPassword.type === 'password'){
        inputPassword.setAttribute('type' , 'text');
        showHidePassword.classList.replace('bi-eye-fill' , 'bi-eye-slash-fill');
    }else{
        inputPassword.setAttribute('type' , 'password');
        showHidePassword.classList.replace('bi-eye-slash-fill' , 'bi-eye-fill');
    }
        
}

// Função para mostrar o formulário de login ao clicar no botão de login
function showFormLogin(){
     
    loginForm.classList.add('show-Form');
}  

// Função para ocultar o formulário de login ao clicar no botão de fechar
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



// Elementos do DOM para mobile
const btnMenuMobile = document.getElementById('open-mobile');
const openMenuMobile = document.querySelector('.menu-mobile');
const overlayMenu = document.getElementById('overlay')
const linkMenu = document.getElementById('link-menu');

// Função para abrir o menu mobile
btnMenuMobile.addEventListener('click' , () =>{
    
    openMenuMobile.classList.add('active-menu')
    
})
openMenuMobile.addEventListener('click' , () =>{
    
    openMenuMobile.classList.remove('active-menu')

})
overlayMenu.addEventListener('click' , () =>{
    
    openMenuMobile.classList.remove('active-menu')

})

// Função para mostrar o formulário de login ao clicar no link do menu mobile
linkMenu.addEventListener('click' , () =>{
    
    loginForm.classList.add('show-Form');
})
