
const info = document.querySelector("#info");
const PokeID = document.querySelector("#pokeID");
const PokeIMG = document.querySelector("#pokeIMG");
const PokeName = document.querySelector("#name");
const Input = document.querySelector("#textin");
const btn = document.querySelector("#btn");

function GerarPoke(idPoke){
    
        let url = `https://pokeapi.co/api/v2/pokemon/${idPoke}`
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if(idPoke <= 1025){
                    console.clear();
                    console.log(data);
                    PokeName.innerHTML = "nome: "+data['name'];
                    PokeID.innerHTML = "Id Pokedex: "+data['id'];
                    let img = data['sprites']['front_default'];
                    PokeIMG.setAttribute('src', img);
                    console.log(data);
                } else if(idPoke > 1025){
                    
                    alert("id invalido");
                    PokeName.innerHTML = "Pokemon não encontrado"
                }
                
            });
}


btn.addEventListener("click", function(){
    idPoke = Number(Input.value);
    GerarPoke(idPoke);
});