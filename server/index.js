import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./type-defs/index.js";
import connectDb from "./db/connect.js";
import passport from "passport";
import session from "express-session";
import connectMongo, { MongoDBStore } from "connect-mongodb-session";
import { buildContext } from "graphql-passport";
import { configurePassport } from "./passport.config.js";

dotenv.config();
configurePassport();
const app = express();
const httpServer = http.createServer(app);
const mongodbStore = connectMongo(session);

const store = new MongoDBStore({
  uri: process.env.DATABASE_URL,
  collection: "sessions",
});

store.on("error", (err) => console.log("Store Error", err));

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    },
    store: store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  "/",
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => buildContext({ req, res }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
await connectDb();

console.log(`Server Running on - http://localhost:4000/`);
