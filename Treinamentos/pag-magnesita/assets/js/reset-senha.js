
let nascimento = document.querySelector('#nascimento');
let nascimento2 = document.querySelector('#nascimento-2');
let admissao = document.querySelector('#admissao');
let admissao2 = document.querySelector('#admissao-2');
let cpf = document.getElementById("cpf");
let cpf2 = document.getElementById('cpf-2')
let peopleID = document.getElementById('PeopleID');
let peopleID2 = document.getElementById('PeopleID-2');

let iconCorretoPeopleid = document.getElementById('correto-peopleID');
let iconCorretoPeopleid2 = document.getElementById('correto-peopleID-2');
let iconCorretoCpf = document.getElementById('correto-cpf'); 
let iconCorretoCpf2 = document.getElementById('correto-cpf-2'); 
  
let iconCorretoNascimento = document.getElementById('correto-nascimento');
let iconCorretoNascimento2 = document.getElementById('correto-nascimento-2');
let iconCorretoAdmissao = document.getElementById('correto-admissao')
let iconCorretoAdmissao2 = document.getElementById('correto-admissao-2')

let iconErroCpf = document.getElementById('error-cpf');    
let iconErroCpf2 = document.getElementById('error-cpf-2');   
let iconErroNascimento = document.getElementById('error-nascimento');
let iconErroNascimento2 = document.getElementById('error-nascimento-2');
let iconErroAdmissao = document.getElementById('error-admissao');
let iconErroAdmissao2 = document.getElementById('error-admissao-2');

function goToHomePage(){
  peopleID.value = "";
  peopleID2.value = "";
}





function validarpeopeID(){
    if(peopleID.value.trim() !== '' ){
        iconCorretoPeopleid.style.display = 'flex';
    }
    else{
        iconCorretoPeopleid.style.display = 'none';
    }
    if(peopleID2.value.trim() !== ''){
      iconCorretoPeopleid2.style.display = 'flex';
    }
    else{
      iconCorretoPeopleid2.style.display = 'none';
    }
}

function validarCPF(){
    


  if(cpf.value.length !== 14){
    iconErroCpf.style.display = 'flex';
    iconCorretoCpf.style.display = 'none';
  
  }
  else{
    iconErroCpf.style.display = 'none';
    iconCorretoCpf.style.display = 'flex';
   
  }
  if(cpf.value == ""){
    iconErroCpf.style.display = 'none';
    iconCorretoCpf.style.display = 'none';
  }

  if(cpf2.value.length !== 14 ){
    iconErroCpf2.style.display = 'flex';
    iconCorretoCpf2.style.display = 'none';

  }
  else{
    iconErroCpf2.style.display = 'none';
    iconCorretoCpf2.style.display = 'flex';
  }
  if(cpf2.value == ""){
    iconErroCpf2.style.display = 'none';
    iconCorretoCpf2.style.display = 'none';
  }
 
}
function validarData(){
    if(nascimento.value.length < 10){
        iconErroNascimento.style.display = 'flex';
        iconCorretoNascimento.style.display = 'none';
        
       }
       
    else{
      iconCorretoNascimento.style.display = 'flex';
      iconErroNascimento.style.display = 'none';
    }
    if (nascimento.value  == "" ){
        iconCorretoNascimento.style.display = 'none';
        iconErroNascimento.style.display = 'none';
    }

    if(nascimento2.value.length < 10){
      iconErroNascimento2.style.display = 'flex'
      iconCorretoNascimento2.style.display = 'none';
      
     }
     
    else{
      iconCorretoNascimento2.style.display = 'flex';
      iconErroNascimento2.style.display = 'none';
    }
  if (nascimento2.value  == "" ){
      iconCorretoNascimento2.style.display = 'none';
      iconErroNascimento2.style.display = 'none';
  }

    

}
function validarDataAdmissao(){
  if(admissao.value.length < 10){
    iconErroAdmissao.style.display = 'flex';
    iconCorretoAdmissao.style.display = 'none';
    
   }
   
  else{
    iconCorretoAdmissao.style.display = 'flex';
    iconErroAdmissao.style.display = 'none';
  }
  if (admissao.value  == "" ){

    iconCorretoAdmissao.style.display = 'none';
    iconErroAdmissao.style.display = 'none';
  }


  if(admissao2.value.length < 10){
    iconErroAdmissao2.style.display = 'flex';
    iconCorretoAdmissao2.style.display = 'none';
    
   }
   
  else{
    iconCorretoAdmissao2.style.display = 'flex';
    iconErroAdmissao2.style.display = 'none';
  }
  if (admissao2.value  == "" ){

    iconCorretoAdmissao2.style.display = 'none';
    iconErroAdmissao2.style.display = 'none';
  }

}



