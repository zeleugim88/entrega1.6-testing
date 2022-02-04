//Crea un mock que comprovi les crides al constructor de la classe Persona 
//i al seu mètode decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2

const Persona = require('../app/6-7_classes')

const mockDirNom = jest.fn();
jest.mock('../app/6-7_classes', () => { // Persona is now a mock constructor
  return jest.fn().mockImplementation(() => { //building constructor function
    return {dirNom: mockDirNom};
  });
});

beforeEach(() => {
    Persona.mockClear() // Clear all instances and calls to constructor and all methods
    mockDirNom.mockClear();
}) 

it('Se debería poder crear una Persona nueva pepito', () => {
    const pepito = new Persona();
    // Ensure constructor created the object:
    expect(pepito).toBeTruthy();
  });

it('Al crear una instancia se llama al constructor de la clase', () => {
    const pepito = new Persona();
    expect(Persona).toHaveBeenCalledTimes(1);
  });

it('La instancia pepito de la clase Persona debería poder llamar al método dirNom', () => {
    const pepito = new Persona();
    expect(pepito.dirNom).toBeTruthy();
  });


