import React, { useState } from "react";

function FunctionInputComponentNotWorking() {
  const InputName = ({ value, onChange }) => {
    return <input value={value} onChange={(e) => onChange(e.target.value)} />;
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <div style={{ color: "white", backgroundColor: "darkred" }}>Not Work</div>

      <label>Name: </label>
      <InputName value={firstName} onChange={setFirstName}></InputName>

      <label>Name: </label>
      <InputName value={lastName} onChange={setLastName}></InputName>

      <p>Output (syncronized)</p>
      <p>
        {firstName} : {lastName}
      </p>
    </div>
  );
}

export default FunctionInputComponentNotWorking;
