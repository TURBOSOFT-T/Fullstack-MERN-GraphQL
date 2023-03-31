const ggl = require('graphql-tag');
const { ApolloServer } = require('apollo-server');

const typeDefs= ggl`
 type user {
    id: ID!
    email: String!
    avatar: String
    friends: [user]!
 }
 type Query {
    me: user!
 }

`;

const resolvers = {
    Query: {
        me: () => {
            return {
                id: 1,
                email: 'thomastuemo@yahoofr',
                avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50', 
                friends: []
            }
        }
    }
}
 
const server = new ApolloServer({ typeDefs, resolvers });
server.listen(8080).then(()=> console.log('Server started on port 8080'));


console.log(query);