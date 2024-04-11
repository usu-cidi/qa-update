FROM node:18

WORKDIR /app

COPY /server /app/
COPY /client/dist /app/

RUN npm install

COPY . .

ENV PORT=3220

EXPOSE 3220

CMD ["npm", "run", "dev"]



