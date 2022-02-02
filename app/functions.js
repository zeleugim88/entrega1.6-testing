// Nivell 1
//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 
//Testeja la correcta execució d'aquestes funcions.

const functions = {
    sumar: (...numeros) => numeros.reduce((total, numero) => total += numero),
    restar: (...numeros) => (numeros[0]*2 - numeros.reduce((total, numero) => total += numero)),
    multiplicar: (...numeros) => numeros.reduce((total,numero) => total *= numero),
    dividir : (...numeros) => (numeros.reduce((total, numero) => total /= numero))
};

module.exports = functions;


