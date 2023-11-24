const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somatorioDivisiveis3e5Iterativo(numero) {
    let somatorio = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }
    return somatorio;
}

rl.question('Digite um número: ', (numeroInformado) => {
    numeroInformado = parseInt(numeroInformado);
    if (isNaN(numeroInformado)) {
        console.log("Por favor, digite um número válido.");
    } else {

        let resultado = somatorioDivisiveis3e5Iterativo(numeroInformado);
        console.log(`O somatório dos valores divisíveis por 3 ou 5 abaixo de ${numeroInformado} é: ${resultado}`);
    }
    rl.close();
});
