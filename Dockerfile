# Dockerfile
FROM node:18.18-alpine

# Create the directory on the node image
RUN mkdir -p /app

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies in /app
RUN npm install

# Copy the rest of our Next.js folder into /app
COPY . .

# Ensure port 8080 is accessible to our system
EXPOSE 8081

# Run dev, as we would via the command line
CMD npm run dev