# ---- Stage 1: build ----
# Node.js image used only to compile the site; it is thrown away after the build
FROM node:22-alpine AS build

# All following commands run inside /app (created if missing)
WORKDIR /app

# Copy only the dependency files first so the npm ci layer stays cached
# until package.json or package-lock.json actually change
COPY package*.json ./

# Install the exact versions pinned in package-lock.json
RUN npm ci

# Copy the rest of the source code (.dockerignore keeps node_modules, dist, .git out)
COPY . .

# Build the production site into /app/dist
RUN npm run build

# ---- Stage 2: serve ----
# Fresh, small NGINX image; nothing from stage 1 is included unless copied
FROM nginx:alpine

# Copy only the built files from stage 1 into NGINX's default web folder
COPY --from=build /app/dist /usr/share/nginx/html

# Document that NGINX listens on port 80 inside the container
EXPOSE 80

# No CMD needed: the nginx base image already starts NGINX in the foreground
