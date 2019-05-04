FROM node:10-alpine

RUN apk update && apk upgrade && \
  apk add --no-cache vim bash git 

WORKDIR /project

COPY ./package*.json ./
RUN npm install
RUN npm install -g webpack

COPY . .

RUN webpack --mode=production

CMD ["npm", "run", "start"]