FROM node:12.17

WORKDIR /app

ARG SERVERLESS_FUNCTION=${SERVERLESS_FUNCTION}

COPY package*.json ./
RUN npm install -g serverless
RUN npm install

COPY . .

CMD npm run watch $SERVERLESS_FUNCTION
