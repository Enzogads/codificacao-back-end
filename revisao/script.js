//Variáveis e tipos de dados
//1) Crie variáveis para armazenar: seu nome, idade, se você gosta de programar, sua altura,
//uma lista de 3 cores favoritas e um objeto com nome e idade.

let nomeIdade = {
    nome: "Enzo",
    idade: 17
}

let gostaDeProgramar = true;

let altura = 1.87;

let cores = {
    cor1: "black",
    cor2: "red",
    cor3: "purple"
}


//Conversão de tipos
//2) Receba uma string "42" e converta para número. Depois, some com mais 10 e exiba o
//resultado.

let string = "42";
let conversao = parseInt(string)
let soma = conversao + 10
console.log(soma)

//Operadores aritméticos
//3) Peça ao usuário (prompt) dois números e exiba: soma, subtração, multiplicação e divisão
//deles no console.

//vamo pular :(

//Condicional simples e ternário
//4) Peça a idade do usuário. Se for maior ou igual a 18, mostre “Maior de idade”, caso
//contrário “Menor de idade” — faça com if e depois com operador ternário.

//vamo pular :(

//Switch
//5) Crie um programa que receba um número de 1 a 7 e retorne o dia da semana
//correspondente.

let diaSemana = 1;

switch(diaSemana){
    case 1:
        console.log("Domingo")
        break;
    
    case 2:
        console.log("Segunda-feira")
        break;

    case 3:
        console.log("Terça-feira")
        break;

    case 4:
        console.log("Quarta-feira")
        break;

    case 5:
        console.log("Quinta-feira")
        break;

    case 6:
        console.log("Sexta-feira")
        break;

    case 7:
        console.log("Sábado")
        break;

    default:
        console.log("A semana só tem 7 dias, desgraça!")
}

//Operadores lógicos e relacionais
//6) Crie um código que verifique se um número está entre 10 e 20 e é par.

let numPar = 9

if(numPar <= 20 && numPar >= 10 && numPar %2 == 0){
    console.log("É PÁ e está entre 10 e 20")
}
else{
    console.log("O numero não está entre 10 e 20 e/ou não é par.")
}

// Métodos de string
// 7) Peça um nome e exiba:
// a) Nome todo em maiúsculas
// b) Nome todo em minúsculas
// c) Quantidade de caracteres

let nomeString = "Carlos"

console.log(nomeString.toUpperCase());
console.log(nomeString.toLowerCase());
console.log(nomeString.length);


//Métodos de array
//8) Crie um array de frutas e use métodos para: adicionar uma fruta no final, remover a
//primeira, verificar se existe “maçã” e exibir o array final.

let frutas = [ "maçã", "banana", "abacaxi", "uva", "melancia", "morango", "jaca", "kiwi"]
frutas.push("Manoel")
frutas.pop()
frutas.splice(0,1)
frutas.indexOf("maçã")
if()
console.log(frutas)
