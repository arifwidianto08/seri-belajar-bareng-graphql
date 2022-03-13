import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBookInput } from './book.dto';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  async createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return await this.bookService.create(createBookInput);
  }

  @Query(() => [Book])
  async books() {
    return await this.bookService.findAll();
  }

  // @Query(() => Book, { name: 'book' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.bookService.findOne(id);
  // }

  // @Mutation(() => Book)
  // updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
  //   return this.bookService.update(updateBookInput.id, updateBookInput);
  // }

  // @Mutation(() => Book)
  // removeBook(@Args('id', { type: () => Int }) id: number) {
  //   return this.bookService.remove(id);
  // }
}
