import React, { useState } from "react";

const InputName = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

function FunctionInputComponentWorking() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <div style={{ color: "white", backgroundColor: "darkgreen" }}>Works</div>
      <label>First Name: </label>
      <InputName value={firstName} onChange={setFirstName}></InputName>

      <label>Last Name: </label>
      <InputName value={lastName} onChange={setLastName}></InputName>

      <p>Output (syncronized)</p>
      <p>
        {firstName} : {lastName}
      </p>
    </div>
  );
}

export default FunctionInputComponentWorking;
