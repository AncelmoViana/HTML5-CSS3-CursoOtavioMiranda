
let nascimento = document.querySelector('#nascimento');
let admissao = document.querySelector('#admissao');
let cpf = document.getElementById("cpf");

let iconCorretoPeopleid = document.getElementById('correto-peopleID');
let iconCorretoCpf = document.getElementById('correto-cpf');    
let iconCorretoNascimento = document.getElementById('correto-nascimento');
let iconCorretoAdmissao = document.getElementById('correto-admissao')

let iconErroCpf = document.getElementById('error-cpf');    
let iconErroNascimento = document.getElementById('error-nascimento');
let iconErroAdmissao = document.getElementById('error-admissao');





function validarCPF(){


    if(cpf.value.trim() !== '' && cpf.value.length < 14){
        iconErroCpf.style.display = 'flex';
    }
    else{
        iconErroCpf.style.display = 'none';
    }

}



