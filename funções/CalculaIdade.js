function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30
}
const pessoal2 = {
    nome: 'Mario',
    idade: 26
}
const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
}

console.log(calculaIdade.call(pessoa1,1))
console.log(calculaIdade.apply(animal,[1]))
