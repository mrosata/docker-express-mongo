Docker Node Express
----
In order to run the loggly container, you will need a loggly account and token. Then create a script which you should add to .gitignore with the following:

```bash
#!/usr/bin/env bash
# File: "start-script.sh"
# This will run yarn docker with your loggly auth token as $TOKEN.
TOKEN="ADD-YOUR-TOKEN-HERE" yarn docker;
```

Then you can just run `./start-script.sh` to spin up all the containers and run your dev app with logging!

---

Runs Docker container with node/express/mongo. Inside the container it listens on 3000 but if you run using the npm scripts then it will be public at localhost:3333. Inside the docker container `exp-mongo-app` packages are managed by `npm`, outside of the container I use `yarn` and so that is how I will write these examples:

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
