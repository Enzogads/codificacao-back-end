// 30 Exercícios de POO em JavaScript
// (Encapsulamento e Abstração)

// 1 Crie uma classe Pessoa com atributos privados nome e idade, e métodos públicos para
// acessar e alterar esses valores.

    class Pessoa {
        #nome
        #idade
        constructor(nome, idade){
            this.#nome = nome;
            this.#idade = idade;
        }

        setNome(nome){
            this.#nome = nome;
        }

        getNome(){
            return this.#nome;
        }

        setIdade(idade){
            this.#idade = idade;
        }

        getIdade(){
            return this.#idade;
        }
    }