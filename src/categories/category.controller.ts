import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthenticationGuard } from 'src/authentication/jwtAuthentication.guard';
import { FindOneParams } from 'src/utils';
import { CategoriesService } from './category.service';
import { CreateCategoryRequest, UpdateCategoryRequest } from './dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Get(':id')
  getCategoryById(@Param() { id }: FindOneParams) {
    return this.categoriesService.getCategoryById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  createCategory(@Body() category: CreateCategoryRequest) {
    return this.categoriesService.createCategory(category);
  }

  @Patch(':id')
  updateCategory(
    @Param() { id }: FindOneParams,
    @Body() category: UpdateCategoryRequest,
  ) {
    return this.categoriesService.updateCategory(Number(id), category);
  }

  @Delete(':id')
  deleteCategory(@Param() { id }: FindOneParams) {
    return this.categoriesService.deleteCategory(Number(id));
  }
}
