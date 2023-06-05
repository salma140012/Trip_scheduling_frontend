
FROM node:18.12.1-alpine AS build

WORKDIR /app

#Copying all files from host to the container
COPY package.json package-lock.json ./
COPY . .

#To install node modules
RUN npm install
RUN npm install -g @angular/cli

#To build the angular project based of node
RUN ng build --configuration production --output-path=/dist

#Deploying project on ng server
#Base image from nginx
FROM nginxinc/nginx-unprivileged

#Copy the output of the project run into the nginx container to deploy it
COPY --from=build /dist /usr/share/nginx/html

#To take the nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf



