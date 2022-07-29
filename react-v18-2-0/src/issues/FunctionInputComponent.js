import React from "react";
import { Link } from "react-router-dom";

import FunctionInputComponentNotWorking from "./FunctionInputComponentNotWorking";
import FunctionInputComponentWorking from "./FunctionInputComponentWorking";

function FunctionInputComponent() {
  return (
    <div>
      <div>
        <FunctionInputComponentNotWorking />
      </div>
      <hr />
      <div>
        <FunctionInputComponentWorking />
      </div>
      <hr />
      <Link to="/">HOME</Link>
    </div>
  );
}

export default FunctionInputComponent;
