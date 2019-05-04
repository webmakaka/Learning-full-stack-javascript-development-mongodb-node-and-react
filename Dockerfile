FROM node:10-alpine

RUN apk update && apk upgrade && \
  apk add --no-cache vim bash git 

WORKDIR /project

COPY ./package*.json ./
RUN npm install

COPY . .

RUN npm run webpack
# RUN webpack --mode=production

CMD ["npm", "run", "start"]