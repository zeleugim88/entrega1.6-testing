const matematicas = require('./matematicas.js')
test('diferentes funciones matematicas', () => {
    expect(matematicas.sumar(2,5)).toBe(7);  
    expect(matematicas.restar(2,5)).toBe(7);
    expect(matematicas.multiplicar(2,5)).toBe(7);
    expect(matematicas.sumar(2,5)).toBe(7);  
})

/* expect(matematicas.restar(4,2)).toBe(2);
    expect(matematicas.multiplicar(3,3).toBe(9);
    expect(matematicas.dividir(9,3).toBe(3)); */
