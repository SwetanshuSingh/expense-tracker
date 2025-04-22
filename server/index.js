import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./type-defs/index.js";

async function main() {
  const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
  });

  const { url } = await startStandaloneServer(server);

  console.log(`Server Started at ${url}`);
}

main();
