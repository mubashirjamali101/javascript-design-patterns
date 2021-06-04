let instance = null

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
        instance = this;
    }
}

class carFactory {
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, "V8", 'reg')
        }
    }
}

const factory = new carFactory();
const myHonda = factory.createCar('honda');

console.log(myHonda)