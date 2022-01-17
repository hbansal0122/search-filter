FROM node:14.15.4-alpine

LABEL version="1.0"
LABEL description="Basic assignment for Cosuno"
LABEL maintainer = ["hbansal0122@gmail.com"]

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend
COPY package-lock.json /frontend

RUN npm install 

COPY . /frontend

CMD ["npm", "start"]