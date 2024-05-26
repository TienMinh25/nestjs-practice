import { IsNotEmpty, IsNumberString } from 'class-validator';

export class FindOneParams {
  @IsNumberString()
  @IsNotEmpty()
  id: string;
}
