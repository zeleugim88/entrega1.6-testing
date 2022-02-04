//Nivell 1 - Exercici 1
//Donats els objectes employees i salaries:

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


const getEmployee = (id) => { 
    return new Promise ((resolve, reject) =>{
        const foundId = employees.filter(employees => employees.id === id)
        foundId[0]? resolve(foundId[0]):reject("Id de trabajador no encontrado")
    })
}

const getSalary = (obj) => {
    return new Promise ((resolve, reject) => {
        const foundObject = salaries.filter(salaries => salaries.id === obj.id);
        foundObject[0]? resolve(foundObject[0].salary):reject("La ID del trabajador introducido no está asociada a ningún salario");
    })
}

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


module.exports = {getEmployee, getSalary, fPromise, fAsincrona};

