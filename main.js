const form = document.querySelector('#formulario');
const limpar = document.querySelector('#limpar');


form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const firstNota = e.target.querySelector('#nota1');
    const secondNota = e.target.querySelector('#nota2'); 

    const one = Number(firstNota.value);
    const two = Number(secondNota.value);

    if (firstNota.value === '' || secondNota.value === '') {
        setResultado('Nota inválida! Por favor, insira uma nota válida!');
        return;
    }

    if(one >= 11 || one < 0 || two >= 11 || two < 0) {
        setResultado('Nota inválida! Por favor, insira uma nota válida!');
        return;
    }

    const media = calculandoMedia(one, two);
    const msg   = getmedia(media);
    const info  = `A sua primeira nota foi: ${one}! Sua segunda nota foi: ${two}!<br> Média final é: ${media}! Sua situação atualmente é: ${msg}`;
    setResultado(info); 
});

limpar.addEventListener('click', function(clear) {
    clear.preventDefault(); 
    document.querySelector('#nota1').value = ''; 
    document.querySelector('#nota2').value = '';     
    setResultado(''); 
    document.querySelector('.resultado-container').style.display = 'none'; 
});


function calculandoMedia(one, two) {
    return (one + two) / 2;
}


function getmedia(media) {
    if (media >= 6) {
        return 'Aprovado!';
    } else if (media >= 4) {
        return 'Recuperação';
    } else {
        return 'Reprovado';
    }
}


function setResultado(msg) {
    const resultadoContainer = document.querySelector('.resultado-container');
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; 
    resultado.classList.add('paragrafo-resultado');
    resultado.innerHTML = msg; 
    resultadoContainer.style.display = 'block'; 
}
