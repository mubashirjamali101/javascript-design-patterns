class Car {//Base class as blue print
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class SUV extends Car {//SUv class extending class Car
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;

    }
}

const civic = new Car(4, 'V6', 'grey');//logging new object civic
const cx5 = new SUV(4, "V8", 'reg');//logging new object cx5