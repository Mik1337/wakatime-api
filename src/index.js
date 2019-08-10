import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import normalizePort from 'normalize-port';
import cors from 'cors';
import path from 'path';
import models from './models';

const config = require('../config');

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schemas')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const app = express();
app.use(cors('*'));

const port = normalizePort(config.port);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
  },
  playground: {
    endpoint: `http://localhost:${port}/graphql`,
  },
});

server.applyMiddleware({ app });

app.listen(port, () => console.log(`🚀 Server Running on http://localhost:${port}`));
