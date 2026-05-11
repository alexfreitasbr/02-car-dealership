import { IsString } from 'class-validator';

export class CreateCarDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  readonly brand: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  readonly model: string;
}
