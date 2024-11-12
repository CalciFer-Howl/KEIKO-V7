FROM node:18.16.0-bullseye-slim

RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN yarn install && npm install qrcode-terminal

COPY . .

EXPOSE 5000
CMD ["npm", "start"]
