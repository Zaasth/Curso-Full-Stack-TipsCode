
//Crio um Factory geral para todas as empregadas
function HouseKeeper(name, age, active, payment, jobs){
    this.name = name;
    this.age = age;
    this.active = active;
    this.payment = "R$ "+payment;
    this.jobs = jobs;
}

//Declaro uma nova empregada e passo os parametros
let HouseKeeper2 = new HouseKeeper("Graziela", 32, true, 2400, ["Limpar a sala", "Lava o banheiro", "Lavar louça"]);
let HouseKeeper3 = new HouseKeeper("Joana", 54, true, 1200, ["Cuidar dos cachorros", "Lavar as escadas"]);

console.log(HouseKeeper2.name); //Chamo o nome da empregada 2 e ele me retorna Graziela
console.log(HouseKeeper3.payment); //Me retorna R$ 1200