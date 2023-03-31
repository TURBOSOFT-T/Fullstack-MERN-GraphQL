const express = require('express')
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')
const graphqlSchema = require('./graphql/schema')
const graphqlResolvers = require('./graphql/resolvers')


const app = express()

app.use('/graphql', graphqlHttp({
    schema:graphqlSchema,
    rootValue:graphqlResolvers,
    graphiql: true
}))

//const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-uox7n.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const uri =
  ' mongodb+srv://tuemothomas:admin123@cluster0.b0gmihk.mongodb.net/?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(uri, options)
        .then(() => app.listen(3000, console.log('Server in running   on port 3000')))
        .catch(error => { throw error })
