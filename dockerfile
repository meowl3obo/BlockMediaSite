FROM node:16-alpine AS builder

RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

ENTRYPOINT ["npm", "run", "start"]