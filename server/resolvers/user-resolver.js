import { users } from "../data/index.js";

const userResolver = {
  Query: {
    users: () => {
      return users;
    },

    user: (_, { userId }) => {
      return users.find((user) => user._id == userId);
    },
  },
  Mutation: {},
};

export default userResolver;
