/*
let canShow = true;
console.log(typeof canShow); //boolean
canShow = 1;
console.log(typeof canShow); //number
*/

function calculateBMI(){
    const mass1 = document.getElementById("mass1").value;
    const height1 = document.getElementById("height1").value;
    const mass2 = document.getElementById("mass2").value;
    const height2 = document.getElementById("height2").value;
    let bmi1 = mass1/(height1**2);
    let bmi2 = mass2/(height2**2);
    document.getElementById("bmi1").textContent = bmi1;
    document.getElementById("bmi2").textContent = bmi2;
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    document.getElementById("outputname1").textContent = name1;
    document.getElementById("outputname2").textContent = name2;
    if(bmi1===bmi2){
        document.getElementById("result").textContent = name1 + " and "+name2+" have same BMI, "+bmi1+".";
    }else if(bmi1>bmi2){
        document.getElementById("result").textContent = name1 + "("+bmi1+")'s BMI is higher than " + name2 +"("+bmi2+")'s!!";
    }else{
        document.getElementById("result").textContent = name2 + "("+bmi2+")'s BMI is higher than " + name1 +"("+bmi1+")'s!!";
    } 
}