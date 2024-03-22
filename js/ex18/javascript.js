let numero1 = prompt("Digite o primeiro numero para ser somado");
let numero2 = prompt("Digite o segundo numero para ser somado");

Somar(numero1, numero2)

function Somar(n1, n2) {
    let res = parseInt(n1)+parseInt(n2);
    document.querySelector("#n1").textContent = n1;
    document.querySelector("#n2").textContent = n2;
    document.querySelector("#res").textContent = res;
}