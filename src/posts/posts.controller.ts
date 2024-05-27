import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthenticationGuard } from 'src/authentication/jwtAuthentication.guard';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { FindOneParams } from 'src/utils/findOneParamsRequest';
import { CreatePostDto, UpdatePostDto } from './dto';
import PostsService from './posts.service';

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
  getPostById(@Param() { id }: FindOneParams) {
    return this.postsService.getPostById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  createPost(@Body() post: CreatePostDto, @Req() req: RequestWithUser) {
    return this.postsService.createPost(post, req.user);
  }

  @Put(':id')
  @UseGuards(JwtAuthenticationGuard)
  replacePost(@Param() { id }: FindOneParams, @Body() post: UpdatePostDto) {
    return this.postsService.replacePost(Number(id), post);
  }

  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  deletePost(@Param() { id }: FindOneParams) {
    this.postsService.deletePost(Number(id));
  }
}
