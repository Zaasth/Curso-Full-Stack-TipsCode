function ExibirResultado(resultado){
    alert(`O resultado é: ${resultado}`);
}

function Calcular(calculo) {
    let res = eval(calculo)
    ExibirResultado(res);
}

Calcular(window.prompt(`Informe um cálculo`));