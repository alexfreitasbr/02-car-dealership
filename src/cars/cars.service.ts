import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'toyota',
      model: 'Corola',
    },
    {
      id: uuid(),
      brand: 'WW',
      model: 'Fusca',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Fiesta',
    },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.findCarById(id);
    if (!car) throw new NotFoundException(`car with the ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const carExist = this.cars.find(
      (item) => item.model === createCarDto.model,
    );

    if (carExist)
      throw new NotFoundException(
        `car with the model ${createCarDto.model} alread exist`,
      );

    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    console.log(this.cars);
    return newCar;
  }

  update(id: string, updateCarDto) {
    let carDB = this.findCarById(id);

    if (carDB && this.cars) {
      this.cars = this.cars.map((car) => {
        if (car.id === id) {
          carDB = { ...carDB, ...updateCarDto, id };

          return carDB;
        }
        return car;
      });
      return;
    }
  }

  findCarById(id: string): Car | undefined {
    return this.cars.find((item) => item.id === id);
  }
}
