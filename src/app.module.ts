// path: src\app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Depois do main.ts, o próximo arquivo a ser analisado é o app.module.ts.
Este arquivo é responsável por importar os módulos da aplicação, bem como
exportar o módulo raiz da aplicação, que é o AppModule.
  O módulo raiz da aplicação é responsável por importar os demais módulos
da aplicação, bem como exportar os controllers e providers que serão
utilizados por estes módulos.
*/

@Module({
  /* Decorator que define a classe como um módulo, e recebe como parâmetro
um objeto com as propriedades imports, controllers e providers.
*/
  // Array de módulos que serão importados pelo módulo raiz da aplicação.
  imports: [],
  /* Array de controllers que serão exportados pelo módulo raiz da aplicação.
  Todos os controllers importados por este módulo também serão exportados
  pelo módulo raiz da aplicação.
  */
  controllers: [AppController],
  /* Array de providers que serão exportados pelo módulo raiz da aplicação.
  Todos os providers importados por este módulo também serão exportados
  pelo módulo raiz da aplicação. Além disso, todos os providers exportados
  por este módulo também serão exportados por todos os módulos que o
  importarem e estaram disponíveis para todos os controllers que o
  importarem.
  */
  providers: [AppService],
})
export class AppModule {}
