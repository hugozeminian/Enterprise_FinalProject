FROM node
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3000
#VOLUME [ "/app/message" ]
CMD [ "node", "server.js" ]




