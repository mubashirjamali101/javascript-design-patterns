// make a class for the object, that you want to generate over-and-over again.
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
        instance = this;
    }
}


// then make a class for the factory that will generate the desired object at scale for you.
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

// make an instace of the factory first.
const factory = new carFactory();

// then make the desired object using the instance of factory.
const myHonda = factory.createCar('honda');

// then do whatever you are required to do with that object.
console.log(myHonda)