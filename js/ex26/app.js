let Names = ["João", "Wellinton", "Igor", "Cleiton"];
let Numbers = [10, 18, 7, 3, 20, 32, 9, 4];


function Validar(validado){
    return validado == "Wellinton";
}
let NumbersFilter = Numbers.filter(Validar);
let NamesFilter = Names.filter(Validar);
console.log(NamesFilter); // retorna Wellinton



const InputEmail = document.querySelector("#email");
const InputSenha = document.querySelector("#senha");
const InputSubmit = document.querySelector("#submit");
const H1teste = document.querySelector("#teste");
let EmailsCadastrados = ["wellintonpaypal@gmail.com", "cleitindaroça@gmail.com"];
let SenhasCadastradas = ["minhasenha123"];


InputSubmit.addEventListener("click", function(){
    let filtrado = EmailsCadastrados.filter(f1);
    
    if(filtrado == true){
        console.log("deu certo")
    } else {
        console.log("não deu");
    }
    function f1(certin){
        return certin == InputEmail.value;
    }
});



function ValidUser(valido){
    InputEmail.value;
}