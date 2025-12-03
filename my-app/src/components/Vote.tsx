src/components/Vote.tsx:
import { useSubscription, useMutation } from "@apollo/client";
import { POLL_UPDATED } from "../graphql/subscriptions";
import { VOTE } from "../graphql/mutations";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Vote() {
  const { data } = useSubscription(POLL_UPDATED);
  const [voteMutation] = useMutation(VOTE);

  const poll = data?.pollUpdated;
  if (!poll) return <p>No active poll</p>;

  const chartData = poll.options.map((opt: string, i: number) => ({
    name: opt,
    votes: poll.votes[i],
  }));

  return (
    <div>
      <h2>{poll.question}</h2>

      {poll.options.map((opt: string, i: number) => (
        <button key={i} onClick={() => voteMutation({ variables: { optionIndex: i } })}>
          {opt}
        </button>
      ))}

      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="votes" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
