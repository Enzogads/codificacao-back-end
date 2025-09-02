class Usuario {
    constructor (nome, email, idade){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }

    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }

    setEmail(email){
        this.email = email;
    }
    getEmail(){
        return this.email;
    }

    setIdade(idade){
        this.idade = idade;
    }
    getIdade(){
        return this.idade;
    }
}

const usuario1 = new Usuario("Manoel", "manoel@", 13);

usuario1.getNome("Manoel");
usuario1.getEmail("manoel@");
usuario1.getIdade(13);

// console.log(usuario1.getNome(), usuario1.getEmail(), usuario1.getIdade())

// Atividade 2
// Contexto: Uma empresa quer organizar seus funcionários em um sistema de back-end. Para isso, você
// precisa criar uma estrutura que permita definir características comuns a todos os funcionários e métodos
// para gerenciar suas informações.
// Comando: Explique como a POO poderia ser aplicada para criar a estrutura de funcionários e quais
// vantagens ela oferece.
// A) Criando uma classe Funcionario que serve como modelo, permitindo instanciar vários objetos com dados
// individuais e métodos compartilhados

// Atividade 3
// Explique a diferença entre classe e objeto em POO.
// Uma classe é uma estrutura para criar objetos, o objeto recebe e armazena os atributos, a partir do "molde", dessa classe.
//
// Qual a diferença de uma classe “Carro” e um objeto “meuCarro”?
//A classe "Carro" é um modelo, "meuCarro" é o objeto que carrega atributos a partir desse modelo.

// Atividade 4
// Liste os atributos e métodos que você colocaria em uma classe “Aluno”
// nome, idade, id e turma

// Atividade 5
// Crie uma classe Livro com atributos título, autor e ano. Instancie dois objetos e exiba suas
// informações no console.

class Livro {
    constructor (titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    setTitulo (titulo) {
        this.titulo = titulo;
    }

    getTitulo () {
        return this.titulo;
    }
}

// primeira instância
const objetoLivro = new Livro();
objetoLivro.setTitulo("O menino do pijama listrado");
let livro = objeto.getTitulo();
console.log(livro);

// segunda instância
const objetoLivro2 = new Livro()
objetoLivro2.setTitulo("A menina que roubava livros");
let livro2 = objeto2.getTitulo();
console.log(livro2)

// ● Atividade 6
// Crie uma classe Calculadora com métodos somar(a, b) e multiplicar(a, b).
// Teste os métodos criando um objeto da classe.

class Calculadora {
    soma (a,b){
        return a + b
    }

    multip (a,b){
        return a*b
    }
}

// Atividade 7
// Crie uma classe Pessoa com um construtor que inicializa nome e idade.
// Crie três objetos diferentes usando o construtor

class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
}

const objHumano1 = new Pessoa("enzo", 17);
console.log(objHumano1.nome)
console.log(objHumano1.idade)