# Stage 1
FROM node:14 as build-stage

WORKDIR /react-jwt-auth
COPY package.json .
RUN npm install
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN npm run build

# Stage 2
FROM nginx:1.20.2-alpine

COPY --from=build-stage /react-jwt-auth/build /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/nginx.conf
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'
