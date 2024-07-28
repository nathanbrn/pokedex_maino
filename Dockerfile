FROM node:20.10.0-alpine As build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:20.10.0-alpine
WORKDIR /usr/app
COPY --from=build /app/dist ./
COPY --from=build /app/dist /usr/browser
RUN npm install -g http-server
CMD [ "http-server", "-p", "3000" ]
EXPOSE 3000
