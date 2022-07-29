import React, { useState } from "react";

function FunctionInputComponentNotWorking() {
  const InputName = ({ value, onChange }) => {
    return (
      <input value={value} onChange={(e) => onChange(e.target.value)}></input>
    );
  };

  const [name, setName] = useState("");

  return (
    <div>
      <div>Not Work</div>
      <label>Name: </label>
      <InputName value={name} onChange={setName}></InputName>
      <p>Output (syncronized)</p>
      <p>{name}</p>
    </div>
  );
}

export default FunctionInputComponentNotWorking;
