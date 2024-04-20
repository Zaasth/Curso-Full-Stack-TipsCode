let Double = (num) => {
    return 2*num;
}

Double = num => 2*num;

console.log(Double(4));

//Função Normal
function Hi1(name){
    return `Olá ${name}`;
}
//Usando ArrowFunction
Hi = (name) => {
    return `Olá ${name}`;
}
console.log(Hi("Wellinton")); //Retorna Olá Wellinton