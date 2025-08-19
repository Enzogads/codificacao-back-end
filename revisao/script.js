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

let n1 = 11
let n2 = 22

let somaAtv3 = n1 + n2
let subtAtv3 = n1 - n2
let multiAtv3 = n1 * n2
let divisãoAtv3 = n1 / n2

console.log(somaAtv3 , subtAtv3 , multiAtv3 , divisãoAtv3)

//Condicional simples e ternário
//4) Peça a idade do usuário. Se for maior ou igual a 18, mostre “Maior de idade”, caso
//contrário “Menor de idade” — faça com if e depois com operador ternário.

let idd = 17;
if(idd >= 18){
    console.log("maior de idade")
}
else{
    console.log("menor de idade.")
}

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
let seTemMaca = frutas.indexOf("maçã")
if(seTemMaca == -1){
    console.log("Não tem maçã")
}
else(
    console.log("Tem maçã")
)


//For e While
//9) Use o laço de repetição for para contar de 1 a 10.

let numRepet = 1
for(i = numRepet; i<=10; i++){
    console.log(i)
}

let numRepet2 = 0

while(numRepet2 < 10){
    numRepet2++
    console.log(numRepet2)
}

//forEach
//10) Crie um array de nomes e exiba cada nome no console com uma frase: "Olá,
//[nome]!".

let nomesAtv10 = [
    "Jusé",
    "Carlo",
    "José Maria"
]

nomesAtv10.forEach(nome => {
    console.log(`Olá ${nome}!`)
});

//map
//11) Crie um array de números e use map para criar um novo array com cada número ao
//quadrado.

let arrayNum = [1,2,3]

const quadrado = arrayNum.map(arrayNum => arrayNum ** 2)

console.log(quadrado)

//filter
//12) Crie um array de idades e filtre apenas as maiores ou iguais a 18.

let iddAtv12 = [13, 18]

maiorDeIdd = iddAtv12.filter(idadesDoArray => idadesDoArray>=18)
console.log(maiorDeIdd)

//Função tradicional e arrow function
//13) Crie uma função tradicional que receba dois números e retorne a soma, e depois faça o
//mesmo com arrow function.

function retornarSoma(a,b){
    return a + b
}

console.log(retornarSoma(10,10))

let retornarSoma2 = (a,b)=>a+b
console.log(retornarSoma2(10,10))




//Função callback
//14) Crie uma função que receba outra função como parâmetro e a execute (ex.: função que
//recebe um nome e imprime no console).


//Função anônima
//15) Crie uma função anônima atribuída a uma variável que receba um número e retorne se
//ele é par ou ímpar.

let parOuImpar = function (a) {
    if(a % 2 == 0){
        console.log("É par")
    }
    else{
        console.log("É Ímpar")
    }
}

console.log(parOuImpar(2))

//Manipulação de JSON
//16) Crie um objeto com nome e idade, converta para JSON e exiba no console. Depois,
//converta de volta para objeto.

let obj = {
    nome: "Enzo",
    idade: 17
}

//Converter para JSON 
let converteParaJson = JSON.stringify(obj); // CONVERTE PARA JSON
let converteParaObj = JSON.parse(converteParaJson); // CONVERTE PARA OBJ

console.log(obj)

//Função assíncrona
//17) Crie uma função async que aguarde 2 segundos e depois exiba "Carregou!".

function esperar () {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Chegou rapidinho");
        }, 2000);
    })
}

esperar()

//Definição de back-end
//18) Explique, com suas palavras, o que é back-end e cite 3 exemplos de tecnologias
//usadas para desenvolvê-lo.

//Back-end -> Conhecido como "por debaixo dos panos", pois, ele não é visual, ele é a codificação para executar uma ação e fazer com que  ela chegue em um resultado esperado

//exemplo1

//exemplo2

//exemplo3
