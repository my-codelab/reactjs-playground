import React, { useState } from "react";

const InputName = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    ></input>
  );
};

function FunctionInputComponentWorking() {
  const [name, setName] = useState("");

  return (
    <div>
      <div>Works</div>
      <label>Name: </label>
      <InputName value={name} onChange={setName}></InputName>
      <p>Output (syncronized)</p>
      <p>{name}</p>
    </div>
  );
}

export default FunctionInputComponentWorking;
