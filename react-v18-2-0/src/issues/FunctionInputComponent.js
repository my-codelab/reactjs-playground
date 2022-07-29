import React, { useState } from "react";
import { Link } from "react-router-dom";

function FunctionInputComponent() {
  const InputName = ({ value, onChange }) => {
    return (
      <input value={value} onChange={(e) => onChange(e.target.value)}></input>
    );
  };

  const [name, setName] = useState("");

  return (
    <div>
      <label>Name: </label>
      <InputName value={name} onChange={setName}></InputName>
      <p>Output (syncronized)</p>
      <p>{name}</p>
      <hr />
      <Link to="/">HOME</Link>
    </div>
  );
}

export default FunctionInputComponent;
