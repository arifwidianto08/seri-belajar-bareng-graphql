import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'User ID' })
  id: number;

  @Column()
  @Field(() => String, { description: 'User Full Name' })
  fullName: string;

  @Column()
  @Field(() => String, { description: `Username` })
  username: string;

  @Column({
    nullable: true,
  })
  @Field(() => Int, { description: 'User Age', nullable: true })
  age?: number;

  @Column()
  password: string;
}
