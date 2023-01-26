# MONGOOSE

In MongoDB, our data is gathered together in collection. Made up of one or more collections

Collections are made up of zero or more documents. Each document stores data in JSON-like format called BSON

It's up to whatever is accessing our MongoDB data to enforce structure on the data living in our collections

Mongoose gives us schema objects which are tied to a collection in MongoDB. Each schema maps to the group of documents inside a collection.

Models take a schema and allows a corresponding collection to be queried. The model is like taking the schema that lives in Mongoose and applying it to a collection in MongoDB

To create a model, take a schema and assign it to one of your collections

In our Node.js applications, we can query our models to get the data/documents stored in our MongoDB collections. Can include an CRUD operations

Models give us JavaScript objects we can work with directly in Node.js

Mongoose takes the data as it's represented in MongoDB and allows us to access it as objects in JavaScript

