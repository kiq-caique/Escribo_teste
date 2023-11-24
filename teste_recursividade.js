// Desafio Técnico 1 Vaga Dev Escribo

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

// Exemplo de uso:
let numeroInformado = 10;  // Você pode substituir este valor pelo número desejado
let resultado = somatorioDivisiveis3e5Recursivo(numeroInformado);
console.log(`O somatório dos valores divisíveis por 3 ou 5 abaixo de ${numeroInformado} é: ${resultado}`);
