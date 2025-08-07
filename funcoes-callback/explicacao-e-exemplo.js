//Funções tradicionais
function concatenacaoPalavras(a, b){
    return a + ' - ' + b; //Ana - Beatriz
}


//Funções anônimas
let saudacao = function () {
    console.log("Oi pessoal")
}

concatenacaoPalavras("Vitor", "Moreira");
saudacao();


//Arrow function

const saudacao1 = ()=> {
    console.log("Oi pessoal")
}


function somar (a, b){ //essa funcao tradicional
    return a + b;
}

const somar2 = (a,b)  => a+b; //é equivalente a essa arrow function

//diferença do This entre arrow functions e funções tradicionais
//array function NÃO POSSO UTILIZAR O THIS 
// FUNÇÕA NORMAL POSSO UTILIZAR O THIS
const obj = {
    nome: "Ana",
    idade: 15,
    saudacao: ()=> {
        console.log("Oi" + this.nome) //Erro (Só funciona em functions normais)
        //equivalente a
        console.log("Oi" + obj.nome) 

    }
}

// FUNCAO CALLBACK

function executar (a, b, c, d, funcaoCallback) {
    console.log("Antes");
    funcaoCallback();
    console.log("Depois");
}

executar(()=>console.log("Executando!!!"))

//Resultado do codigo
//Antes
//Executando
//Depois

// function executar () {
//     retornaErro(erro)
// }

// function retornaErro (erro) {
//     return erro;
// }


//função síncrona

function sincrona () {
    console.log("Vai executar essa linha primeiro")
    console.log("depois essa linha")
    console.log("e por último, essa.")
}
sincrona();

// function teste() {
//     console.log("a");
//     setTimeout(() => {
//         console.log("b")
//     }, 2000);
//     console.log("b")
//     console.log("c")
// }

//Funções que retonam OUTRAS FUNÇÕES

//função 1
function funcao1 (nome) {
    //função 2
    return function (mensagem) {
        console.log(`${mensagem}, ${nome} `);
    }
}

const msgParaLuzia = funcao1("Luzia"); //Função 1
msgParaLuzia("Fala comigo"); //Função 2


//Funções assíncronas

function esperar () {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Demorou, mas chegou");
        }, 5000);
    })
}

//Toda vez que eu fizer uma funcao assincrona eu preciso utilizar o await
async function executar () {
    console.log("esperando...");
    const resultado = await esperar(); //Espera  apromise finalizar com sucesso ou falha
    console.log(resultado);
    console.log("finalizado")
}
executar();

function teste(){
    console.log("a");
    setTimeout(() => {
        console.log("b");
    }, 10000);
    console.log("c");
}

teste()

//resultado desse codigo
// esperando...
// depois de cinco segundos....
// demorou mas chegou


let carro = {
    nome: "Honda civic da Ana Beatriz",
    marca: "Honda",
    modelo: "Civic",
    ano: 2025,
    atributos: ["som","escapamento da porshe do vitos","anteninha do kwid","whatsapp"]
}

console.log(carro.ano); //2025

console.log(carro.atributos[2]); // teto solar

//Adicionar
carro.cor = "Preto com vermelho";

//Alterar
carro.nome = "Honda Civic 2025";

