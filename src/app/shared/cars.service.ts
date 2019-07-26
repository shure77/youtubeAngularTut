import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import cars from '../cars/car-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[];

  constructor(private http: HttpClient) {
    this.cars = cars;
  }

  getCars() {
    return this.cars;
  }

  //by calling addCar we do the http-post request. This returns an observable
  addCar(newCar: Car): Observable<any> {
    cars.push(newCar);
    console.log(cars);
    return this.http.post('http://localhost:3000/cars', newCar);
  }

  editCar() {}

  deleteCar() {}
}

