import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryRequest {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  name: string;
}
