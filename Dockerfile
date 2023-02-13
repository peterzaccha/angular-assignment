FROM node:lts as build-step
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/dist/ibm-assignment /usr/share/nginx/html
EXPOSE 80
