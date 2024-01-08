import React from "react";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>
        <img className="logo" src="/pureLogo.png" alt="Pure Med Spa" />
        {/* Pure Medical Spa */}
      </h1>
      <h2>DNC Check</h2>
      <Form />
    </div>
  );
};

export default App;
