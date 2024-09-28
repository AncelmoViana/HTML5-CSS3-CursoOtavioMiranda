
let nascimento = document.querySelector('#nascimento');
let admissao = document.querySelector('#admissao');
let cpf = document.getElementById("cpf");
let cpf2 = document.getElementById('cpf-2')
let peopleID = document.getElementById('PeopleID');
let peopleID2 = document.getElementById('PeopleID-2');

let iconCorretoPeopleid = document.getElementById('correto-peopleID');
let iconCorretoPeopleid2 = document.getElementById('correto-peopleID-2');
let iconCorretoCpf = document.getElementById('correto-cpf'); 
let iconCorretoCpf2 = document.getElementById('correto-cpf-2'); 
  
let iconCorretoNascimento = document.getElementById('correto-nascimento');
let iconCorretoAdmissao = document.getElementById('correto-admissao')

let iconErroCpf = document.getElementById('error-cpf');    
let iconErroNascimento = document.getElementById('error-nascimento');
let iconErroAdmissao = document.getElementById('error-admissao');





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
    


  if(cpf.value.length !== 14 || cpf2.value.length !== 14 ){
    iconErroCpf.style.display = 'flex';
    iconCorretoCpf.style.display = 'none';
    iconCorretoCpf2.style.display = 'none';
  }
  else{
    iconErroCpf.style.display = 'none';
    iconCorretoCpf.style.display = 'flex';
    iconCorretoCpf2.style.display = 'flex';
  }
  if(cpf.value == ""){
    iconErroCpf.style.display = 'none';
    iconCorretoCpf.style.display = 'none';
  }


  if(cpf.value.length !== 14 ){
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

}



