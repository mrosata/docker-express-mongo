Docker Node Express
----
Runs Docker container with node/express/mongo. Serves to localhost:3333 (public), in the container it listens to 8080. Inside the docker container `exp-mongo-app` packages are managed by `npm`, outside of the container I use `yarn` and so that is how I will write these examples:

```sh
  $ # runs the mongo image, then express image linked to mongo.
  $ yarn docker:run
  $ 
  $ # Stop the db container and the express container.
  $ yarn docker:stop
  $
  $ # To start them back up simply use:
  $ yarn docker:start
  $
  $ # A simple restart can be achieved with one or both:
  $ docker restart exp-mongo-app
  $ docker restart exp-mongo-db
  $
  $ # "Recreate" containers ie: 'stop', 'remove' then 'run'
  $ yarn docker:restart
  $
```


To use bash shell inside the container:
```bash
  $ docker exec -it exp-mongo-app /bin/bash
```
