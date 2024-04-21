FROM node:21-alpine3.18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM grafana/k6:0.50.0
WORKDIR /app
COPY --from=builder /app/dist /app/dist

ENTRYPOINT ["tail"]
CMD ["-f","/dev/null"]