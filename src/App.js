import React from "react";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Counts in 1s */}
        <Counter />
        {/* Counts in 5s */}

        {/* Counts in 3s */}
      </header>
    </div>
  );
}

export default App;
