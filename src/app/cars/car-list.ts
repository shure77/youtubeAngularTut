import { Car } from '../models/car';
import { Engine } from '../models/engine';
//we create a car constant here to make the code cleaner. Instead of having it inside of cars.component.ts

const cars: Car[] = [
    {
        id: 100,
        brand: 'Renault',
        model: 'Clio',
        engine: {
            fuelType: 'petrol',
            power: 100,
            fuelConsumption: 4
        },
        km: 100000,
        price: 7000,
        fabYear: 2003
    },

    {
        id: 101,
        brand: 'VW',
        model: 'Passat',
        engine: {
            fuelType: 'diesel',
            power: 130,
            fuelConsumption: 7
        },
        km: 70000,
        price: 14500,
        fabYear: 2008
    },

    {
        id:102,
        brand: 'Dodge',
        model: 'Journey',
        engine: {
            fuelType: 'diesel',
            power: 140,
            fuelConsumption: 8
        },
        km: 80000,
        price: 8500,
        fabYear: 2007
    }

];

//export the property to make it useable in other files
export default cars;