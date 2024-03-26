// 3.Declare uma string e imprima seu comprimento no console. Converta a string para letras maiúsculas. Divida a string em palavras e imprima cada palavra no console.

// Declaração de uma string
let minhaString = "Olá, mundo!";

// Impressão do comprimento da string no console
console.log("Comprimento da string:", minhaString.length);

// Conversão da string para letras maiúsculas
let stringMaiuscula = minhaString.toUpperCase();

// Impressão da string em letras maiúsculas no console
console.log("String em letras maiúsculas:", stringMaiuscula);

// Divisão da string em palavras
let palavras = minhaString.split(" ");

// Impressão de cada palavra no console
console.log("Palavras na string:");
for (let palavra of palavras) {
    console.log(palavra);
}