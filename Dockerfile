FROM node:18

WORKDIR /app

COPY package*.json ./

RUN cd server

RUN npm install

COPY . .

ENV PORT=3220

EXPOSE 3220

CMD ["npm", "run", "dev"]



