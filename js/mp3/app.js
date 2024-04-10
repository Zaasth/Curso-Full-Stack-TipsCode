const JsonTest = [
    {"name": "Iphone", "price": 5.894},
    { "name": "Carderno", "price": 13.90 },
    { "name": "Biblia", "price": 120.00 },
    { "name": "Caneta", "price": 7.50 },
]
const PriceJson = function(e){
    return e.price;
}
const RealJson = function(e){
    return "R$ " + e; 
}
const TextJson = function(e){
    return "O valor é " + e;
}
const output2 = JsonTest.map(PriceJson).map(RealJson).map(TextJson);
console.log(output2);

const JsonTest2 = [
    '{"name": "Iphone", "price": 5.894}',
    '{ "name": "Carderno", "price": 13.90 }',
    '{ "name": "Biblia", "price": 120.00 }',
    '{ "name": "Caneta", "price": 7.50 }',
]

const ForObject = function(json){
    return JSON.parse(json);
}
const Price = function(product){
    return product.price;
}
let result = JsonTest2.map(ForObject).map(Price);

console.log(result); // Retorna [ 5.894, 13.9, 120, 7.5 ]
