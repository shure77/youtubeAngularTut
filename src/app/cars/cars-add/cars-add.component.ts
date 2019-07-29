import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Car } from '../../models/car';
import { CarsService } from 'src/app/shared/cars.service';
import { Engine } from 'src/app/models/engine';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit, OnChanges {

  form: FormGroup;
  fuelTypes = [ '', 'petrol', 'diesel', 'electric'];
  defaultFuelType = 'diesel';

  @Output() updateCarsList: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() selectedCar: Car;

  car: Car = new Car();

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'id': new FormControl(null),
      'brand': new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      'model': new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      'fabYear': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'km': new FormControl(null, Validators.required),
      'engine': new FormGroup({
        'fuelType': new FormControl(null, Validators.required),
        'power': new FormControl(null, [Validators.required, Validators.max(100)]),
        'fuelConsumption': new FormControl(null, Validators.required)
      })
    });
    this.car.engine = new Engine();
    this.car.engine.fuelType = null;
    this.car.engine.fuelConsumption = 0;
    this.car.engine.power = 0;

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.car = this.selectedCar;
    console.log (this.car);
  }

  isAddAction(carId): boolean {
    return isNullOrUndefined(carId) || carId === 0;
  }

  onSubmit(newCar: Car) {
    if(this.isAddAction(newCar.id)) {
      this.carsService.addCar(newCar).subscribe( 
        (car: Car) => {
          this.updateCarsList.emit(true);
        },
        error => {
          alert ('Could not retrieve cars!');
        }
      );
    } else {
      this.carsService.editCar( newCar ).subscribe(
        (car: Car) => {
          this.updateCarsList.emit(true);
        }
      );
    }
    this.form.reset();
  }

  onReset() {
    this.form.reset();
  }
}
