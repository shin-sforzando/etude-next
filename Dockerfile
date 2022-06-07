FROM node:18-buster

WORKDIR /usr/src/app

# RUN npm install -g npm@latest && npm install create-next-app
COPY package.json ./
RUN npm install && mv ./node_modules /
