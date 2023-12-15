const PromptSync = require("prompt-sync");


/*const prompt=require(PromptSync)();
function carSpeed(){
    var speed=parseFloat(prompt("Enter the car speed:"));
    const speedLimit=70;
    if (speed>=speedLimit){
        let demeritPoints=Math.floor((speed-speedLimit)/5);
        console.log(`Points+${demeritPoints}`);//

    }
}
  carSpeed();*/
  /*let prompt=require(PromptSync)();
  let speed = parseInt(prompt("Enter the speed of the car:"));

if (speed >= 70) {
  let demeritPoints = Math.floor((speed - 70) / 5);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
} else {
  console.log("Ok");*/


let prompt = require ('prompt-sync')()
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
        
        licenseSuspension()