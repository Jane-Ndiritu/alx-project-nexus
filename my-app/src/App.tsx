import CreatePoll from "./components/CreatePoll";
import Results from "./components/Results";
import Vote from "./components/Vote";


export default function App() {
  return (
    <div>
      <h1>Online Poll System</h1>
      <CreatePoll />
      <Vote />
      <Results />
    </div>
  );
}