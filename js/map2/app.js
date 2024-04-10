const Numbers = [1, 2, 3, 4, 5, 6.3, 7.3, 8.5, 9.9, 10];
const Somar10 = function(e) {
    return e + 10;
}

const Mult3 = function(e){
    return Math.floor(e * 3);
}

const Stringzinha = function(e){
    return "O valor é " + e;
}
let res = Numbers.map(Somar10).map(Mult3).map(Stringzinha);
console.log(res); /* Retorna 
[ 'O valor é 33', 'O valor é 36', 'O valor é 39','O valor é 42','O valor é 45','O valor é 48','O valor é 51','O valor é 55', 'O valor é 59', 'O valor é 60' ]
*/
