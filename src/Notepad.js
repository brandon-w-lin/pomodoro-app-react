import React from "react";
import Thought from "./thought";

export default function Notepad(props) {
  const { thoughts, removeThought } = props;

  return thoughts.map((thought, index) => {
    return (
      <Thought
        key={index}
        thought={thought}
        index={index}
        removeThought={() => removeThought(index)}
      />
    );
  });
}
