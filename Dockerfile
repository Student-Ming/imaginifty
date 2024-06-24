# Base Node
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Build
FROM base AS build
WORKDIR /app
COPY . .
RUN npm install

# Release
FROM node:18-alpine AS release
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
EXPOSE 3000
CMD [ "npm", "run", "dev" ]