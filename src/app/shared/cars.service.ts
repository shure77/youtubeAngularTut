import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<any> {
    return this.http.get('http://localhost:3000/cars');
  }

  //by calling addCar we do the http-post request. This returns an observable
  addCar(newCar: Car): Observable<any> {
    return this.http.post('http://localhost:3000/cars', newCar);
  }

  editCar(car: Car) {
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
  }

  deleteCar(carId: number) {
    return this.http.delete(`http://localhost:3000/cars/${carId}`);
  }

  getCarById(carId: number) {
    return this.http.get(`http://localhost:3000/cars/${carId}`);
  }
}

