//Nivell 3  Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. 
//Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.

const fs = require('fs');

//=======================> creo el archivo JSON
/* const asyncAwait = require('./async_await.js')
const obj = {"employees": asyncAwait.employees, "salaries": asyncAwait.salaries}
const jsonObj = JSON.stringify(obj);
fs.writeFileSync('asyncAwaitJson.json',jsonObj)  */ 

//importo el JSON
const rawdata = fs.readFileSync('..app/asyncAwaitJson.json');

//meto en variables los arrays de objetos "employees" y "salaries"
const employees = JSON.parse(rawdata).employees;
const salaries = JSON.parse(rawdata).salaries;

//mismas funciones
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

getEmployee(3)
.then(data => getSalary(data))
.then(data => console.log(data))
.catch(error => console.log(error))


module.exports = {getEmployee, getSalary, employees, salaries, rawdata};