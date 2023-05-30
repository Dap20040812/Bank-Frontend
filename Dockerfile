# Use a base image with Node.js installed
FROM node:14-alpine


# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .


# Build the React app
RUN npm run build


# Set the command to run the React app when the container starts
CMD ["npm", "start"]