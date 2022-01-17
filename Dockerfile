FROM node:16.13.2-slim
RUN apt-get update

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm ci && npm cache clean --force \
 && mv /app/node_modules /node_modules

COPY . .

ENV PORT 80

EXPOSE 80

CMD node -r dotenv/config ./src/index.js
