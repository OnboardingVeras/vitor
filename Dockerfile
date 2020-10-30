FROM node:12

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn build

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT [ "./docker-entrypoint.sh" ]

CMD ["yarn", "start"]