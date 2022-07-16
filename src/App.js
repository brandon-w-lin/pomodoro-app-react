import "./App.css";
import Timer from "./Timer";
import Notepad from "./Notepad";
import React, { useState } from "react";

function App() {
  const [thoughts, setThoughts] = useState(["thought 1", "thought 2"]);
  return (
    <>
      <Timer />
      <Notepad thoughts={thoughts} />
      <button>Add note</button>
      <button>Clear notes</button>
    </>
  );
}

export default App;
