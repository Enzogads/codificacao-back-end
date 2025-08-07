//EXEMPLO OPERADOR SPREAD COM OBJ
//COM SPREAD

const dadosAdicionais = {
    rua: "Bertoldo simao de oliveira",
    numero: 23
}
const pessoa = {
    nome: "iasmin",
    idade: 17,
    ...dadosAdicionais
    // PODE SER UTILIZADO PARA DESESTRUTURAR ARRAYS E OBJETOS
}

console.log(pessoa)
