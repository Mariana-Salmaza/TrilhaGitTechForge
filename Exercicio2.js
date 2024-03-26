// 2.Crie uma função chamada verificaNumero que recebe um número como parâmetro e imprime "É par" se o número for par, e "É ímpar" se for ímpar.
//Teste a função com diferentes números.

function verificaNumero(numero) {
    // Verificação do número se é par ou ímpar
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }
}
// Testando a função com diferentes números
verificaNumero(10); // Saída: 10 é par
verificaNumero(7);  // Saída: 7 é ímpar
verificaNumero(15); // Saída: 15 é ímpar
verificaNumero(20); // Saída: 20 é par
