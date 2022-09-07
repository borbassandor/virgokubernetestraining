FROM node:alpine

WORKDIR /app

EXPOSE 8090

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]