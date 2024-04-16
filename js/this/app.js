function i(n, num=0){
    if(num <= n){
        if(num % 1000000 == 0){
            console.log(num);
        }
        i(n, num+1);
    }
}

i(1000000);

const n = 0;
if(n > 10){
    return console.log("Seu número é maior que 10")
} else if(n > 20){
    
}