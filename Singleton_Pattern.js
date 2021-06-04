let instance = null; // creating instace as null so class Car's constructor can called

class Car {
    constructor(doors, engine, color) {
        if (!instance) {//checking if instance is not already created
            this.doors = doors;
            this.engine = engine;
            this.color = color;
            instance = this;
        } else {//returning instance if it is already created
            return instance;
        }
    }
}

const civic = new Car(4, 'V6', 'grey');
const honda = new Car(2, "V8", 'reg')

console.log(civic)
console.log(honda)