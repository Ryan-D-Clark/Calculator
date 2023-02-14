let displayValue = "";
let firstValue = "";
let secondValue = "";
let operation = "";
let result;

document.getElementById("equals").addEventListener("click", () =>{
    displayValue += "="
    updateDisplay()
    calcOperate()
})
document.getElementById("times").addEventListener("click", () =>{
    displayValue += "x"
    operation = "x"
    firstValue = secondValue
    secondValue = ""
    updateDisplay()
})
document.getElementById("divide").addEventListener("click", () =>{
    displayValue += "÷"
    operation = "÷"
    firstValue = secondValue
    secondValue = ""
    updateDisplay()
})
document.getElementById("plus").addEventListener("click", () =>{
    displayValue += "+"
    operation = "+"
    firstValue = secondValue
    secondValue = ""
    updateDisplay()
})
document.getElementById("minus").addEventListener("click", () =>{
    displayValue += "-"
    operation = "-"
    firstValue = secondValue
    secondValue = ""
    updateDisplay()
})
document.getElementById("dot").addEventListener("click", () =>{
    displayValue += "."
    secondValue += "."
    updateDisplay()
})
document.getElementById("clear").addEventListener("click", () =>{
    displayValue = ""
    operation = ""
    firstValue = 0;
    secondValue = 0;
    let display = document.getElementById("display")
    display.innerHTML = "0"
})


document.getElementById("one").addEventListener("click", () =>{
    displayValue += "1"
    secondValue += "1"
    updateDisplay()
})
document.getElementById("two").addEventListener("click", () =>{
    displayValue += "2"
    secondValue += "2"
    updateDisplay()
})
document.getElementById("three").addEventListener("click", () =>{
    displayValue += "3"
    secondValue += "3"
    updateDisplay()
})
document.getElementById("four").addEventListener("click", () =>{
    displayValue += "4"
    secondValue += "4"
    updateDisplay()
})
document.getElementById("five").addEventListener("click", () =>{
    displayValue += "5"
    secondValue += "5"
    updateDisplay()
})
document.getElementById("six").addEventListener("click", () =>{
    displayValue += "6"
    secondValue += "6"
    updateDisplay()
})
document.getElementById("seven").addEventListener("click", () =>{
    displayValue += "7"
    secondValue += "7"
    updateDisplay()
})
document.getElementById("eight").addEventListener("click", () =>{
    displayValue += "8"
    secondValue += "8"
    updateDisplay()
})
document.getElementById("nine").addEventListener("click", () =>{
    displayValue += "9"
    secondValue += "9"
    updateDisplay()
})
document.getElementById("zero").addEventListener("click", () =>{
    displayValue += "0"
    secondValue += "0"
    updateDisplay()
})


function calcAdd(){
    console.log("Add")
    result = parseFloat(firstValue, 10) + parseFloat(secondValue, 10)
    displayValue = result
    updateDisplay()
    resetValues()
}

function calcMinus(){
    console.log("Minus")
    result = parseFloat(firstValue, 10) - parseFloat(secondValue, 10)
    displayValue = result
    updateDisplay()
    resetValues()

}

function calcMultiply(){
    console.log("Multiply")
    result = parseFloat(firstValue, 10) * parseFloat(secondValue, 10)
    displayValue = result
    updateDisplay()
    resetValues()

}

function calcDivide(){
    console.log("Divide")
    console.log(firstValue)
    console.log(secondValue)
    if (firstValue === "0"){
        displayValue = "You tried it..."
        updateDisplay()
        resetValues()
        return
    }
    if (secondValue === "0"){
        displayValue = "You tried it..."
        updateDisplay()
        resetValues()
        return
    }
        result = parseFloat(firstValue, 10) / parseFloat(secondValue, 10)
        displayValue = result
        updateDisplay()
        resetValues()

}

function calcOperate(){
    if (operation === "+"){
        calcAdd()
    }
    if (operation === "-"){
        calcMinus()
    }
    if (operation === "x"){
        calcMultiply()
    }
    if (operation === "÷"){
        calcDivide()
    }
}

function updateDisplay(){
    let display = document.getElementById("display");
    display.innerHTML = displayValue;
}

function resetValues(){
    firstValue = ""
    secondValue = ""
}