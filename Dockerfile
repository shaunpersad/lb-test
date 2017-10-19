# Node.js version
FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy the source files from host to container
COPY . /usr/src/app