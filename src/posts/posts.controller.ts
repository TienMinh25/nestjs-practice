import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto';
import PostsService from './posts.service';
import { JwtAuthenticationGuard } from 'src/authentication/jwtAuthentication.guard';

@Controller('posts')
export default class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get('/:id')
  @UseGuards(JwtAuthenticationGuard)
  getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Put(':id')
  @UseGuards(JwtAuthenticationGuard)
  replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.replacePost(Number(id), post);
  }

  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  deletePost(@Param('id') id: string) {
    this.postsService.deletePost(Number(id));
  }
}
