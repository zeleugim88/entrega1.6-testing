//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1
//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1

const asyncAwait = require('../app/async_await.js')

describe('TEST funciones Async / Await', () => {

    test('TEST Async / Await Nivell 1 - Exercici 1 - getEmployee()', async () => {
        expect.assertions(1); 
        const data = await asyncAwait.getEmployee(1);
        expect(data).toEqual({ "id": 1, "name": "Linux Torvalds" })
    })
    
    test('TEST Async / Await Nivell 1 - Exercici 1 - getSalary()', async () => {
        expect.assertions(1); 
        const data = await asyncAwait.getSalary({ "id": 1, "name": "Linux Torvalds" });
        expect(data).toEqual(4000);
            });

   test('TEST Async / Await Nivell 2 - Exercici 1',async () => {
        return asyncAwait.fPromise()
        .then(data => asyncAwait.fAsincrona(data))
        .then(data => expect(data).toEqual(console.log("Vamoss")))   
            }); 
})

//Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

test('Jest Fake Timers',async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    asyncAwait.fPromise()
    
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
}); 
