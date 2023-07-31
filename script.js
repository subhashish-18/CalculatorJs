const display = document.querySelector(".displaymain");
const button = document.querySelectorAll("button");
const specialChars = ["%","*","+","-","/","="];
let output = "";


// Define function to calculate based on button clicked
const calculate =(btnValue) =>{
    display.focus();
    if(btnValue === "=" && btnValue !== "")
    {
        output = eval(output.replace("%","/100"));
    }
    else if(btnValue === "AC"){
        output = "";
    }
    else if(btnValue === "DEL"){
        output = output.toString().slice(0,-1);
    }
    else{
        if(output === "" && specialChars.includes(btnValue))
        return;
        output += btnValue;
    }
    display.value = output;
}

// adding event listener to buttons to call calculate() on click
button.forEach((button) => {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
});