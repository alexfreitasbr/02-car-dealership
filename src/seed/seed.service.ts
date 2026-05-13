import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    // CARS_SEED,
    // BRANDS_SEED,
    this.carsService.fillWithCars(CARS_SEED);
    this.brandsService.fillWithBrands(BRANDS_SEED);
    return `This action returns all seed`;
  }
}
