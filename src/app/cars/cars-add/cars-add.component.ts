import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() updateCarsList: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'id': new FormControl(null),
      'brand': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'model': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'fabYear': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'km': new FormControl(null, Validators.required),
      'engine': new FormGroup({
        'fuelType': new FormControl(null, Validators.required),
        'power': new FormControl(null, [Validators.required, Validators.max(100)]),
        'fuelConsumption': new FormControl(null, Validators.required)
      })
    });
  }

  onSubmit(newCar: Car) {
    this.carsService.addCar(newCar).subscribe( 
      (car: Car) => {
        this.updateCarsList.emit(true);
      },
      error => {
        alert ('Could not retrieve cars!');
      }
    );
    this.form.reset();
  }

  onReset() {
    this.form.reset();
  }
}
