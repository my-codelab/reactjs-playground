import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FunctionInputComponent from "./issues/FunctionInputComponent";
import Home from "./issues/";

function App() {
  return (
    <div>
      <div>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/issues/function-input-component"
                element={<FunctionInputComponent />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
