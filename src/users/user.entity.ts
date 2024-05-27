import { Exclude, Expose } from 'class-transformer';
import Post from 'src/posts/post.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Address from './address.entity';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Expose()
  @Column({ unique: true })
  public email: string;

  @Expose()
  @Column()
  public name: string;

  @Exclude()
  @Column()
  public password: string;

  @OneToOne(() => Address, (address: Address) => address.user, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public address: Address;

  @OneToMany(() => Post, (post: Post) => post.author)
  public posts: Post[];
}
