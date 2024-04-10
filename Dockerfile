FROM node:18

WORKDIR /app

RUN cd server

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3220

EXPOSE 3220

CMD ["npm", "run", "dev"]



