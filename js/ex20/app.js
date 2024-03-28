let carro = {
    name: "Mustang",
    year: 1994,
    estoque: true,
    donos: ["Cleiton", "Jose"],
};

let carro1 = {

}
carro1.name = "Golzin";
carro1.year = 1283;
carro1.donos = ["Pereira", "Wellinton", "Joao", "Igor"];


console.log(carro1.name);
console.log(carro1.year);
console.log(carro1.donos[0]);

let Cliente1 = new NewClient("Joao", 22, "Masculino")

function NewClient(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

let Client = {
    name: "",
    age: 0,
    sex: true,
    id: 0,
}

let RogerioSilva = {

}
RogerioSilva.id = 23;
RogerioSilva.name = "Roger";
RogerioSilva.age = 54;
RogerioSilva.sex = true;

let Pedro = {

}
Pedro.id = 554;
Pedro.name = "Orochi";
Pedro.age = 23;
Pedro.sex = false;

console.log(RogerioSilva, Pedro);

let HouseKeeper1 = {
    Name: "Rosana",
    Age: 34,
    Active: true,
    Paymement: 3.000,
    Jobs: ["Limpar a casa", "Passar roupa", "Passear com os cachorros", "Fazer comida"]
}
let HouseKeeper2 = {}
HouseKeeper2.Name = "Graziela";


console.log(HouseKeeper1.Jobs);
console.log(HouseKeeper2.Name);