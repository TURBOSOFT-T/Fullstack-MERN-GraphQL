# Fullstack-MERN-GraphQL
In this guide, we will build an API from scratch with GraphQL, Node JS, Express and MongoDB
What is GraphQL?
GraphQL is a query language created by Facebook. It is an alternative to the REST approach. So if you're coming from the REST world, keep in mind that GraphQL works differently. It has a single endpoint for all kinds of requests, and the method must be a post request

Configuring the GraphQL API
For the API, we will have the ability to create articles and store them with MongoDB, and also be able to retrieve them.

To do this, we need to create a new project by running the following command in the terminal.

    yarn init or npm init || yarn init -y or npm init -y

    Now let's run the following commands on the terminal to install express and nodemon.

    yarn add express
Next, add nodemon as a development dependency.

    yarn add nodemon -D
With that, we can now add a startup script on the package.json file to be able to, as you might guess, start the server.

package.json

GraphQL Schema
A schema describes the shape of your data graph. It defines a set of types with fields that are populated from your main databases.

And to create a schema, we need to install the graphql package by running on the terminal:

    yarn add graphql
Next, we need to add the following code block to create a GraphQL schema.

graphql/schema/index.js

Creating Mongoose Models
As I mentioned before, MongoDB will be used as the database, and to make things easier, we'll be using mongoose to interact with.

And to install it we must execute the following command in the terminal.

  yarn add mongoose
Next, we can now create a template for an article.

models/article.js

GraphQl Solver
A resolver is a collection of functions that generates an answer from a GraphQL query. It handles the request and returns a response. And each query or mutation name must exactly match the name of the resolver function. This means that if we have a query named articles, we should have a resolver function articles().

Now to create resolvers we need to add this code block below in graphql/resolvers/index.js file.

graphql/resolvers/index.js

Connecting the API to MongoDB
If you remember, in the structure folder we had a nodemon.json file, this file will be used now to store our environment variables.

But first you will need to create a new cluster on MongoDB Atlas and get the database username and password.

Then update the credentials with your own.

nodemon.json.

Now that we have the necessary credentials, it's time to connect the API to MongoDB. And to do that, we need to modify app.js a bit.

Test the API with GraphiQL
To access the GraphQL playground, we need to start the server with the following command:

  yarn start
Now if you navigate to http://localhost:3000/graphql you will be able to play with GraphiQL.

Create a new article
To create an article, we must send a mutation request.