function Car(model, year, owner) {
    this.model = model;
    this.year = year;
    this.owner = owner;

    let Speed1 = 50;
    let count = 0;
        let Run = setInterval(() => {
            count++;

            console.log(`O carro ${this.model} do ano ${this.year} está acelerando a ${count}Km/h`);

            if(count == 100){
                clearTimeout(Run);
                console.log(`Parabéns ${this.owner}, seu ${this.model} chegou a 100km/h em ${100000 / 1000} segundos!!`)
            }
        }, Speed1);
    };

new Car("Mustang", 2024, "Wellinton Lucas").Run;