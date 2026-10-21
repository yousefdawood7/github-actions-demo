FROM node:alpine AS prepare

WORKDIR /app
RUN npm i --global pnpm@latest
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm i
COPY . .

FROM prepare AS dev
CMD [ "pnpm", "dev" ]


FROM prepare AS build
CMD [ "pnpm", "start" ]


FROM gcr.io/distroless/nodejs26-debian13 AS prod

WORKDIR /app
COPY --from=prepare /app .
CMD [ "./src/server.js" ]
