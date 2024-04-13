const product = [
    '{"id": 1, "name": "Iphone 8 plus", "price": 2600, "fragile": true}',
    '{"id": 2, "name": "Monitor LCD", "price": 1999, "fragile": true}',
    '{"id": 3, "name": "Prato de vidro", "price": 5.80, "fragile": true}',
    '{"id": 4, "name": "Copo de plastico", "price": 1.99, "fragile": false}',
];

const product2 = [
    {id: 1, name: "Iphone 8 plus", price: 2600, fragile: true},
    {id: 2, name: "Monitor LCD", price: 1999, fragile: true},
    {id: 3, name: "Prato de vidro", price: 5.80, fragile: true},
    {id: 4, name: "Copo de plastico", price: 1.99, fragile: false},
];


const ForJson = function(e){
    return JSON.parse(e);
}
const precinho = function(e){
    return e.price;
}
const Idzin = function(e){
    return e.id;
}

const FiltrarPreço = function(e){
    return e.price > 700;
}
const FiltrarFragil = function(e){
    return e.fragile == true;
}

console.log(filtrin); // Retorna [ { id: 2, name: 'Monitor LCD', price: 1999, fragile: true } ]

for (let index = 0; index < product.length; index++) {
    let resPrice = product.map(ForJson).map(precinho)[index];
    let resId = product.map(ForJson).map(Idzin)[index];

    if(resPrice > 2000){
        console.log(`Id: ${resId}, Preço do produto R$ ${resPrice}`);
    } else {
        console.log(`Id: ${resId}, Preço Menor que 2000`);
    }
    
}