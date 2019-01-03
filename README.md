# Participatory budgeting project for the reading group

This is based off of the "Local Library" tutorial on MDN.

# Running

- `npm install`
- Install mongodb and run it using something like:

```
mongod --dbpath ../mongodb/budgets
```

... Where the path is just the path to some data that can run on a local MongoDB server instance. There doesn't have to be anything in the directory. You can use any path, but if you're running in Ubuntu on Windows 10, try putting the local database in somewhere recognized as an Ubuntu directory, such as /data/db which is the standard mongo path on Linux.

- Run mongo to verify that it worked:

```
mongo
```

- Start the project, using local mongo:

```
env MONGODB_URI=mongodb://localhost/budgeting npm start
```

- Visit in your browser: http://localhost:3000/catalog

If you're using a local database, You should see that there are no books since the database tables are empty.
