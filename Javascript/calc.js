
const calcular = document.getElementById('calcular');

function imc(e) {
    
    const nome   = document.getElementById('nome').value;
    const Peso   = document.getElementById('peso').value;
    const Altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && Peso !== '' && Altura !== '') {
        const valorImc = (Peso / (Altura * Altura)).toFixed(1); 

        let classificacao = '';

        if(valorImc < 18.5){
            classificacao = 'Abaixo do peso';
        }else if(valorImc < 25){
            classificacao = 'com seu peso ideal. Parabéns!!!😁🤩🤩'
        }else if(valorImc < 30){
            classificacao = 'levemente acima do peso.'
        }else if(valorImc < 35){
            classificacao = 'com obesidade grau I.'
        }else if(valorImc < 40){
            classificacao = 'com obesidade grau II 😱';
        }else{
            classificacao = 'com obesidade grau III. Cuidado!!! 😱'
        }


        resultado.textContent = 'Olá, '+nome+' seu IMC é '+valorImc+' e você está: '+classificacao;
    } else {
        resultado.textContent = "Preencha todos os campos!!!";
    }
    e.preventDefault();
}

calcular.addEventListener('click', imc);