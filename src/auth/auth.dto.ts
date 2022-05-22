import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@InputType()
export class LoginUserInput {
  @Field(() => String, { description: 'Username' })
  username: string;

  @Field(() => String, { description: 'Password' })
  password: string;
}

@ObjectType()
export class LoginResponse {
  @Field(() => String, { description: 'Access Token' })
  access_token: string;

  @Field(() => User, { description: 'User Detail' })
  user: User;
}
