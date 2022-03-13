import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'books',
})
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Book ID' })
  id: number;

  @Column()
  @Field(() => String, { description: 'Book Title' })
  title: string;

  @Column()
  @Field(() => String, { description: 'Book ISBN' })
  isbn: string;

  @Column()
  @Field(() => Boolean, { description: 'Is this book published?' })
  isPublished: boolean;

  @Column({
    nullable: true,
  })
  @Field(() => String, { description: 'Book Summary', nullable: true })
  summary?: string;
}
