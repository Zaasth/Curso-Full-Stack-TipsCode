const Numns = [1, 2, 3, 4, 5, 7, 10];

let result = Numns.map(function callback(e){
    return e * 2;
})

console.log(result); /* retorna 
[
    2,  4,  6, 8,
   10, 14, 20
 ]
*/

Numns.forEach(element => {
    if(element > 5){
        console.log("Maior que 5")
    }
});

 /* retorna
[ 'Wellinton Lucas', 'Cleiton Lucas', 'José Lucas', 'Vini Lucas' ]
*/
const Names = ["Wellinton", "Cleiton", "José", "Vini"];
const texto = document.querySelector("#text");
const btn = document.querySelector("#btn");
const resultado = document.querySelector("#result")

btn.addEventListener("click", function(){
    let SobreNome = Names.map(function(e){
        return e + ` ${texto.value} <br>`;
    })
    resultado.innerHTML = `${SobreNome}`;
})





/*btn.addEventListener("click", function(){
    let inputValue = texto.value
    const H1 = document.createElement("h1");
    const body = document.querySelector("body");
    H1.innerHTML = `
        <strong> ${inputValue} </strong>
    `
    body.appendChild(H1);
})
*/