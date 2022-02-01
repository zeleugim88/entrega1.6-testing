// Nivell 1
//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 
//Testeja la correcta execució d'aquestes funcions.


const sumar = (...numeros) => numeros.reduce((total, numero) => total += numero);

const restar = (...numeros) => (numeros[0]*2 - numeros.reduce((total, numero) => total += numero));

const multiplicar = (...numeros) => numeros.reduce((total,numero) => total *= numero);

const dividir = (...numeros) => (numeros.reduce((total, numero) => total /= numero));
