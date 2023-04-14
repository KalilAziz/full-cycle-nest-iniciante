// path: src\tweets\dto\update-tweet.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateTweetDto } from './create-tweet.dto';

/* O arquivo dto é responsável por conter as configurações de
entidades do banco de dados.
*/

export class UpdateTweetDto extends PartialType(CreateTweetDto) {}
