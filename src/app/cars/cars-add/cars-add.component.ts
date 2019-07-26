import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Car } from '../../models/car';
import { CarsService } from 'src/app/shared/cars.service';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {

  form: FormGroup;
  fuelTypes = [ '', 'petrol', 'diesel', 'electric'];
  defaultFuelType = 'diesel';

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'brand': new FormControl(null, Validators.required),
      'model': new FormControl(null, Validators.required),
      'fabYear': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'km': new FormControl(null, Validators.required),
      'engine': new FormGroup({
        'fuelType': new FormControl(null, Validators.required),
        'power': new FormControl(null, Validators.required),
        'fuelConsumption': new FormControl(null, Validators.required)
      })
    });
  }

  onSubmit(newCar: Car) {
    this.carsService.addCar(newCar);
    console.log('hi');
  }

  onReset() {
    this.form.reset();
  }
}
