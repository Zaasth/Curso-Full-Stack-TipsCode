function Carro(nome, motor, dono, preço){
    this.nome = nome;
    this.motor = motor;
    this.dono = dono;
    this.preço = preço;
    this.move = function(){
        console.log("Ande para frente");
    }
}

let carro1 = new Carro("Mustang", 2.0, "Wellinton", 45000);

console.log(carro1.move())

