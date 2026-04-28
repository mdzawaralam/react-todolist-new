# Step 1: Build
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Step 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html