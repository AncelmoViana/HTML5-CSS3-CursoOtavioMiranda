let cpf = document.querySelector('#cpf');
let nascimento = document.querySelector('#nascimento');
let admissao = document.querySelector('#admissao');

cpf.addEventListener('keypress', () => {
    let cpflength = cpf.value.length;
    

    if(cpflength === 3 || cpflength === 7){
        cpf.value += '.';
    }
    else if(cpflength == 11){
        cpf.value += '-';
    }
})
nascimento.addEventListener('keypress', () => {
    let nasclength = nascimento.value.length;

    if (nasclength === 2 || nasclength === 5){
        nascimento.value += '/';
    }
})
admissao.addEventListener('keypress', () => {
    let admlength = admissao.value.length;

    if (admlength === 2 || admlength === 5){
        admissao.value += '/';
    }
})

