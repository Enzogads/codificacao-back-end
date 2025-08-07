//Função que retorna função
//1 - Crie uma função criarCalculadora(operador) que retorne outra função capaz de ralizar a operação com dois números. Exemplo de uso:
//const somar = criarCalculadora(+);
//console.log(somar(5,3)); //8

function criarCalculadora(operador){
    return function(a,b){
        switch (operador){
            case '+':
                console.log(a + b);
                break;
                case'*':
                console.log(a * b)
                return 
                default:
                    console.log("Esse operador não faz cálculo")
                    break;
        }
    }
}

const calculadora = criarCalculadora('*');
calculadora(5,5);



//Função Assíncrona
//2 - Cria uma função chamada enviarEmail(destinatario) que:

async function enviarEmail(destinatario){
    console.log(`Enviando email para ${destinatario}`)
    await esperar();
    console.log("Finalizado.");
}

function esperar () {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve("Enviado com sucesso")
            console.log("Enviado com sucesso")
        }, 2000);
    })
}

enviarEmail("ana@email.com")


//Atividade 3

