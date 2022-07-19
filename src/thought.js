import React from "react";

export default function thought(props) {
  const { thought, index, removeThought } = props;

  // function handleRemove(index) {
  //   console.log("trying to remove" + index);
  // }

  return (
    <div>
      {thought}
      <button onClick={() => removeThought(index)}>Remove</button>
      <button>Update</button>
    </div>
  );
}
