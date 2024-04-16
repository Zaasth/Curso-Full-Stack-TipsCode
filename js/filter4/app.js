function User(name, lastname, age, life) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.life = life;
}
const Users = [

    new User("Jhon", "Lucas", 50, true),
    new User("Cleiton", "Felie", 30, false),
    new User("Well", "Lucas", 21, true),
    new User("Igor", "Batizaco", 40, true),
    new User("Lucas", "Samuel", 10, true),

];
let FilterAge = function(element){
    return element.age > 20 && element.lastname == "Lucas";
}

let filtrado = Users.filter(FilterAge);
console.log(filtrado);

Array.prototype.filtrar = function(e){
    const NewArray = [];

    for (let i = 0; i < this.length; i++) {

        NewArray.push(e(this[i]), i, this);
        
    }
}