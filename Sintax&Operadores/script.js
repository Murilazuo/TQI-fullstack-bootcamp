function CheckNumbers(num1, num2){
    if(!num1 || !num2) return "Insira números!"

    const sum = num1 + num2
    let isEqual = ""
    let check10 = ""
    let check20 = ""

    num1 === num2 ? isEqual = "" :  isEqual = "não"
    sum > 10 ? check10 = "maior" : check10 = "menor"
    sum > 20 ? check20 = "maior" : check20 = "menor"

    return `Os numeros ${num1} e ${num2} ${isEqual} são iguais. Sua soma é ${sum}, e é ${check10} que 10 e ${check20} 20.` 
}

console.log(CheckNumbers(3,5))