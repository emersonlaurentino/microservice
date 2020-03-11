FROM mhart/alpine-node:latest
WORKDIR /usr/src
COPY package.json yarn.lock tsconfig.json .eslintrc /usr/src/
COPY src src
RUN yarn
RUN yarn build
RUN rm -rf src node_modules
RUN yarn --production
ADD . /usr/src
EXPOSE 3000
CMD ["yarn", "start"]