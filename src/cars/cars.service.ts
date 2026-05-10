import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'toyota',
      model: 'Corola',
    },
    {
      id: 2,
      brand: 'WW',
      model: 'Fusca',
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Fiesta',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {
    const car = this.cars.find((item) => item.id === id);
    if (!car) throw new NotFoundException(`car with the ${id} not found`);

    return car;
  }
}
