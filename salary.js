
// is a function that calculates net salary based on basic salary and benefits as its inputs.

const prompt = require("prompt-sync")();

// calculates PAYE(tax)
function payE(grossPay) {
  if (grossPay <= 24000) {
    return (10 / 100) * grossPay;
  } else if (grossPay >= 24001 && grossPay <= 32333) {
    return (25 / 100) * grossPay;
  } else if (grossPay >= 32334 && grossPay <= 500000) {
    return (30 / 100) * grossPay;
  } else if (grossPay >= 500001 && grossPay <= 800000) {
    return (32.5 / 100) * grossPay;
  } else {
    return (35 / 100) * grossPay;
  }
}

// calculates nssf deductions
function nssfDeductions(grossPay) {
  return (6 / 100) * grossPay;
}

// calculates nhif deductions
function nhifDeductions(grossPay) {
  if (grossPay <= 5999) {
    return 150;
  } else if ((grossPay) => 6000 && grossPay <= 7999) {
    return 300;
  } else if ((grossPay) => 8000 && grossPay <= 11999) {
    return 400;
  } else if ((grossPay) => 12000 && grossPay <= 14999) {
    return 500;
  } else if ((grossPay) => 15000 && grossPay <= 19999) {
    return 600;
  } else if ((grossPay) => 20000 && grossPay <= 24999) {
    return 750;
  } else if ((grossPay) => 25000 && grossPay <= 29999) {
    return 850;
  } else if ((grossPay) => 30000 && grossPay <= 34999) {
    return 900;
  } else if ((grossPay) => 35000 && grossPay <= 39999) {
    return 950;
  } else if ((grossPay) => 40000 && grossPay <= 44999) {
    return 1000;
  } else if ((grossPay) => 45000 && grossPay <= 49999) {
    return 1100;
  } else if ((grossPay) => 50000 && grossPay <= 59999) {
    return 1200;
  } else if ((grossPay) => 60000 && grossPay <= 69999) {
    return 1300;
  } else if ((grossPay) => 70000 && grossPay <= 79999) {
    return 1400;
  } else if ((grossPay) => 80000 && grossPay <= 89999) {
    return 1500;
  } else if ((grossPay) => 90000 && grossPay <= 99999) {
    return 1600;
  } else {
    return 1700;
  }
}

// calculate housing contributuions
function housingLevy(grossPay) {
  return (1.5 / 100) * grossPay;
}

// adds total deductions and subtract from gross salary to get net salary
// callbacks the dedduction functions to access there returns
function allowableDeductions(
  payE,
  nssfDeductions,
  nhifDeductions,
  housingLevy
) {
  let grossPay = Number(prompt("Enter gross salary: "));
  // declares each deduction function
  let tax = payE(grossPay);
  let nssf = nssfDeductions(grossPay);
  let nhif = nhifDeductions(grossPay);
  let housing = housingLevy(grossPay);
  let totalDeductions = tax + nssf + nhif + housing;
  let netPay = grossPay - totalDeductions;

  // prints all the calculations performed by each function
  console.log(
    `Gross pay = ${grossPay}\n  PAYE = ${tax} \n  Social Security contribution = ${nssf} \n  Medical insurance = ${nhif} \n  Housing levy = ${housing} \n  Total deductions = ${totalDeductions}.\n  Net salary = ${netPay}.`
  );
}

// callbacks the functions
allowableDeductions(payE, nssfDeductions, nhifDeductions, housingLevy);
