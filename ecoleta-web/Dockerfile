FROM node:lts-alpine

WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./

# RUN rm -rf node_modules

RUN npm install


COPY . .

EXPOSE 3000

CMD ["npm", "start"]