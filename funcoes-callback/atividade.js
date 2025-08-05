//Validação de Formulário
//1) Um site precisa validar dados de um formulário de cadastro (nome, e-mail e idade). 
//Crie uma função tradicional para validar o nome e uma arrow function para validar a idade se for maior ou igual a 21.

function validaNome(nome){
    return nome != '' ? nome : "NOME VAZIO"
}

function validaNome2(nome){
    if(nome.lenght > 2){
        return console.log("O nome é válido")
    }
    else console.log("Não existe nome igual ou menor que 2.")

}

const idade = i => console.log(`A idade é ${i}`);
idade(25)
validaNome2("manoel")


//Sistema de autenticação com callback
//2) Um sistema precisa validar se o usuário existe no banco de dados e, caso sim, redirecionar para a área logada. 
//Simular essa autenticação usando uma função login(usuario, senha, callback) onde o callback defineo que fazer após o login.

function login (usuario, senha, callback){
    if(usuario == "ana@email.com"){
        console.log("Existe")
    }
    else console.log("Email inválido.");

    if(senha === 1234){
        console.log("Senha correta");
    }
    else console.log("Senha incorreta");

    callback();
}

login('beatriz@email.com', "4321", () => console.log("Carregando login..."))

//3) Calculadora de Frete com Funções Anônimas
//Um e-commerce calcula o frete com base no peso e região do cliente.
//Criar uma função calcularFrete(peso,regiao) que utilize uma função anônima dentro para aplicar as taxas.

function calcularFrete(peso, regiao){
    const taxaPorRegiao = function (r) {
        switch (r){
            case "norte": return 20; break;
            case "sul": return 10; break;
            case "leste": return 15; break;
            case "oeste": return 12; break;
            default: return 25; break;
        }
    }
    const taxa = taxaPorRegiao(regiao);
    const frete = peso * taxa;
    return frete;
}

console.log(calcularFrete(5, "norte"));
console.log(calcularFrete(3, "sul"))

//4) Crie uma função chamada MULT que receba 3 parametros e retorne a multiplicação deles.
//Depois crie outra funcao chamada MEDIA que calcule a média de três notas eretorne o resultado.

function mult (n1, n2, n3){
    return console.log(n1 * n2 * n3);
}

function media(n1, n2, n3){
    return console.log((n1+n2+n3)/3)
}

mult(2,2,2)
media(10,20,30)

//5) Crie uma função anonima chamada GRITAR que receba como parametro uma string e retorne ela em maiuscula.


//6) Crie uma arrow function que retorne o dobro de números pares.

