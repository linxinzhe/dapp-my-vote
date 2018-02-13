FROM node:8.9
COPY package.json /app/package.json
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
COPY . .
EXPOSE 8888
CMD npm run start-dev