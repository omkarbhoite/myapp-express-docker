FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE 9797

CMD node server.js

