# Extend from node:argon which has node and npm installed.
FROM node:argon

# Create the apps directory.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Standard install deps.
COPY package.json /usr/src/app
RUN npm install

# Note: This is supposed to bundle the code I've written into the actual
#       Docker image. However, since this is dev, we'll add with --volume
#
# COPY . /usr/src/app

# Expose private 3000, which the node app will listen to inside the container.
# When running container image, map 8080 to whatever you please -p 3333:8080.
EXPOSE 3000

# And start the app through the package.json run start command.
CMD ["npm", "start"]

