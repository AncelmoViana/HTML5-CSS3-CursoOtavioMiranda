
let nascimento = document.querySelector('#nascimento');
let admissao = document.querySelector('#admissao');
let cpf = document.getElementById("cpf");

function mascaraCPF() {
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += "."

    }
    if(cpf.value.length == 11){
        cpf.value += "-"

    }
}

