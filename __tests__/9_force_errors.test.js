//Utilitzant com a base l'exercici Async / Await Nivells 2 i 3, crea un test que 
//forci errors de funcionament i verifiqui que l'error llançat per la funció és l'esperat.

const asyncAwait = require('../app/2-3_async_await.js')

test('TEST Async / Await Nivell 2 - Exercici 1', async () => {
    return asyncAwait.fPromise()
    .then(data => asyncAwait.fAsincrona(data))
    .then(data => expect(data).toEqual(console.log("changed text")))
    .catch(error => console.log("wrong output"))  
        });     
        
/* 
        it('This test will fail', done => {
  done.fail(new Error('This is the error'))
})

        test('Obi-Wan Kenobi', () => {
            throw new Error('I have failed you, Anakin')
          }) */