# todo-app-rma

##Installation

```
npm install
```

##Server Setup

####START (local) mongoDB services and express server

After installing start mongodb service by defining a custom db directory path (uses /data/db/ as default but has permission restrictions on mac osx)


```
mongod --dbpath /Users/[user]/data/db
```

####Start server that we create in server.js by using express and mongoose

```
npm start
```

or 

```
node server.js
```

what we need:

node.js, npm, and mongoDB
use homebrew on osx to install mongodb at least

#### INSTALL NODE / NPM WITH BREW

```
brew install node
```

--> will install NPM too

#### INSTALL MONGODB WITH BREW
```shell
brew install mongodb
```

https://docs.mongodb.com/manual/installation/


#### REST API 

````
url             HTTP Method  Operation
/api/tasks      GET          Get an array of all tasks
/api/tasks/:id  GET          Get the task with id of :id
/api/tasks      POST         Add a new task and return the task with an id attribute added
/api/tasks/:id  PUT          Update the task with id of :id
/api/tasks/:id  DELETE       Delete the task with id of :id


