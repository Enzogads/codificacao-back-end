// Crie uma classe Produto com atributos privados nome e preco. Implemente métodos get e set
// para ambos.

    class Produtos {
        #nome;
        #preco;

        constructor(nome, preco){
            this.#nome = nome
            this.#preco = preco
        }

        setNome(nome){
            this.#nome = nome;
        }

        getNome(){
            return this.#nome;
        }

        setPreco(preco){
            this.#preco = preco;
        }

        getPreco(){
            return this.#preco;
        }

    }