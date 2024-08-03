//variaveis dos botoes
let btnEn = document.getElementById('en');
let btnPt = document.getElementById('pt');
let btnEs = document.getElementById('es');

//variaveis dos nomes dos inputs
let nomeConta = document.getElementById('nome-conta');
let senha = document.getElementById('senha');

function pt(){
    //comandos para mudar a cor dos botoes lang ativados
    btnEn.style.backgroundColor = "#ffffff";
    btnEn.style.color = "#003262";
 
    btnPt.style.backgroundColor = "#003262";
    btnPt.style.color = "#ffffff";

    btnEs.style.backgroundColor = "#ffffff";
    btnEs.style.color = "#003262";

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


}

function es(){
    //comandos para mudar a cor dos botoes lang ativados
    btnEn.style.backgroundColor = "#ffffff";
    btnEn.style.color = "#003262";

    btnPt.style.backgroundColor = "#ffffff";
    btnPt.style.color = "#003262";
 
    btnEs.style.backgroundColor = "#003262";
    btnEs.style.color = "#ffffff";
}