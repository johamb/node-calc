FROM node:current-buster-slim

WORKDIR /server

COPY ./server.js /server/
COPY ./package*.json /server/

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]