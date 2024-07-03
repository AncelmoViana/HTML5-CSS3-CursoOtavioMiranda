

let nomeConta = document.getElementById('nome-conta');
let senha = document.getElementById('senha');
let esqueciMeuUsuario = document.getElementById('esqueciMeuUsuario');
let esqueciMinhaSenha = document.getElementById('esqueciMinhaSenha');




function pt(){
    let pt = document.getElementById('pt');
    let en=document.getElementById('en'); 
    let es = document.getElementById('es');

    pt.style.background = '#003262';
    pt.style.color = '#ffffff';

    en.style.background = '#ffffff';
    en.style.color = '#003262';
   
    
    es.style.background = '#ffffff';
    es.style.color = '#003262';

    nomeConta.innerHTML = 'Nome da Conta';
    nomeConta.style.width = '90px';

    senha.innerHTML = 'Senha';
    senha.style.width = '48px';

    esqueciMeuUsuario.innerHTML = 'Esqueci meu usuário';
    esqueciMinhaSenha.innerHTML = 'Esqueci minha senha';
    $('#nome'). attr ('placeholder', 'testando placeholder novo');
  
    
}
function en(){
    let pt = document.getElementById('pt');
    let en=document.getElementById('en'); 
    let es = document.getElementById('es');
    
    pt.style.background = '#ffffff';
    pt.style.color = '#003262';
    
    
    en.style.background = '#003262';
    en.style.color = '#ffffff';

    es.style.background = '#ffffff';
    es.style.color = '#003262';
    

    nomeConta.innerHTML = 'Login';
    nomeConta.style.width = '40px';

    senha.innerHTML = 'Password';
    senha.style.width = '70px';

    esqueciMeuUsuario.innerHTML = 'Forgot my username ';
    esqueciMeuUsuario.style.textAlign = 'right';
    esqueciMeuUsuario.style.marginRight = '25px';
    esqueciMeuUsuario.style.color = '#3D5567';

    esqueciMinhaSenha.innerHTML = 'Forgot my password';
    esqueciMinhaSenha.style.textAlign = 'right';
    esqueciMinhaSenha.style.marginRight = '25px';
    esqueciMinhaSenha.style.color = '#3D5567';
   
}
function es(){
    let pt = document.getElementById('pt');
    let en=document.getElementById('en'); 
    let es = document.getElementById('es');

    pt.style.background = '#ffffff';
    pt.style.color = '#003262';
    
    
    en.style.background = '#ffffff';
    en.style.color = '#003262';
   
    
    es.style.background = '#003262';
    es.style.color = '#ffffff';
}

