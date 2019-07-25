import { Car } from './models/car';

describe('Car', () => {
  it('should create an instance', () => {
    expect(new Car()).toBeTruthy();
  });
});
