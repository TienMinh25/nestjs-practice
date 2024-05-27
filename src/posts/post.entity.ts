import { Transform } from 'class-transformer';
import Category from 'src/categories/category.entity';
import User from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column({ nullable: true })
  public category?: string;

  @Column()
  public content: string;

  @ManyToOne(() => User, (user: User) => user.posts)
  public author: User;

  @ManyToMany(() => Category, (category: Category) => category.posts)
  @JoinTable()
  public categories: Category[];
}
