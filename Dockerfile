FROM node:18-bullseye-slim

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

USER node

RUN npm install

RUN npm run build

CMD [ "node", "build/main.js" ]
