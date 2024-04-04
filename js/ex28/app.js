function carro(nome, modelo, dono){
    this.nome = nome;
    this.modelo = modelo;
    this.dono = dono;
}

let Carros = [new carro("Mustang", 2010, "Wellinton"), new carro("Onix", 2015, "Joao"), new carro("Celta", 2000, "Pedro"), new carro("Gol", 2007, "Disponível para compra")];

const btn = document.querySelector("#btn");

const func = function(){
    Carros.forEach((item) => {
        const main = document.querySelector("#mainzin");
        const section = document.createElement("section");
        section.innerHTML = `
            <h1>${item.nome}</h1>
            <p>Modelo: ${item.modelo} </p>
            <p>Dono: ${item.dono} </p>
        `;
        main.appendChild(section);
        
        btn.addEventListener("click", function(){
            //btn.removeEventListener("click", func)
            section.remove()
        });
        
    })
    
    
};

btn.addEventListener("click", func);




