# path: .docker/start.sh

# Esse arquivo irá iniciar o container do docker

#!/bin/sh

# Toda vez que o container for iniciado, ele irá rodar o comando abaixo
npm install

# Manter o container de pé quando iniciar
tail -f /dev/null #npm run start:dev


# Para rodar esse arquivo, execute o comando abaixo, pois ele precisa de 
# permissão de execução
# chmod +x .docker/start.sh