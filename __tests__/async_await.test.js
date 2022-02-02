const asyncAwait = require('../app/async_await.js')
test('test funciones con await async', async () => {
    expect.assertions(1);
    const data = await asyncAwait.getEmployee(1);
    expect(data).toEqual({"id": 1, "name": "Linux Torvalds"});
  /*    //devuelve una promesa

      }); */
    /* expect(asyncAwait.getSalary({id: 1,name: 'Linux Torvalds'}).anything());//objectContaining({ //devuelve una promesa
/*         x: expect.anything()//any(Number),
      }),); */  
    /* expect(asyncAwait.fAsincrona(1)).anything() */ //toBeGreaterThan(0);  //sería ilegal que alguien trabajase gratis */
})


// Async Await
/* test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
  }); */