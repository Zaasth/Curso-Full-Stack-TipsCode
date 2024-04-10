const bird = document.querySelector(".passaro");

function Jump(){

    window.addEventListener("keyup", function(e){
        console.log(e);
        switch(e.key){
            
            case " ":
                bird.classList.add("jump");
                setTimeout(() => {
                    Down();
                }, 100);
            break;
        }
    });
    
}

function Down(){

   
        bird.classList.add("padrão");
        Jump();

}

