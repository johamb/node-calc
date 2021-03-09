FROM node:current-buster-slim

WORKDIR /app

COPY ./app.js /app/
COPY ./package*.json /app/

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]