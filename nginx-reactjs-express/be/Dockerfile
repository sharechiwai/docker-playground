# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of your application code to the container
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Start your Node.js app using nodemon
CMD ["nodemon", "server.js"]
