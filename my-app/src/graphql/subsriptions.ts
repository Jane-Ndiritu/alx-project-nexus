import { gql } from "@apollo/client";

export const POLL_UPDATED = gql`
  subscription PollUpdated {
    pollUpdated {
      question
      options
      votes
    }
  }
`;