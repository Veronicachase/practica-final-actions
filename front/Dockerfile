FROM node:16 AS builder


WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN echo "Contenido de la carpeta /app después del build:" && ls -la /app/dist

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
