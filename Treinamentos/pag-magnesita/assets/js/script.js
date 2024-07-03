$(document).ready(function(){
    $('input[class="nome"]').attr('placeholder', );
    $('input[class="senha"]').attr('placeholder', 'testando senha');
})


let btnEN = document.getElementById('en');
let btnPT = document.getElementById('pt');
let btnES = document.getElementById('es');


function pt(){
    btnEN.style.background = '#ffffff';
    btnEN.style.color = '#003262';
    btnPT.style.background = '#003262';
    btnPT.style.color = '#ffffff';
    btnES.style.background = '#ffffff';
    btnES.style.color = '#003262';
   
  
    
    
}
function en(){

    btnEN.style.background = '#003262'
    btnEN.style.color = '#ffffff'
    btnPT.style.background = '#ffffff'
    btnPT.style.color = '#003262'
    btnES.style.background = '#ffffff';
    btnES.style.color = '#003262';
    
}
function es(){
    btnES.style.background = '#003262';
    btnES.style.color = '#ffffff';
    btnEN.style.background = '#ffffff';
    btnEN.style.color = '#003262'
    btnPT.style.background = '#ffffff'
    btnPT.style.color = '#003262'
   
}

