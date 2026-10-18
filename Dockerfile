FROM node:alpine

WORKDIR /app

RUN npm i --global pnpm@latest

COPY package.json .
COPY pnpm-lock.yaml .

COPY . .

CMD ["pnpm", "dev"]

