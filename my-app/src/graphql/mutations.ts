import { gql } from "@apollo/client";

export const CREATE_POLL = gql`
  mutation CreatePoll($question: String!, $options: [String!]!) {
    createPoll(question: $question, options: $options) {
      question
      options
      votes
    }
  }
`;

export const VOTE = gql`
  mutation Vote($optionIndex: Int!) {
    vote(optionIndex: $optionIndex) {
      question
      options
      votes
    }
  }
`;