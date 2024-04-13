const btn = document.querySelector("#btn");
const pesquisar = document.querySelector("#pesquisar");
const Res = document.querySelector("#Usuarios");

function User(name, age, active) {
    this.name = name;
    this.age = age;
    this.active = active;
}

const Users = [
    new User("Wellinton", 21, true), 
    new User("Carlos", 31, false),
    new User("Igor", 41, true),
    new User("João", 11, true),
];

const Mapzin = function(e){
    const UserUx = `<br>Nome: ${e.name} <br> Idade: ${e.age} <br> Ativo?: ${e.active} <br>`;
    return UserUx.replace("true", "Sim");
}

btn.addEventListener("click", function(){
    const Filtrado = Users.filter(function(e){
        let Input = pesquisar.value;
        return e.name == Input;    
    }).map(Mapzin);
    
    Res.innerHTML = `${JSON.stringify(Filtrado)}`;
});




function filterUser(e){
    return e.name == "Wellinton";
}

const FiltrarUsers = Users.filter(filterUser);



console.log(FiltrarUsers);