const form = document.querySelector("#form");
const numero1 = document.querySelector("#n1");
const numero2 = document.querySelector("#n2");

form.addEventListener("submit", function(event){
    event.preventDefault()
    const input = numero1.value;
    const input2 = numero2.value;
    const resultadoDaSoma = parseInt(input) + parseInt(input2);
    const res = document.querySelector("#res");
    res.textContent = resultadoDaSoma;
})