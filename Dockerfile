# syntax = docker/dockerfile:1
ARG NODE_VERSION=20.8

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

ENV NODE_ENV=production

WORKDIR /src

# Build
FROM base as build

COPY --link package.json package-lock.json /src/
RUN npm install --production=false

COPY --link . .

RUN npm run build
RUN npm prune

# Run
FROM base

ENV PORT=$PORT
# ENV HOST=0.0.0.0
COPY --from=build /src/.output /src/.output
COPY --from=build /src/nuxt.config.ts /src/
COPY --from=build /src/.env /src/
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD node /src/.output/server/index.mjs