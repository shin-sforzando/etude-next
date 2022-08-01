FROM node:18-bullseye-slim

WORKDIR /usr/src/app

# RUN npm install -g npm@latest && npm install create-next-app
COPY package.json ./
RUN yarn install && mv ./node_modules /
