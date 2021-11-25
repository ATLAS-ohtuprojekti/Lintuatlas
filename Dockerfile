# pull official base image
FROM node:14-slim

# set working directory
WORKDIR /opt/app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY . ./


# start app
CMD ["npm", "start"]
