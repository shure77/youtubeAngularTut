import { Component, OnInit } from '@angular/core';
import { CarsService } from '../shared/cars.service';
import { Car } from '../models/car';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  cars: Car[];
  total = 0;
  oldest: Car = null;
  mostUsed: Car = null;
  mostExpensive: Car = null;
  mostEfficient: Car = null;

  constructor(private carsService: CarsService) { }

  calculate(): void {
    for(const car of this.cars) {
      this.total += car.price;
      if( isNullOrUndefined(this.oldest) || car.fabYear < this.oldest.fabYear ) {
        this.oldest = car;
      }

      if( isNullOrUndefined(this.mostUsed) || car.km > this.mostUsed.km ) {
        this.mostUsed = car;
      }

      if( isNullOrUndefined(this.mostExpensive) || car.price > this.mostExpensive.price ) {
        this.mostExpensive = car;
      }

      if( isNullOrUndefined(this.mostEfficient) || car.engine.fuelConsumption < this.mostEfficient.engine.fuelConsumption ) {
        this.mostEfficient = car;
      }
    }
  }

  ngOnInit() {
    this.carsService.getCars()
      .subscribe(
        (cars: Car[] ) => {
          this.cars = cars;
          this.calculate();
        },
        error => {
          console.error(error);
          alert('Coult not retrieve cars');
        }
      );
  }

}
