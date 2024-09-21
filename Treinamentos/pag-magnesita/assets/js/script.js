//variaveis dos botoes
let btnEn = document.getElementById('en');
let btnPt = document.getElementById('pt');
let btnEs = document.getElementById('es');







let btnEn2 = document.getElementById('en2');
let btnPt2 = document.getElementById('pt2');
let btnEs2 = document.getElementById('es2');






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
let body = document.getElementById('body');

let homePage = document.getElementById('pagina-home-page');
let esqueciSenhaPage = document.getElementById('pagina-resetar-senha');

let contador = 0;





function AlertaesqueciSenha(){
 
  
   if (contador == 0){
      
      var r=confirm(" Esqueci Minha Senha \n A senha padrão são seus 4 primeiros digitos do CPF. Clique em cancelar para tentar novamente, ou clique em OK para redefinir sua senha.");
      if (r==true)
      {
         homePage.style.display = 'none';
         esqueciSenhaPage.style.display = 'block';
      }
      else
      {
         r="Você pressionou Cancelar!";
      }


   }
   else if (contador == 1){
      var r=confirm("Forgot my password \nthe default password are your 4 first digits of your CPF. Click in cancel to test again, or clink in OK to reset your password.");
      if (r==true)
      {
         homePage.style.display = 'none';
         esqueciSenhaPage.style.display = 'block';

         
      }
      else
      {
         r="Você pressionou Cancelar!";
      }

   }
   else{
      var r=confirm("Olvidé mi contraseña\nLa contraseña por default son los 4 primeros digitos de tu CURP. Click en cancelar para probar  de nuevo, o click en OK para reiniciar tu contraseña. ");
      if (r==true)
      {
         homePage.style.display = 'none';
         esqueciSenhaPage.style.display = 'block';
      }
      else
      {
         r="Você pressionou Cancelar!";
      }

   }
 
}




function cancelarAlerta(){
   // AlertaEsqueciSenha.style.top = '200%';
   //body.style.overflow = 'auto';
}
function alertaEsqueciUsuario(){
   AlertaEsqueciUsuario.style.top = '50%';
   AlertaEsqueciUsuario.style.transition = ' top 0.3s';


   
}
function botaoOK(){
   AlertaEsqueciUsuario.style.top = '200%';
   AlertaEsqueciUsuario.style.transition = ' top 0s';
   
 }
 
 //validaçao de login pagina inicial
 let paginaLogado = document.getElementById('pagina-logado');

function validacao(){
   let inputNome = document.getElementById('nome');
   let inputSenha = document.getElementById('isenha');
   let carregando = document.getElementById('carregando');
   

 
   
   if(inputNome.value === 'Usuario1' && inputSenha.value === '123456'){
      carregando.style.display = 'flex';
      homePage.style.display = 'none';

      setTimeout(() => {
      
        
      
         carregando.style.display = 'none';

         
       
   
        
      }, 1000)
      setTimeout(() => {
      
         AlertaEsqueciUsuario.style.top = '50%';
         AlertaEsqueciUsuario.style.transition = ' top 0.3s';

      
   
        
      }, 1050)
      alertaH1.innerHTML = 'PeopleID';
      alertaP.innerHTML ='Você logou utilizando sua matricula e número da empresa. Da próxima vez use seu People ID. Ele é: 0000000';

      paginaLogado.style.display = 'block';

      
   }
   else{
      carregando.style.display = 'flex';
      homePage.style.display = 'none';

      setTimeout(() => {
      
        
      
         carregando.style.display = 'none';
         homePage.style.display = 'block';
   
        
      }, 1000)
      setTimeout(() => {
      
         AlertaEsqueciUsuario.style.top = '50%';
         AlertaEsqueciUsuario.style.transition = ' top 0.3s';
      
   
        
      }, 1050)

      if(contador == 0){
         alertaH1.innerHTML = 'Erro de Login';
         alertaP.innerHTML ='Não foi possível logar a conta. PeopleID, Matrícula e/ou senha inválidos.';

      }
      else if(contador == 1){
         alertaH1.innerHTML = 'Login Error';
         alertaP.innerHTML ='Could not log in to account. Invalid people ID or password ';

      }
      else{
         alertaH1.innerHTML = 'Error de ingreso';
         alertaP.innerHTML ='No se pudo iniciar sesión en la cuenta. El People ID o contraseña no son válidos';

      }
    
         
      

    
   }
   

   

}
function goToHomePage(){
   homePage.style.display = 'block';
   esqueciSenhaPage.style.display = 'none';
   paginaLogado.style.display = 'none';
}

let h1Header = document.getElementById('h1-header');
let pForm = document.getElementById('p-form');
let labelPeopleId = document.getElementById('people-id-l');
let labelCPF = document.getElementById('cpf-l')
let labelNascimentData = document.getElementById('nascimento-l')
let labelAdmissao = document.getElementById('admissao-l')
let btnResetSenha = document.getElementById('link-reset-senha');
let btnNaoSeiMeuID = document.getElementById('link-final-reset-senha');
let txtHide = document.getElementById('text-hide');




function btnConsultaExFunc(){
   homePage.style.display = 'none';
   esqueciSenhaPage.style.display = 'block';
   
   h1Header.innerHTML = 'kdkdk'

   function pt(){
      h1Header.innerText = 'hhshsh';
   }
}

