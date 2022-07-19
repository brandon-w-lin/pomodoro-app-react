import React from "react";

export default function note(props) {
  const { note, index, deleteNote } = props;

  // function handleRemove(index) {
  //   console.log("trying to remove" + index);
  // }

  return (
    <div>
      {note}
      <button onClick={() => deleteNote(index)}>Delete</button>
      <button>Update</button>
    </div>
  );
}
