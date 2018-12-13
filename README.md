# Participatory budgeting project for the reading group

This is based off of the "Local Library" tutorial on MDN.

# Running

- `npm install`
- Install mongodb and run it using something like:

```
mongod --dbpath ../mongodb/budgets
```

- Run mongo to verify that it worked:

```
mongo
```

- Start the project, using local mongo:

```
env MONGODB_URI=mongodb://localhost/budgeting npm start
```

- Visit in your browser: http://localhost:3000/catalog
