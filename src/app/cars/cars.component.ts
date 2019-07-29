import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarsService } from '../shared/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;

  constructor(private carService: CarsService) {
    this.selectedCar = new Car();
  }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe(
      (cars: Car[]) => {
        this.cars = cars;
      }
    );
  }

  editCar(carId: number) {
    this.selectedCar = this.cars.find( (elem:Car) => elem.id === carId );
    //ALTERNATIVE zum Network Call um Anfragen zu reduzieren (gut wenn der Status in der Applikation dem Status in der Datenbank entspricht)
    console.log('Selected', this.selectedCar);
    // NETWORK CALL
    // this.carService.getCarById(carId)
    //   .subscribe(
    //     ( car ) => {
    //       this.selectedCar = car;
    //       console.log(this.selectedCar);
    //     },
    //     error => {
    //       alert('Could not retrieve car with id ' + carId);
    //     }
    //   );
  }

  deleteCar(carId: number) {
    this.carService.deleteCar(carId)
    .subscribe(
      (car: Car) => {
        this.getCars();
      }
    )
  }
}

