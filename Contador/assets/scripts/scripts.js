var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

const max = 10
const min = -10

document.getElementById("subtract").addEventListener("click", decrement)
document.getElementById("sum").addEventListener("click", increment)

function decrement(){
    currentNumber--
    currentNumber = clamp(currentNumber)

    currentNumberWrapper.innerHTML = currentNumber
}

function increment(){
    currentNumber++
    currentNumber = clamp(currentNumber)

    currentNumberWrapper.innerHTML = currentNumber
}

function clamp(number){
    if(number > max){
        number = max
    }else if(number < min){
        number = min
    }

    if(number < 0){
        currentNumberWrapper.style.color = 'red'
    }else{
        currentNumberWrapper.style.color = 'gray'
    }

    return number
}