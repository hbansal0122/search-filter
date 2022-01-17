FROM node:14.15.4-alpine

LABEL version="1.0"
LABEL description="Basic assignment for Cosuno"
LABEL maintainer = ["hbansal0122@gmail.com"]

RUN mkdir -p /backend
WORKDIR /backend

COPY package.json /backend
COPY package-lock.json /backend

RUN npm install 

COPY . /backend

CMD ["node", "index.js"]