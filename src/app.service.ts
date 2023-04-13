// path: src\app.service.ts
import { Injectable } from '@nestjs/common';

/* Decorator que define a classe como um provider, e recebe como parâmetro
um objeto com as propriedades provide e useValue. Apartir desse memento, ao
importar o AppService dentro do nosso app.module.ts, o Nest irá reconhecer
que o AppService é um provider e irá adicioná-lo ao array de providers do
módulo raiz da aplicação, E estará disponível para todos os controllers que
o importarem.
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
