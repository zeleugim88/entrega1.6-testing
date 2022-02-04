let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

//==========================================================================================================================================================
//Nivell 2 - Exercici 1
//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
const fPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Vamoss");}, 2000)
    }) 
}

const fAsincrona = async () => {
    try {
        const result = await fPromise();
        console.log(result)
      }
      catch(err) {
        console.log(err.message)
      } 
}


module.exports = {fPromise, fAsincrona};