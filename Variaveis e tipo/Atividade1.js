function verificaPalindrome(string){
    if(typeof(string) != "string") return "String inexistente";

    return string.split("").reverse().join("") === string;
}


function verificaPalindrome2(string){
    if(typeof(string) != "string") return "String inexistente";
    
    for (let i = 0; i < string.length/2; i++) {
        if(string[i] !== string[string.length -1 - i]){
            return false
        }
    }
    
    return true
}

console.log(verificaPalindrome2(""))