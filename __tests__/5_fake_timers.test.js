const asyncAwait = require('../app/5_fake_timers.js')

//Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

test('Jest Fake Timers',async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    asyncAwait.fPromise()
    
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
}); 