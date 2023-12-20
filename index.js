//a  function that detects a car speed
    
const prompt = require ('prompt-sync')()
let demeritPoints;
function carSpeed(){
    //Prompts the user to enter the car speed
    var speed = parseFloat(prompt("Enter the car speed:"));
    //Declares the speed limit
    let speedLimit=70;
    //If drivers speed is less than the speedLimit
    if(speed < speedLimit){
        
        console.log("OK");
    }else{//Declares variable named demerit points
        let = demeritPoints = Math.floor((speed-speedLimit)/5);
        console.log(`Your :${demeritPoints}`);
    
     }
    };
    
        //if the the user has more that 12 demerit point the license is suspended
        function licenseSuspension(demeritPoints){
           if (demeritPoints>12){
            //Prints out License suspended
            return "License Suspended";
           }else{
            return "License Not suspended";
           }
        };
        //calling the function
        carSpeed();
        
        // licenseSuspension();
