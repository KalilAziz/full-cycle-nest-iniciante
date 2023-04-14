// path: src\tweets\tweets.service.ts
import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

/* O arquivo service é responsável por conter as regras de negócio da aplicação.
 */

@Injectable()
export class TweetsService {
  create(createTweetDto: CreateTweetDto) {
    return 'This action adds a new tweet';
  }

  findAll() {
    return `This action returns all tweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
