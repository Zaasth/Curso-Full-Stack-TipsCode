let output = [];
        let count = 1;

        DizzBuzz();
        
        function DizzBuzz(){
            
            output.push(count);
            count++
            console.log(output);
            

            if(count % 3 === 0){
                console.log("Dizz");
            }else if(count % 5 === 0){
                console.log("Buzz");
            }
            else {
                console.log(count);
            }
            
            
        }