btnResetSenha.style.color = '#FFFFFF';
btnResetSenha.style.fontWeight= 'bold';
btnResetSenha.style.fontFamily = 'roboto';
btnNaoSeiMeuID.style.color = '#003262'
btnResetSenha.style.fontSize= '0.85em';
btnNaoSeiMeuID.style.fontWeight = 'bold'


let seta = document.getElementById("seta");
let textHide = document.getElementById("text-hide");






function pt(){
   contador = 0;
    //comandos para mudar a cor dos botoes lang ativados
    btnEn.style.backgroundColor = "#ffffff";
    btnEn.style.color = "#003262";
 
    btnPt.style.backgroundColor = "#003262";
    btnPt.style.color = "#ffffff";
    
    

    btnEs.style.backgroundColor = "#ffffff";
    btnEs.style.color = "#003262";

    btnEn2.style.backgroundColor = "#ffffff";
    btnEn2.style.color = "#003262";
 
    btnPt2.style.backgroundColor = "#003262";
    btnPt2.style.color = "#ffffff";

    btnEs2.style.backgroundColor = "#ffffff";
    btnEs2.style.color = "#003262";

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




    //mudar idioma pagina resetar senha.
    h1Header.innerHTML = 'RESET DE SENHA';
  
    pForm.innerHTML = 'Para realizar o reset de senha preencha as informações abaixo';
    labelCPF.innerHTML = 'CPF';
    labelNascimentData.innerHTML = 'Data de Nascimento';
    labelAdmissao.innerHTML = 'Data de Admissão';
    btnResetSenha.innerHTML = 'Reset de Senha';
    btnNaoSeiMeuID.innerHTML = 'NÃO SEI MEU PEOPLEID'
    txtHide.innerHTML = 'Caso não saiba o valor do PeopleID (Chris ID),  use o código de empresa junto com sua matrícula. O código de empresa é 11 para Magnesita Refratarios e 13 para Magnesita Mineração. Exemplo: 1388888.'

    
   labelCPF.style.width = '38px';
   labelNascimentData.style.width = '135px';
   labelAdmissao.style.width = '125px';
  



   
}
    









function en(){
   contador = 1;

  //comandos para mudar a cor dos botoes lang ativados
   btnEn.style.backgroundColor = "#003262";
   btnEn.style.color = "#ffffff";
   
   btnPt.style.backgroundColor = "#ffffff";
   btnPt.style.color = "#003262";

   
   btnEs.style.backgroundColor = "#ffffff";
   btnEs.style.color = "#003262";

   btnEn2.style.backgroundColor = "#003262";
   btnEn2.style.color = "#ffffff";
   
   btnPt2.style.backgroundColor = "#ffffff";
   btnPt2.style.color = "#003262";

   btnEs2.style.backgroundColor = "#ffffff";
   btnEs2.style.color = "#003262";

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


    //mudar idioma pagina resetar senha.
    h1Header.innerHTML = 'PASSWORD RESET';
   
    pForm.innerHTML = 'To reset your password please fill the information bellow';
    labelCPF.innerHTML = 'Personal Document';
    labelNascimentData.innerHTML = 'Birth date';
    labelAdmissao.innerHTML = 'Admission Date';
    btnResetSenha.innerHTML = 'Password Reset';
    btnNaoSeiMeuID.innerHTML = 'DONT KNOW MY PEOPLEID'
    txtHide.innerHTML = 'Please contact Atract to Grow..'

    labelCPF.style.width = '128px';
    labelNascimentData.style.width = '70px';
    labelAdmissao.style.width = '110px';

    

   


}

function es(){
   contador = 2;
    //comandos para mudar a cor dos botoes lang ativados
    btnEn.style.backgroundColor = "#ffffff";
    btnEn.style.color = "#003262";

    btnPt.style.backgroundColor = "#ffffff";
    btnPt.style.color = "#003262";
 
    btnEs.style.backgroundColor = "#003262";
    btnEs.style.color = "#ffffff";


    btnEn2.style.backgroundColor = "#ffffff";
    btnEn2.style.color = "#003262";

    btnPt2.style.backgroundColor = "#ffffff";
    btnPt2.style.color = "#003262";
 
    btnEs2.style.backgroundColor = "#003262";
    btnEs2.style.color = "#ffffff";

    
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

   
    //mudar idioma pagina resetar senha E ACESSO EX FUNCIONARIOS.
    h1Header.innerHTML = 'REINICIAR CONTRASEÑA';
   
    pForm.innerHTML = 'Para reiniciar tu contraseña por favor llevar la informacion solicitada abajo';
    labelCPF.innerHTML = 'CURP';
    labelNascimentData.innerHTML = 'Fecha de Nacimiento';
    labelAdmissao.innerHTML = 'Fecha de Ingreso';
    btnResetSenha.innerHTML = 'Reiniciar Contraseña';
    btnNaoSeiMeuID.innerHTML = 'NO CONOZCO MI ID PERSONAL'
    txtHide.innerHTML = 'Por favor contacte a ATG..'

    labelCPF.style.width = '45px';
    labelNascimentData.style.width = '140px';
    labelAdmissao.style.width = '115px';


}
textHide.style.display = 'none';
seta.style.transform = 'rotate(0deg) translateY(8px)'


function mostrarAviso(){
    //if(textHide.style.display == 'none'){
       

        if(textHide.style.display == 'none'){
            textHide.style.display = 'block';
            seta.style.transform = 'rotate(90deg) translateX(8px)';

        }
    
        else{
            textHide.style.display = 'none';
             seta.style.transform = 'rotate(0deg) translateY(8px)'
            
        }
    }
    