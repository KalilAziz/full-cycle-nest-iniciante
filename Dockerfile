# path: Dockerfile
# Iremos montar uma imagem com o NodeJS e o NPM instalados

# iremos usar a versão do node 18.16.0, mas slim, pois é a versão mais leve
FROM node:18.16.0-slim

# Iremos instalar o bash, pois o container não vem com o bash instalado
RUN apt install bash

# iremos levantar o container com o usuário node
WORKDIR /home/node/app

# o usuário padrão do container será o node
USER node

# Quando nosso container for iniciado, iremos chamar o arquivo start.sh
CMD [ ".docker/start.sh" ]