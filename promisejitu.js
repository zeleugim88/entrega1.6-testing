const promise = require('./app/promise.js')
test('diferentes funciones matematicas', () => {
    expect(promise.getEmployee(2)).anything();  
    expect(promise.getSalary({id:1, name: "John"})).anything();
})