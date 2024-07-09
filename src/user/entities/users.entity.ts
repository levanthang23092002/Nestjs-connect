import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  type: string;

  @Column()
  role: string;

  @Column({ default: true })
  address: string;

  @Column({ default: true })
  password: string;

  @Column()
  email: string;
}
