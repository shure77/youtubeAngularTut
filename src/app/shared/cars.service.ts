import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import cars from '../cars/car-list';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[];

  constructor() {
    this.cars = cars;
  }

  getCars() {
    return this.cars;
  }

  addCar(newCar: Car) {
    cars.push(newCar);
    console.log(cars);
  }

  editCar() {}

  deleteCar() {}
}

