import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Results() {
  const poll = useSelector((state: RootState) => state.poll);

  if (!poll.options.length) return null;

  return (
    <div>
      <h2>Redux Stored Poll State</h2>
      {poll.options.map((opt, i) => (
        <p key={i}>
          {opt}: {poll.votes[i]} votes
        </p>
      ))}
    </div>
  );
}