

let btnEN = document.getElementById('en');
let btnPT = document.getElementById('pt');
let btnES = document.getElementById('es');

let nomeConta = document.getElementById('nome-conta');
let senha = document.getElementById('senha');

let esqueciUsuario = document.getElementById('esqueciUsuario');
let esqueciSenha = document.getElementById('esqueciSenha');
let entrar = document.getElementById('entrar');
let entrarComSSO = document.getElementById('entrar-com-sso');
let linkFinal = document.getElementById('link-final');
let formulario = document.getElementById('formulario');


function pt(){
    btnEN.style.background = '#ffffff';
    btnEN.style.color = '#003262';
    btnPT.style.background = '#003262';
    btnPT.style.color = '#ffffff';
    btnES.style.background = '#ffffff';
    btnES.style.color = '#003262';

    //comandos para mudar linguagem
    nomeConta.innerHTML = 'Nome da Conta';
    nomeConta.style.width = '90px';

    senha.innerHTML = 'Senha';
    senha.style.width = '48px';
    
    //linguagem do placeholder
    $(document).ready(function(){
    $('input[class="nome"]').attr('placeholder', 'Nome da Conta');
    $('input[class="senha"]').attr('placeholder', 'Senha');

    });
    //linguagem esqueci usuari e senha
    esqueciUsuario.innerHTML = 'Esqueci meu usuário';
    esqueciSenha.innerText = 'Esqueci minha senha';

    //linguagem botoes de envio.
    entrar.innerHTML = 'ENTRAR';
    entrar.style.backgroundColor = '#003262';
    entrar.style.color = '#ffffff';
    entrar.style.padding = '15px 24px';
    entrar.style.borderRadius= '5px';
    entrar.style.textAlign= 'center';
    entrar.style.fontWeight= 'bold';
    entrar.style.margin= '25px 0px 0px 30px';


    entrarComSSO.innerHTML = 'ENTRAR COM SSO';
    entrarComSSO.style.backgroundColor = '#ffffff';
    entrarComSSO.style.color = '#003262';
    entrarComSSO.style.padding = '15px 22px';
    entrarComSSO.style.borderRadius= '10px';
    entrarComSSO.style.textAlign= 'center';
    entrarComSSO.style.fontWeight= 'bold';
    entrarComSSO.style.margin= '25px 0px 0px 20px';
    entrarComSSO.style.border = '2px solid #003262';
    entrarComSSO.style.marginTop = '25px';


      //voltando o ultimo link
      linkFinal.innerHTML = 'Consultas para ex-funcionários';
      linkFinal.style.marginTop = '30px';
      formulario.style.height = '630px';
  
   
  
    
    
}
function en(){

    //comandos para mostar botão selecionado
    btnEN.style.background = '#003262';
    btnEN.style.color = '#ffffff';
    btnPT.style.background = '#ffffff';
    btnPT.style.color = '#003262';
    btnES.style.background = '#ffffff';
    btnES.style.color = '#003262';

    //comandos para mudar linguagem
    nomeConta.innerHTML = 'Login';
    nomeConta.style.width = '40px';

    senha.innerHTML = 'Password';
    senha.style.width = '70px';

    //linguagem do placeholder
    $(document).ready(function(){
        $('input[class="nome"]').attr('placeholder', 'Login');
        $('input[class="senha"]').attr('placeholder', 'Password');
    });

    //linguagem esqueci usuari e senha
    esqueciUsuario.innerHTML = 'Forgot my username';
    esqueciSenha.innerText = 'Forgot my password';

    //linguagem botoes de envio.
    entrar.innerHTML = 'ENTER';
    entrar.style.backgroundColor = '#003262';
    entrar.style.color = '#ffffff';
    entrar.style.padding = '15px 25px';
    entrar.style.borderRadius= '5px';
    entrar.style.textAlign= 'center';
    entrar.style.fontWeight= 'bold';
    entrar.style.margin= '25px 0px 0px 40px';


    entrarComSSO.innerHTML = 'ENTER WITH SSO';
    entrarComSSO.style.backgroundColor = '#ffffff';
    entrarComSSO.style.color = '#003262';
    entrarComSSO.style.padding = '15px 22px';
    entrarComSSO.style.borderRadius= '10px';
    entrarComSSO.style.textAlign= 'center';
    entrarComSSO.style.fontWeight= 'bold';
    entrarComSSO.style.margin= '25px 0px 0px 27px';
    entrarComSSO.style.border = '2px solid #003262';
    entrarComSSO.style.marginTop = '25px';

    //retirando o ultimo link
    linkFinal.innerHTML = '';
    formulario.style.height = '585px';
    
}
  
    

function es(){
    btnES.style.background = '#003262';
    btnES.style.color = '#ffffff';
    btnEN.style.background = '#ffffff';
    btnEN.style.color = '#003262';
    btnPT.style.background = '#ffffff';
    btnPT.style.color = '#003262';

    //comandos para mudar linguagem
    nomeConta.innerHTML = 'Usuario';
    nomeConta.style.width = '50px';

    senha.innerHTML = 'Contraseña';
    senha.style.width = '75px';

    //linguagem do placeholder
    $(document).ready(function(){
        $('input[class="nome"]').attr('placeholder', 'Usuario');
        $('input[class="senha"]').attr('placeholder', 'Contraseña');
    });

    //linguagem esqueci usuari e senha
    esqueciUsuario.innerHTML = 'Olvidé mi usuario';
    esqueciSenha.innerText = 'Olvidé mi contraseña';

    //linguagem botoes de envio.
    entrar.innerHTML = 'ENTRAR';
    entrar.style.backgroundColor = '#003262';
    entrar.style.color = '#ffffff';
    entrar.style.padding = '15px 25px';
    entrar.style.borderRadius= '5px';
    entrar.style.textAlign= 'center';
    entrar.style.fontWeight= 'bold';
    entrar.style.margin= '25px 0px 0px 30px';


    entrarComSSO.innerHTML = 'ENTRAR CON SSO';
    entrarComSSO.style.backgroundColor = '#ffffff';
    entrarComSSO.style.color = '#003262';
    entrarComSSO.style.padding = '15px 22px';
    entrarComSSO.style.borderRadius= '10px';
    entrarComSSO.style.textAlign= 'center';
    entrarComSSO.style.fontWeight= 'bold';
    entrarComSSO.style.margin= '25px 0px 0px 20px';
    entrarComSSO.style.border = '2px solid #003262';
    entrarComSSO.style.marginTop = '25px';

    //retirando o ultimo link
    linkFinal.innerHTML = '';
    formulario.style.height = '585px';
   
}

