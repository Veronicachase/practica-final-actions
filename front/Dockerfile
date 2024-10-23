FROM node:16 AS builder


WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

COPY --from=builder /app/dist /usr/share/nginx/html

FROM nginx:alpine



# Comprobando que la carpeta 'dist' se ha creado
RUN echo "Contenido de la carpeta /app después del build:" && ls -la /app/dist

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
