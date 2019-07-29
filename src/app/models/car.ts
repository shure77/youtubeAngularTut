import { Engine } from './engine';

export class Car {
    id: number;
    brand: string;
    model: string;
    fabYear: number;
    price: number;
    km: number;
    engine: Engine;

    //we need an constructor because we make an instance of selectedCar in the cars.component.ts constructor
    Car() {
        this.id = null;
        this.brand = null;
        this.model = null;
        this.fabYear = null;
        this.price = null;
        this.km = null;
        this.engine = new Engine();
    }

}
