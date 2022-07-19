import React from "react";
import Note from "./Note";

export default function Notepad(props) {
  const { notes, deleteNote } = props;

  return notes.map((note, index) => {
    return (
      <Note
        key={index}
        note={note}
        index={index}
        deleteNote={() => deleteNote(index)}
      />
    );
  });
}
