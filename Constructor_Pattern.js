// Base class as blue print
class Car {
    constructor(name, doors, engine, color) {
        this.name = name;
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

// SUV class extending class Car
class SUV extends Car {
    constructor(name, doors, engine, color) {
        super(name, doors, engine, color);
        this.wheels = 4;
    }
}

// make a new car and a new SUV
const civic = new Car("Honda Civic 2022", 4, "V6", "grey");
const cx5 = new SUV("cx5", 4, "V8", "reg");

// and then print both
console.log(`${civic.name} = ${civic} \n${cx5.name} = ${cx5}`)