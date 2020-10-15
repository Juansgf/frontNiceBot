FROM node:latest as builder

COPY . .

RUN npm install

RUN npm run build

FROM debian:stable-slim

RUN apt-get update && apt-get -y install nodejs && apt-get -y install npm

RUN npm install -g serve

COPY --from=builder /build ./build

CMD ["serve", "-s", "build"]