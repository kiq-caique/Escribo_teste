function somatorioDivisiveis3e5Iterativo(numero) {
    let somatorio = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }
    return somatorio;
}

// Exemplo de uso:
let numeroInformado = 11;  // Você pode substituir este valor pelo número desejado
let resultado = somatorioDivisiveis3e5Iterativo(numeroInformado);
console.log(`O somatório dos valores divisíveis por 3 ou 5 abaixo de ${numeroInformado} é: ${resultado}`);
