import React from "react";

export default function thought({ thought }) {
  return (
    <div>
      {thought}
      <button>Remove</button>
      <button>Update</button>
    </div>
  );
}
