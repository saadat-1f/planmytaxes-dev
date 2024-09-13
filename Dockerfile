FROM node:18

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm install -g next

# COPY ./src/pages .

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


