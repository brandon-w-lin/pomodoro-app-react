import "./App.css";
import Timer from "./Timer";
import Notepad from "./Notepad";
import React, { useState, useRef } from "react";

function App() {
  const [thoughts, setThoughts] = useState(["thought 1", "thought 2"]);
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

  return (
    <>
      <Timer />
      <Notepad thoughts={thoughts} />
      <form>
        <input
          ref={thoughtRef}
          type="text"
          placeholder="Your thoughts..."
        ></input>
      </form>
      <button onClick={handleAddThought}>Add note</button>
      <button>Clear notes</button>
    </>
  );
}

export default App;
