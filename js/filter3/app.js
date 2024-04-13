const product = [
    {id: 1, name: "Iphone 8 plus", price: 2600, fragile: true},
    {id: 2, name: "Monitor LCD", price: 1999, fragile: true},
    {id: 3, name: "Prato de vidro", price: 5.80, fragile: true},
    {id: 4, name: "Copo de plastico", price: 1.99, fragile: false},
    {id: 5, name: "Casa de tijolos", price: 30000, fragile: false},
];

const FiltrarPreço = function(e){
    return e.price > 700;
}
const FiltrarFragil = function(e){
    return e.fragile == true;
}

const Filter = product.filter(FiltrarPreço).filter(FiltrarFragil);

console.log(Filter);