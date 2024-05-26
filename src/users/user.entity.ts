import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
