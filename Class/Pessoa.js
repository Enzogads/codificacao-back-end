class Pessoa {
    //Inicializar os meus atributos na minha classe
    constructor (nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    
    //Método para definir o nome
    definirNome(nome) {
        this.nome = nome;
    }
    
    pegarNome(){
        return this.nome;
    }
}

//Exportando a classe pessoa
module.exports = Pessoa;