import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User Full Name' })
  fullName: string;

  @Field(() => String, { description: `Username` })
  username: string;

  @Field(() => Int, { description: 'User Age', nullable: true })
  age?: number;

  @Field(() => String, { description: `Username` })
  password: string;
}
