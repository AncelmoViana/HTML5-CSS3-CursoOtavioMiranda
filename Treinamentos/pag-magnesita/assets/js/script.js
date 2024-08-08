//variaveis dos botoes
let btnEn = document.getElementById('en');
let btnPt = document.getElementById('pt');
let btnEs = document.getElementById('es');

//variaveis dos nomes dos inputs
let nomeConta = document.getElementById('nome-conta');
let senha = document.getElementById('senha');
//variaveis esqueci meu usuario e esqueci minha senha
let esqueciUsuario = document.getElementById('esqueciUsuario');
let esqueciSenha = document.getElementById('esqueciSenha');
//variaveis botoes de entrar e link final
let entrar = document.getElementById('entrar');
let entrarSSO = document.getElementById('entrar-sso');
let linkFinal = document.getElementById('link-final');

// variavel formulario
let formulario = document.getElementById('formulario');

//variavel do alerta esqueci usuario e senha
let AlertaEsqueciUsuario = document.getElementById('alerta-esqueci-usuario');

let alertaH1 = document.getElementById('alerta-h1');
let alertaP = document.getElementById('alerta-p');


let AlertaEsqueciSenha = document.getElementById('alerta-esqueci-senha');





function AlertaesqueciSenha(){
   AlertaEsqueciSenha.style.top = '50%';
   

}
function cancelarAlerta(){
   AlertaEsqueciSenha.style.top = '200%';
}
function alertaEsqueciUsuario(){
   AlertaEsqueciUsuario.style.top = '50%';
   AlertaEsqueciUsuario.style.transition = ' top 0.3s';


   
}
function botaoOK(){
   AlertaEsqueciUsuario.style.top = '200%';
   AlertaEsqueciUsuario.style.transition = ' top 0s';
   
 }

function pt(){
    //comandos para mudar a cor dos botoes lang ativados
    btnEn.style.backgroundColor = "#ffffff";
    btnEn.style.color = "#003262";
 
    btnPt.style.backgroundColor = "#003262";
    btnPt.style.color = "#ffffff";

    btnEs.style.backgroundColor = "#ffffff";
    btnEs.style.color = "#003262";

    //comandos para alterar o idioma dos texos do formulario.
   nomeConta.innerHTML = 'Nome da Conta';
   nomeConta.style.width = '90px';

   senha.innerHTML = 'Senha';
   senha.style.width = '45px';

   esqueciUsuario.innerHTML = 'Esqueci meu usuário';
   esqueciSenha.innerHTML = 'Esqueci minha  senha';

   entrar.innerHTML = 'ENTRAR';
   entrarSSO.innerHTML = 'ENTRAR COM SSO';

   linkFinal.style.display = 'block';
   formulario.style.height = '630px';

   //mudar placeholder
   $(document).ready(function(){
      $('input[name="nome"]').attr('placeholder', 'Nome da Conta' );
      $('input[name="senha"]').attr('placeholder', 'Senha')
   })

    //idioma do alerta esqueci usuario
    alertaH1.innerHTML = 'Esqueci meu usuário';
    alertaP.innerHTML ='Seu usuário é o seu PeopleID (Chris ID) da empresa. Caso não saiba o ID,  use o código de empresa junto com sua matrícula. O código de empresa é 11 para Magnesita Refratarios e 13 para Magnesita Mineração. Exemplo: 1388888.';




}



function en(){

  //comandos para mudar a cor dos botoes lang ativados
   btnEn.style.backgroundColor = "#003262";
   btnEn.style.color = "#ffffff";

   btnPt.style.backgroundColor = "#ffffff";
   btnPt.style.color = "#003262";

   btnEs.style.backgroundColor = "#ffffff";
   btnEs.style.color = "#003262";

   //comandos para alterar o idioma dos texos do formulario.
   nomeConta.innerHTML = 'Login';
   nomeConta.style.width = '40px';

   senha.innerHTML = 'password';
   senha.style.width = '65px';

   esqueciUsuario.innerHTML = 'Forgot my username';
   esqueciSenha.innerHTML = 'Forgot my password';

   entrar.innerHTML = 'ENTER';
   entrarSSO.innerHTML = 'ENTER WITH SSO';

   linkFinal.style.display = 'none';
   formulario.style.height = '595px';


   //mudar placeholder
   $(document).ready(function(){
      $('input[name="nome"]').attr('placeholder', 'Login' );
      $('input[name="senha"]').attr('placeholder', 'Password')
   })


   //idioma do alerta esqueci usuario
   alertaH1.innerHTML = 'Forgot my username';
   alertaP.innerHTML ='Your password is your PeopleID (Chris ID), from RHI Magnesita. If you dont know this value, please contact Attract to Grow';

   


}

function es(){
    //comandos para mudar a cor dos botoes lang ativados
    btnEn.style.backgroundColor = "#ffffff";
    btnEn.style.color = "#003262";

    btnPt.style.backgroundColor = "#ffffff";
    btnPt.style.color = "#003262";
 
    btnEs.style.backgroundColor = "#003262";
    btnEs.style.color = "#ffffff";

    
    //comandos para alterar o idioma dos texos do formulario.
   nomeConta.innerHTML = 'Usuario';
   nomeConta.style.width = '50px';

   senha.innerHTML = 'Contraseña';
   senha.style.width = '70px';

   esqueciUsuario.innerHTML = 'Olvidé mi usuario';
   esqueciSenha.innerHTML = 'Olvidé mi contraseña';

   entrar.innerHTML = 'ENTRAR';
   entrarSSO.innerHTML = 'ENTRAR CON SSO';

   linkFinal.style.display = 'none';
   formulario.style.height = '595px';


   //mudar placeholder
   $(document).ready(function(){
      $('input[name="nome"]').attr('placeholder', 'Usuario' );
      $('input[name="senha"]').attr('placeholder', 'Contraseña')
   })

   //idioma do alerta esqueci usuario
   alertaH1.innerHTML = 'Olvidé mi usuario';
   alertaP.innerHTML ='Tu usuario es tu ID personal (ID de CHRIS), de RHI Magnesita. Si lo desconoces, por favor contacta a Attract to Grow.';

}