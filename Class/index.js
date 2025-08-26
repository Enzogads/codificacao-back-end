//Importando o arquivo de classe pessoa
import Pessoa from "./Pessoa.js"

//instanciando a classe pPssoa
const pessoa1 = new Pessoa("Ana", 15, "21"); // a  constante pessoa1 é um objeto

pessoa1.definirNome("Ronaldo"); // definindo o nome

let nomePessoa = pessoa1.pegarNome(); // Declarei uma variável chamada nomePessoa que está recebendo o nome  que eu defini

console.log(nomePessoa); // mostra no console o nome