import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookInput } from './book.dto';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBookInput: CreateBookInput): Promise<Book> {
    const book = this.bookRepository.create(createBookInput);
    return await this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    const books = await this.bookRepository.find();
    return books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  // update(id: number, updateBookInput: UpdateBookInput) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
