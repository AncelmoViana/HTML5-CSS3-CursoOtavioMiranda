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
nascimento.addEventListener('onkeydown', () => {
    let nasclength = nascimento.value.length;

    if (nasclength === 2 || nasclength === 5){
        nascimento.value += '/';
    }
})
admissao.addEventListener('onKeydown', () => {
    let admlength = admissao.value.length;

    if (admlength === 2 || admlength === 5){
        admissao.value += '/';
    }
})

let seta = document.getElementById("seta");
let textHide = document.getElementById("text-hide");
function mostrarAviso(){
    if(textHide.style.display == 'none'){
        textHide.style.display = 'block';
        seta.style.transform = 'rotate(90deg) translateX(8px)'
    }
    else{
        textHide.style.display = 'none';
        seta.style.transform = 'rotate(0deg) translateY(8px)'
    }
    
    
}

