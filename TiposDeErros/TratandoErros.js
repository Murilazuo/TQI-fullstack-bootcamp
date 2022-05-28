
function TestArray(array, num){
    try{

        if(!array || !array) throw new ReferenceError("Envie os parâmetros")
        if(typeof array  !== "object") throw TypeError("primeiro parametro precisa ser do tipo array")
        if(typeof num !== "number"  ) throw TypeError("segundo parametro precisa ser to tipo number")
        if(array.length !== num) throw new RangeError("Tamanho do array errado") 
    }catch(e){
        if(e instanceof ReferenceError){
            console.log(`Esse é um erro de ${e.name}`)
            console.log(e.message)
            throw e
        }else if(e instanceof TypeError){
            console.log(`Esse é um erro de ${e.name}`)
            console.log(e.message)
            throw e
        }else if(e instanceof RangeError){
            console.log(`Esse é um erro de ${e.name}`)
            console.log(e.message)
            throw e
        }else{
            console.log("Ocorreu um erro não esperado: " + e)
        }
    }

    return array
}

console.log(TestArray([5,5,5,5,5],5))