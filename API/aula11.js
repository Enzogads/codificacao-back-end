const cep = `88058640`
//Fetch API - Nativo JavaScript
//Método get

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(res => res.json()) // CONVERTE PARA OBJETO
.then(data => console.log(data)) // RECEBE OS DADOS CONVERTIDOS E MOSTRA ELES
.catch(err => console.log(err)) // SE DER ERRO, CAPTURA E MOSTRA O ERRO

// '''''''''''''''''''''''''''''''''''''''''''''''

//Funão que lê os dados do arquivo
function lerDados(arquivo="usuarios.json"){
    //retorna os dados CONVERTIDOS PARA OBJETO
    return JSON.parse(fs.readFileSync(arquivo, 'utf-8')) //
}

//  Salva os dados no arquivo
function SalvarDados(arquivo=usuarios.json, dados) {
    //USA A FUNÃO DE ESCREVER NO ARQUIVO, PASSANDO COMO PARAMETROS O ARQUIVO E UM MÉTODO QUE CONVERTE O OBJETO PARA JSON
    fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2))
}
const http = require('http');
const fs = require ('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    //Define o conteudo da resposta
    res.setHeader("Content-type", "application/json");

    if(req.method === "GET" && req.url === '/dados'){
        const dados = lerDados('usuarios.json'); // retorna os dados do json
        res.writeHead(200);
        res.end(JSON.stringify(dados));
    } else if (req.method == "POST" && req.url === "/dados"){
        let body = '';

        //É um evento que escuta quando os dados chegam
        req.on('data', chunk => {
            body +=- chunk.toString();
        });

        req.on('end', ()=> {
            try { //tudo que der certo ele entra aqui
                const novoDado = JSON.parse(body)

                //Lê O json existente
                const dados = lerDados('usuarios.json');

                //Gera o ID
                novoDado.id = 3

                //Adiciona o novo dado no json
                dados.push(novoDado);

                SalvarDados('usuarios.json', dados)

                res.writeHead(201); //Respondado ao cliente com status 201 (criado com sucesso)
                res.end("Dados adicionados comm sucesso.")

            } catch(error) { //tudo que der errado ele entra aqui
                console.log("Ocorreu um erro: ", error);
                res.writeHead(400)
            }
        })
    } else {
        res.writeHead(404);
        res.end("Pagina não existe.")
    }
});

server.listen(port, () => { //servidor irá rodar na  porta definida
    console.log(`Servidor rodando na porta ${port}. Só abrir localhost:${port}/`)
});

const url = `http://localhost:${port}/dados`;

const objNovoDado = {
    nome: "Ronaldo Emanuel Porsche do Victor",
    idade: 69,
    salario: 150.00,
}

fetch(url, {
    method: "POST",
    headers: {
        'const-type': 'application/json'
    },
    body: JSON.stringify(objNovoDado)
})
.then(response => {
    if(!response)
        console.log("Erro");
    return response.json();
})
.then(data => console.log("Resposta do servidor: ", data))
.catch(error => {
    console.log('Error:', error)
})
