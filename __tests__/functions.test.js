const matematicas = require('../app/functions.js')
test('diferentes funciones matematicas', () => {
    expect(matematicas.sumar(2,5,4)).toBe(11);  
    expect(matematicas.restar(10,5,2)).toBe(3);
    expect(matematicas.multiplicar(2,5,3)).toBe(30);
    expect(matematicas.dividir(10,2,5)).toBe(1);  
})

