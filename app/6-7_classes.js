//Nivell 2 - Exercici 2
//Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 

export default class Persona {
    constructor(nom) {
      this.name = nom;
    }
    dirNom() {
      console.log(this.name);
    }
  };
  
  //Persona.dirNom("Pepito");
  const pepito = new Persona("Pepito");
  pepito.dirNom()
  
  
  //Nivell 3 - Exercici 1
  //Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
  
  export default class Animal {
    constructor(nom, cognom) {
  
      if (this.name = nom,
        this.surname = cognom,
        this.constructor === Animal) {
        throw new Error("No se puede instanciar una clase abstracta")
      };
    }
    dadesAnimal() {
      console.log(this.name + " " + this.surname);
    }
  }
  
  export default class Perro extends Animal {
    constructor(nom, cognom) {
      super(nom, cognom);
    }
  }
  
  const f1 = (nom, cognom) => new Animal(nom, cognom);
  const f2 = (nom, cognom) => new Perro(nom, cognom);
  
  //ERROR: No se puede instanciar una clase abstracta
  //const animal1 = f1("Johny", "Melavo")
  //Se puede instanciar una subclase
  //const perro1 = f2("Esther", "Colero");
  //y acceder a sus datos
  //perro1.dadesAnimal()