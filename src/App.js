import Timer from "./Timer";
import Notepad from "./Notepad";
import React, { useState, useRef } from "react";

function App() {
  const [thoughts, setThoughts] = useState([
    "thought 1",
    "thought 2",
    "thought 3",
  ]);
  const thoughtRef = useRef();

  function handleAddThought(e) {
    const thought = thoughtRef.current.value;
    if (thought === "") return;
    setThoughts((prevThoughts) => {
      return [...prevThoughts, thought];
    });
    console.log(thought);
    thoughtRef.current.value = null;
  }

  function handleRemoveThought(index) {
    setThoughts((prevThoughts) => {
      let newThoughts = prevThoughts.filter((_thought, i) => i !== index);
      return newThoughts;
    });
  }

  return (
    <>
      <Timer />

      <form>
        <input
          ref={thoughtRef}
          type="text"
          placeholder="Your thoughts..."
        ></input>
      </form>
      <button onClick={handleAddThought}>Add note</button>
      {/* <button onClick={handleRemoveThought}>Remove thought</button> */}
      <button>Clear notes</button>
      <Notepad thoughts={thoughts} removeThought={handleRemoveThought} />
    </>
  );
}

export default App;
