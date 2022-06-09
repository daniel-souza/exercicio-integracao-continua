const scanf = require('scanf');

const math = require('./math');

const operacoes = ['','+','-','*', '/', '^'];

let opcao;
let resultado = 0;
let numero;
do {
    console.clear();
    console.log("------------- Calculadora v1 --------------");
    console.log("resultado: %f", resultado);
    console.log("-------------------------------------------");
    console.log("0 - Zerar");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Expoente");
    console.log("6 - Sair");
    process.stdout.write("Opção: ");
    opcao = scanf("%d");
    switch(opcao) {
        case 1: case 2: case 3: case 4: case 5:
            process.stdout.write(`Operação: ${resultado} ${operacoes[opcao]} `);
            numero = scanf("%f");
    }
    switch(opcao) {
        case 0:
            resultado = 0;
            break;
        case 1:
            resultado = math.soma(resultado, numero);
            break;
        case 2:
            resultado = math.subtracao(resultado, numero);
            break;
        case 3:
            resultado = math.multiplicacao(resultado, numero);
            break;
        case 4:
            resultado = math.divisao(resultado, numero);
            break;
        case 5:
            resultado = math.potencia(resultado, numero);
    }
} while(opcao != 6);
console.log("Não vá embora, por favor =(");