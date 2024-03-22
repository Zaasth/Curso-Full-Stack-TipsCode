fibonacciGenerator(5);

function fibonacciGenerator(n){


    let numA = 0;
    let numB = 1;
    let numC = 0;
    let fibonacci = "";

    fibonacci += numA + ", "+ numB;
    for(let i = 0; i <= n-3; i++){
        numC = numA + numB;
        fibonacci += ", " + numC;
        numA = numB;
        numB = numC;
    }
    
    console.log(fibonacci);
}