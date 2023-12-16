// prompts the user to enter the gross salary
//let prompt =require('prompt-sync')();
/*console.log("Enter your gross salary");

// prompts the user to enter the gross salary
console.log("Enter your benefits");

// Creates a function called paye,parameter= gross income  

function paye (grossSalary){
    if (grossSalary < 24,000 ) {
        console.log(grossSalary * 10/100);
    }
    else if (grossSalary >= 24,000 && grossSalary <= 32,333){
        console.log(grossSalary * 25/100);
    }
    else {
        console.log(grossSalary * 30/100);
    }

}
paye(grossSalary);


// Creates a function called NHIFrates and calculates 
 
function ratesNHIF(grossSalary){
    if (grossSalary >= 0 && grossSalary <= 5999){
        console.log('NHIF : 150');
    } 
    else if (grossSalary >= 6000 && grossSalary <= 7999){
        console.log('NHIF : 300');
    }
    else if (grossSalary >= 8000 && grossSalary <= 11999){
        console.log('NHIF : 400');
    }
    else if (grossSalary >= 12000 && grossSalary <= 14999){
        console.log('NHIF : 500');
    }
    else if (grossSalary >= 15000 && grossSalary <= 19999){
        console.log('NHIF : 600');
    }
    else if (grossSalary >= 20000 && grossSalary <= 24999){
        console.log('NHIF : 750');
    }
    else if (grossSalary >= 25000 && grossSalary <= 29999){
        console.log('NHIF : 850');
    }
    else if (grossSalary >= 30000 && grossSalary <= 34999){
        console.log('NHIF : 900');
    }
    else if (grossSalary >= 35000 && grossSalary <= 39999){
        console.log('NHIF : 950');
    }
    else if (grossSalary >= 40000 && grossSalary <= 44999){
        console.log('NHIF : 1000');
    }
    else if (grossSalary >= 45000 && grossSalary <= 49999){
        console.log('NHIF : 1100');
    }
    else if (grossSalary >= 50000 && grossSalary <= 59999){
        console.log('NHIF : 1200');
    }
    else if (grossSalary >= 60000 && grossSalary <= 69999){
        console.log('NHIF : 1300');
    }
    else if (grossSalary >= 70000 && grossSalary <= 79999){
        console.log('NHIF : 1400');
    }
    else if (grossSalary >= 80000 && grossSalary <= 89999){
        console.log('NHIF : 1500');
    }
    else if (grossSalary >= 90000 && grossSalary <= 99999){
        console.log('NHIF : 1600');
    }
    else {
        console.log('NHIF : 1700')
    }
}
// ratesNHIF(glossSalary);*/


//prompt function
let prompt = require("prompt-sync")();

function calculateNetSalary() {
    //Prompts the user to input their salary and benefits
    let basicSalary = parseFloat(prompt("What is your basic salary?: "));
    let benefits = parseFloat(prompt("What are your benefits?: "));
   //confirms if input is a valid number
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Enter a valid digit");
        return;
    }

    // gross salary = basic salary + benefits
    let grossSalary = basicSalary + benefits;

    //  Declares Paye function to calculate Paye on gross salary
    function paye(grossSalary) {
        if (grossSalary < 24000) {
            console.log('PAYE: ' + grossSalary * 10 / 100);
        } else if (grossSalary >= 24000 && grossSalary <= 32333) {
            console.log('PAYE: ' + grossSalary * 25 / 100);
        } else {
            console.log('PAYE: ' + grossSalary * 30 / 100);
        }
    }

    // Calls the paye function on gross salary
    paye(grossSalary);

    // NHIF function  determines NHIF fee based on gross salary
    function ratesNHIF(grossSalary) {
        let nhifFee;

        
        if (grossSalary >= 0 && grossSalary <= 5999) {
            nhifFee = 150;
        } else if (grossSalary >= 6000 && grossSalary <= 7999) {
            nhifFee = 300;
        }
    //Prints  nhif fee
        console.log('NHIF: ' + nhifFee);
    }

    // Calls the ratesNHIF function
    ratesNHIF(grossSalary);
}

// Calls the main function
calculateNetSalary();
