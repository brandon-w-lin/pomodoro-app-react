import React from "react";
import Thought from "./thought";

export default function Notepad({ thoughts }) {
  return thoughts.map((thought) => {
    return <Thought key={thought} thought={thought} />;
  });
}
