let audios = [
    new Audio('sounds/crash.mp3'),
    new Audio('sounds/kick-bass.mp3'),
    new Audio('sounds/snare.mp3'),
    new Audio('sounds/tom-1.mp3'), 
    new Audio('sounds/tom-2.mp3'), 
    new Audio('sounds/tom-3.mp3'),
    new Audio('sounds/tom-4.mp3')
];

TocarAudio();
    
    
/* FUNÇÕES */
function TocarAudio(){
    let audioswitch = document.getElementsByClassName("audio");
    
    window.addEventListener("keyup", function(e){

        e.preventDefault();
        switch(e.code){
            case "KeyW":
            audios[0].play();
            console.log("pressionando "+e.code);      
            ScaleBtn("w");  
            break;
            case "KeyA":
            audios[1].play();
            console.log("pressionando "+e.code);
            ScaleBtn("a"); 
            break;
            case "KeyS":
            audios[2].play();
            console.log("pressionando "+e.code);
            ScaleBtn("s"); 
            break;
            case "KeyD":
            audios[3].play();
            console.log("pressionando "+e.code);
            ScaleBtn("d"); 
            break;
            case "KeyJ":
            audios[4].play();
            console.log("pressionando "+e.code);
            ScaleBtn("j"); 
            break;
            case "KeyK":
            audios[5].play();
            console.log("pressionando "+e.code);
            ScaleBtn("k"); 
            break;
            case "KeyL":
            audios[6].play();
            console.log("pressionando "+e.code);
            ScaleBtn("l"); 
            break;
        }  

        function ScaleBtn(name){
            let name1 = "."+name;
            document.querySelector(`${name1}`).style.transform = "scale(1.15)";
            document.querySelector(`${name1}`).style.transitionDuration = "0.5s";
            window.addEventListener("keydown", function(e){
                name = name.toUpperCase();
                
                switch(e.code){
                    case "Key"+name:
                            document.querySelector(`${name1}`).style.transform = "scale(1.15)";
                            document.querySelector(`${name1}`).style.transitionDuration = "0.5s";
                        break;
                    default:
                            document.querySelector(`${name1}`).style.transform = "scale(1)";
                            document.querySelector(`${name1}`).style.transitionDuration = "0.5s";
                        break;
                }
            });
        }

    });

}

console.log(calculator(10, 30, sub));

function soma(n1, n2){
    return n1+n2;
}
function multi(n1, n2){
    return n1*n2;
}
function sub(n1, n2){
    return n1-n2;
}
function div(n1, n2){
    return n1/n2;
}
function calculator(n1, n2, operador){
    return operador(n1, n2);
}
