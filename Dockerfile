FROM node:16-buster

WORKDIR /work

COPY . .

RUN apt update
RUN apt -y upgrade
RUN apt install -y ffmpeg

