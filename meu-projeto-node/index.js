//Chamando o chalk pra rodar
const chalk = require('chalk');

//falando q funciona o servidor
console.log(chalk.green('Servidor iniciado com sucesso!'));


//ARGUMENTOS QUE PEGA DO CMD
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

//Requerindo a soma
const soma = require('./utils/soma');

//soma dos argumentos que coloca no CMD
console.log("Soma:", a + b);

const subtracao = require('./utils/subtracao');
console.log("Subtração: ", subtracao(a,b))

const multiplicacao = require('./utils/multiplicacao');
console.log("multiplicação", multiplicacao(a,b))


