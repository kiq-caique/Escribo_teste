const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somatorioDivisiveis3e5Recursivo(numero, i = 0, somatorio = 0) {
    if (i < numero) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
        return somatorioDivisiveis3e5Recursivo(numero, i + 1, somatorio);
    } else {
        return somatorio;
    }
}


rl.question('Digite um número: ', (numeroInformado) => {
    numeroInformado = parseInt(numeroInformado);
    if (isNaN(numeroInformado)) {
        console.log("Por favor, digite um número válido.");
    } else {
        let resultado = somatorioDivisiveis3e5Recursivo(numeroInformado);
        console.log(`O somatório dos valores divisíveis por 3 ou 5 abaixo de ${numeroInformado} é: ${resultado}`);
    }
    rl.close();
});
