# Stage 1: Build the React project
FROM node:16-alpine AS build

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Accept build arguments and set environment variables
ARG REACT_APP_API_URL
ARG REACT_APP_DEBUG
ENV REACT_APP_API_URL=http://localhost:8081
ENV REACT_APP_DEBUG=$REACT_APP_DEBUG

# Build the React application
RUN npm run build

# Stage 2: Serve the built app using nginx
FROM nginx:stable-alpine

# Copy the build output to nginx's web root
COPY --from=build /build /usr/share/nginx/html

# Copy custom nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 3000 to the outside world
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

