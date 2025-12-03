import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_POLL } from "../graphql/mutations";

export default function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [createPoll] = useMutation(CREATE_POLL);

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCreate = () => {
    createPoll({ variables: { question, options } });
  };

  return (
    <div>
      <h2>Create Poll</h2>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter poll question"
      />

      {options.map((opt, i) => (
        <input
          key={i}
          value={opt}
          onChange={(e) => updateOption(i, e.target.value)}
          placeholder={`Option ${i + 1}`}
        />
      ))}

      <button onClick={handleCreate}>Create Poll</button>
    </div>
  );
}
