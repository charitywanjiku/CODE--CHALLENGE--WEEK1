
let prompt=require('prompt-sync')()
//This function helps you to calculate grade of each student.
function calculateGrade(){
    var marks=parseFloat(prompt("Enter student marks:"));//prompts the student to enter their marks
    if(marks>79){
        return "A";
    }else if(marks>=60){
        return "B";
    }else if(marks>=50){
        return "C";
    }else if(marks>=40){
        return "D";
    }else{
        return "E";
    }
}
var grade =calculateGrade()//calls the function
console.log("Grade:",grade);//prints out grade of the student