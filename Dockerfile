# Step 1: Use an official Node.js image from Docker Hub
FROM node:18

# Step 2: Set the working directory in the container to /app
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Set NODE_ENV to production
ENV NODE_ENV=production

# Step 5: Install dependencies in the container
RUN npm install --production

# Step 6: Copy the rest of the application files to the container
COPY . .

# Step 7: Expose the port your app runs on (6001 in your case)
EXPOSE 6001

# Step 8: Start the app
CMD ["npm", "start"]
