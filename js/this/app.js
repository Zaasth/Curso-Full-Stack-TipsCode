
function test1(){
    return this == globalThis;
}
function test2(){
    let users = [1, 2, 3, 4, 5];
    console.log(this);
}
console.log(test2());



const Func = (e) => {
    console.log(e + 10); //Retorna 20
}
Func(10);

const User = function(name, age, married) {
    this.name = name;
    this.age = age;
    this.married = married;
}

let Users = [new User("Wellinton", 21, false), new User("João", 61, true)]
console.log(Users);

const MapAge = (e) =>{
    return `A idade de ${e.name} é ` + e.age + " anos.";
}
const FilterAge = (e) =>{
    return e.age > 30;
}

console.log(Users.filter(FilterAge).map(MapAge)); //[ 'A idade de João é 61 anos.' ]