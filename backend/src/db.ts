export interface Poll {
  question: string;
  options: string[];
  votes: number[];
}

export let poll: Poll | null = null;

export function createPoll(question: string, options: string[]) {
  poll = {
    question,
    options,
    votes: Array(options.length).fill(0),
  };
  return poll;
}

export function addVote(index: number) {
  if (!poll) return null;
  poll.votes[index] += 1;
  return poll;
}
