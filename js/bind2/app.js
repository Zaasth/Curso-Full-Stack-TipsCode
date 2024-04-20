function Pessoa() {
    this.age = 0;

    let Intervalo = setInterval( () => {
        this.age++;
        console.log(this.age);
        
        if(this.age == 10){
            clearInterval(Intervalo);
            console.log("Se passaram 10 segundos");
        }
    }, 1000);
}
new Pessoa();
//new Pessoa; //Retorna do 1 ao 10, aqui o this não varia por causa da ArrowFunction(poderia ser usando o bind tbm) e por conta do ClearInterval a função para de ser executada quando chega no 10.
