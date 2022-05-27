function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'))
    
    let num1 = Number(prompt("Insira o primeiro numero"))
    let num2 = Number(prompt("Insira o segundo numero"))
    let resultado;
    
    function soma() {
        resultado = num1 + num2
        alert(`${num1} + ${num2} = ${resultado}`)
    }
    function subtracao() { 
        resultado = num1 - num2
        alert(`${num1} - ${num2} = ${resultado}`)
    }
    function multiplicacao() { 
        resultado = num1 * num2
        alert(`${num1} * ${num2} = ${resultado}`)
    }
    function divisaoReal() { 
        resultado = num1 / num2
        alert(`${num1} / ${num2} = ${resultado}`)
    }
    function divisaoInteira() { 
        resultado = num1 % num2
        alert(`o resto de ${num1} e ${num2} é igual ${resultado}`)
    }
    function potenciacao() { 
        resultado = num1 ** num2
        alert(`potenciação de ${num1} é ${num2} = ${resultado}`)
    }

    switch (operacao){
        case 1:
            soma()
            break;
        case 2:
            subtracao()
            break;
        case 3:
            multiplicacao()
            break;
        case 4:
            divisaoReal()
            break;
        case 5:
            divisaoInteira()
            break;
        case 6:
            potenciacao()
            break;
        default:
            alert('Operação inválida')
            calculadora()
            break;
    }
}

calculadora();

