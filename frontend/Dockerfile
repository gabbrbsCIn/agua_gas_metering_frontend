FROM node:18-alpine as build

WORKDIR /frontend


COPY package.json package-lock.json ./
RUN npm install


COPY . .


EXPOSE 80
CMD ["npm", "start"]

