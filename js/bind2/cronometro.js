const Tempo = document.querySelector("#tempo");
const Submit = document.querySelector("#sumb");
const Res = document.querySelector("#res");


Submit.addEventListener("click", () => {
    Relogio(Tempo.value);

    function Relogio(Tempo){
        this.Tempo = Tempo * 60;
        this.count = 0;
        let Interval = setInterval( () => {
            Res.innerHTML =  this.Tempo -= 1;

            if(this.Tempo == 0){
                clearInterval(Interval);
                Res.innerHTML = `O timer chegou a 0`;
            }
        }, 1000 );
    }

   
});