FROM node:16.18.0

# Create app directory
WORKDIR /src/app

ADD package.json yarn.lock ./

RUN yarn

# Bundle app source
COPY . .

RUN npm run start
EXPOSE 3000
