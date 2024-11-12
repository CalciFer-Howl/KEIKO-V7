FROM node:18.16.0-bullseye-slim

RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/CalciFer-Howl/KEIKO-V7.git /ninja
WORKDIR /ninja
RUN npm install
CMD ["npm", "start"]

