export class Engine {

    fuelType: 'petrol' | 'diesel' | 'electric';
    power: number;
    fuelConsumption: number;

    //constructor
    Engine() {
        this.fuelType = 'petrol';
        this.power = null;
        this.fuelConsumption = null;
    }

}
