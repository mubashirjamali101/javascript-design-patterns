// A base class Car is created
class Car {
  constructor(name, engine, color) {
    this.name = name;
    this.color = color;
    this.engine = engine;
    this.engineStatus = "OFF";
  }

  startEngine() {
    this.engineStatus = "ON";
    return console.log("Vroom Vroom!");
  }

  stopEngine() {
    this.engineStatus = "OFF";
    return console.log("VROOooom...");
  }
}

// Class Car is already defined,
// to add a new method after its declaration
// we use mixins
const carMixin = {
  // carStatus is a new method being defined out of class Car declaration
  carStatus() {
    return console.log(
      `${this.name}'s ${this.engine} engine is ${this.engineStatus}`
    );
  },
};

// Adding method to class Car, it will be in every object created with new Car()
Object.assign(Car.prototype, carMixin);

// Make a new object of Car
const myNewCar = new Car("Honda", "V8", "Red");

myNewCar.startEngine();

// Use the newly added method carStatus
console.log(myNewCar.carStatus());
