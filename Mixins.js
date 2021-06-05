class Car {//a class is created
    constructor(name, engine, color) {
        this.name = name
        this.color = color
        this.engine = engine
        this.engineStatus = "OFF"
    }

    startEngine() {
        this.engineStatus = "ON"
        return console.log("Vroom Vroom!");
    }

    stopEngine() {
        this.engineStatus = "OFF"
        return console.log("VROOooom...");
    }
}

let carMixin = {// a class is already defined, here we are defining another method out of class to add it in class
    carStatus() {
        return console.log(`${this.name}\'s ${this.engine} engine is ${this.engineStatus}`);
    }
}

Object.assign(Car.prototype, carMixin);//adding method to class, it will be in every object created with new Car()

const myNewCar = new Car("Honda", "V8", "Red");

console.log(myNewCar);