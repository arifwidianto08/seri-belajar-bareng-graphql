import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => String, { description: 'Book Title' })
  title: string;

  @Field(() => String, { description: 'Book ISBN' })
  isbn: string;

  @Field(() => Boolean, { description: 'Is this book published?' })
  isPublished: boolean;

  @Field(() => String, { description: 'Book Summary', nullable: true })
  summary?: string;
}
