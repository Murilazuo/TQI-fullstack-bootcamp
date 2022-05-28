function substituiPares(array){
    if(!array || !array.length) return -1

    for (let index = 0; index < array.length; index++){ 
         if(array[index] === 0){
             console.log("Você já é zero!")
         }else if(array[index] % 2 === 0){
             console.log(`Substituindo ${array[index]} por 0...`)
             array[index] = 0;
         }
    }

    return array
}

let arr = [2,22,196,63,8,9,77,0];

console.log(substituiPares(null))