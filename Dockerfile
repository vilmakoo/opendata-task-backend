FROM ubuntu:16.04
EXPOSE 3000

RUN apt-get update && apt-get install -y curl
RUN apt-get install -y sudo
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN sudo apt install -y nodejs

WORKDIR /app
COPY . .

RUN npm install
CMD ["npm", "start"]