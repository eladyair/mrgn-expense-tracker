// GraphQLServer is the server that will be running (A graphql server)
const { GraphQLServer } = require('graphql-yoga');

// Resolvers
const Query = require('./graphql/resolvers/Query');
const Mutation = require('./graphql/resolvers/Mutation');

// Mongoose Models
const Transaction = require('./models/Transaction');

// If the server is running locally (in develop)
if (process.env.NODE_ENV !== 'production') {
    require('custom-env').env();
}

// Requireing the connection to the db function
const connectToDB = require('./database/db');

// Connect to the Database
connectToDB();

const resolvers = {
    Query,
    Mutation
};

const models = {
    Transaction
};

// Setting up the server, will be initilaize with the following:
// 1. The graphql schema (Imported from a file)
// 2. A resolvers object (consists of seperate resolvers files)
// 3. A context (can be an object or a callback that will hold or return the link to the DB, prisma in this case)
//    In this example we are passing the "request" object of an HTTP request
const server = new GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            models
        };
    }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
