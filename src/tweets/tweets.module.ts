// path: src\tweets\tweets.module.ts
import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';

/*O arquivo module é responsável por conter as configurações de
importação de outros módulos, controllers e providers. */

@Module({
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class TweetsModule {}
