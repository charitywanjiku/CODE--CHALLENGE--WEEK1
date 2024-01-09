


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

