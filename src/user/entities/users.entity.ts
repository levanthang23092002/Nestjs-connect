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

  @Column({ default: 'quảng nam' })
  address: string;

  @Column({ default: 'pass123' })
  password: string;

  @Column()
  email: string;
}
