FROM node:14-slim
ENV NODE_ENV=production
WORKDIR /opt/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent
RUN chmod -R 777 node_modules/ 
COPY . .
EXPOSE 8080
USER node

# start app
CMD ["npm", "start"]
