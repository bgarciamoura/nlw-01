FROM node:lts-alpine

# WORKDIR /home/node/app
WORKDIR /app
# WORKDIR /usr/app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install

# RUN npm install typescript@2.7.2

COPY . .

# RUN npx knex migrate:latest --knexfile knexfile.ts migrate:latest

EXPOSE 3333

CMD ["npm", "start"]
# CMD ["npm", "run", "start:dev"]