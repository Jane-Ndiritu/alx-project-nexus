import express from "express";
import http from "http";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { useServer } from "graphql-ws/lib/use/ws";
import { WebSocketServer } from "ws";
import { makeExecutableSchema } from "@graphql-tools/schema";

async function startServer() {
  const app = express();
  app.use(cors());

  const httpServer = http.createServer(app);
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  // WebSocket Server
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  useServer({ schema }, wsServer);

  // Apollo HTTP Server
  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const PORT = 4000;
  httpServer.listen(PORT, () =>
    console.log(`🚀 server ready at http://localhost:${PORT}/graphql`)
  );
}

startServer();
