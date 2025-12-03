import { PubSub } from "graphql-subscriptions";
import { poll, createPoll, addVote } from "./db";

const pubsub = new PubSub();
const POLL_UPDATED = "POLL_UPDATED";

export const resolvers = {
  Query: {
    getPoll: () => poll,
  },

  Mutation: {
   createPoll: (
      _: any,
      { question, options }: { question: string; options: string[] }
    ) => {
      const newPoll = createPoll(question, options);
      pubsub.publish(POLL_UPDATED, { pollUpdated: newPoll });
      return newPoll;
    },

   vote: (_: any, { optionIndex }: { optionIndex: number }) => {
      const updatedPoll = addVote(optionIndex);
      pubsub.publish(POLL_UPDATED, { pollUpdated: updatedPoll });
      return updatedPoll;
    },
  },

  Subscription: {
    pollUpdated: {
      subscribe: () => pubsub.asyncIterator(POLL_UPDATED),
    },
  },
};
