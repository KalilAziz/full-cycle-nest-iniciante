// path: src\main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*
  Tudo começa pelo main.ts, que é o arquivo principal da aplicação.
Neste arquivo, é criado uma instância do NestFactory, que é responsável
por criar a aplicação Nest. O método create() recebe como parâmetro o
módulo raiz da aplicação, que é o AppModule.
  Por fim, o método listen() é responsável por iniciar o servidor HTTP
da aplicação, que por padrão escuta na porta 3000.
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
