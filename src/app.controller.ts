// path: src\app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* Decorator que define a classe como um controller, e recebe como parâmetro
um objeto com as propriedades path e useValue. Apartir desse memento, ao
importar o AppController dentro do nosso app.module.ts, o Nest irá reconhecer
que o AppController é um controller e irá adicioná-lo ao array de controllers
do módulo raiz da aplicação. Dentro do nosso controller, podemos definir
métodos que serão mapeados para rotas HTTP, e que irão retornar uma resposta
HTTP para o cliente.
  Como por exemplo, o método getHello() abaixo, que será mapeado para a
rota GET /, e que irá retornar uma string para o cliente. Está na rota /, pois
o path do controller é vazio, e o path do método é vazio também. Caso coloquemos
o path do controller como /app, e o path do método como /hello, o método
getHello() será mapeado para a rota GET /app/hello.
  */
// @Controller('app')
@Controller()
export class AppController {
  /* Por termos colocado o decorator @Injectable() no AppService, o Nest irá
  reconhecer que o AppService é um provider e irá adicioná-lo ao array de
  providers do módulo raiz da aplicação, E estará disponível para todos os
  controllers que o importarem. O Nest só sabe que o AppService é um provider
  porque o decoramos com o decorator @Injectable(), e colocamos ele dentro do
  array de providers do módulo raiz da aplicação.
  */
  constructor(private readonly appService: AppService) {}

  /*Dentro do nosso controller, podemos definir métodos que serão mapeados
  para rotas HTTP, e que irão retornar uma resposta HTTP para o cliente.
  Como por exemplo, o método getHello() abaixo, que será mapeado para a
  rota GET, e que irá retornar uma string para o cliente.
  */

  /* Método GET, mapeia para get, mas poderia ser qualquer método */
  // @Get('hello')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
