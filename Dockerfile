FROM node:8.9
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 8888
CMD npm run start-dev