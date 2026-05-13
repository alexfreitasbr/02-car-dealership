import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brandDB = this.findOne(id);
    this.brands.map((brand) => {
      if (brand.id === id) {
        ((brandDB.updateAt = new Date().getTime()),
          (brandDB.name = updateBrandDto.name));
        return brandDB;
      }
      return brand;
    });
  }

  remove(id: string) {
    if (this.findOne(id)) {
      this.brands = this.brands.filter((brand) => {
        if (brand.id !== id) {
          return brand;
        }
      });
    }
  }

  fillWithBrands(brands: Brand[]) {
    this.brands = brands;
  }
}
