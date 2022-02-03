//Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.

const Animal = require('../app/classes');
const Perro = require('../app/classes')

const mockDadesAnimal = jest.fn();
jest.mock('../app/classes', () => {
  return jest.fn().mockImplementation(() => {
    return {dadesAnimal: mockDadesAnimal};
  });
});

beforeEach(() => {
  Animal.mockClear();
  mockDadesAnimal.mockClear();
});

it('Ver que se puede crear una instancia de perro', () => {
    const perro = new Perro("Perro","Salchicha");
    // Ensure constructor created the object:
    expect(perro).toBeTruthy();
  });
  
  it('Ver si perro llama a la clase constructor de Animal', () => {
    const perro = new Perro();
    expect(Animal).toHaveBeenCalledTimes(1);
  });
  
