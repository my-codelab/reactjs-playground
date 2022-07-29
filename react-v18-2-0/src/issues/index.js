import React from "react";
import { Link } from "react-router-dom";

function FunctionInputComponent() {
  return (
    <div>
      <label>ISSUEs</label>

      <ol>
        <li>
          <Link to="/issues/function-input-component">
            Function Input Component
          </Link>
        </li>
      </ol>
    </div>
  );
}

export default FunctionInputComponent;
