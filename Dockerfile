FROM node:16-alpine3.15

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

WORKDIR /app
RUN chown -R node:node /app
USER node

ENV NODE_ENV development

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

COPY --chown=node:node . .


EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]