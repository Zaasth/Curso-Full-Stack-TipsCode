const btn = document.querySelector("#btn");
const janela = document.querySelector("html");

Escuro();

    function Escuro(){
        btn.addEventListener("click", function(){
            janela.classList.add("black")
            Claro();
            btn.innerHTML = "Modo Escuro"
         });
        
    }
    
     
function Claro(){
    btn.addEventListener("click", function(){
        janela.classList.add("white")
     });
     
}