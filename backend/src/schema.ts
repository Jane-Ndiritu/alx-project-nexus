import { gql } from "apollo-server";

export const typeDefs = gql`
  type Poll {
    question: String!
    options: [String!]!
    votes: [Int!]!
  }

  type Query {
    getPoll: Poll
  }

  type Mutation {
    createPoll(question: String!, options: [String!]!): Poll
    vote(optionIndex: Int!): Poll
  }

  type Subscription {
    pollUpdated: Poll
  }
`;
