function People(name, age) {
    this.name = name;
    this.age = age;
    this.falar = () => {
        return `O cliente ${this.name} tem ${this.age} anos.`;
    }
}

const Peoples = [new People("Wellinton", 21), new People("Lucas", 29), new People("Pedro", 35)];
const Falar1 = Peoples[0].falar();
console.log(Falar1);
//console.log(Peoples[0].falar()); //Retorna O cliente Wellinton tem 21 anos.

const fun = (e) => {
    return e.name != "Wellinton";
}

let filtrar = Peoples.filter(fun);
console.log(filtrar);