FROM node:latest
LABEL maintainer="dragonchaser <matrixtitlebot@datenschmutz.space>"
RUN git clone https://github.com/dragonchaser/matrixTitleBot /matrixTitleBot
WORKDIR /matrixTitleBot
RUN npm install
CMD node titlebot.js

