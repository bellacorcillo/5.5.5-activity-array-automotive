//this includes the vehicle class as a module
const VehicleModule = require('./vehicle')

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Mecury extends VehicleModule {
    constructor(make, model, year, color, mileage, maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        maximumPassengers = 5;
        passenger = 0;
        numberOfWheels = 4;
        maximumSpeed = 160;
        fuel = 10;
        scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            console.log("Available room!")
        }
    }


    start() {
        if (this.fuel > 0) {
            console.log("Your car is now on")
        }
    }

    service() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

}


let sedan = new Sedan("Mecury", "sedan", 2019, "white", 44000)

sedan.Service()
sedan.start()
sedan.loadPassenger()
