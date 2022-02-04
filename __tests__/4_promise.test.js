//Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

const promises = require('../app/4_promise.js')

test('Promises & Callbacks Nivell 2 - Exercici 3', () => {
  expect.assertions(1); 
  
  return promises.getEmployee(1)
    .then(data => promises.getSalary(data))
    .then(data => expect(data).toEqual(4000))

})