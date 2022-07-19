import Timer from "./Timer";
import Notepad from "./Notepad";
import React, { useState, useRef } from "react";

function App() {
  const [notes, setNotes] = useState(["thought 1", "thought 2", "thought 3"]);
  const noteRef = useRef();

  function handleAddNote(e) {
    const note = noteRef.current.value;
    if (note === "") return;
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
    console.log(note);
    noteRef.current.value = null;
  }

  function handleDeleteNote(index) {
    setNotes((prevNotes) => {
      let newNotes = prevNotes.filter((_note, i) => i !== index);
      return newNotes;
    });
  }

  function handleClearNotes() {
    setNotes(() => {
      return [];
    });
  }

  return (
    <>
      <Timer />

      <form>
        <input ref={noteRef} type="text" placeholder="Enter note..."></input>
      </form>
      <button onClick={handleAddNote}>Add note</button>
      <button onClick={handleClearNotes}>Clear notes</button>
      <Notepad notes={notes} deleteNote={handleDeleteNote} />
    </>
  );
}

export default App;
