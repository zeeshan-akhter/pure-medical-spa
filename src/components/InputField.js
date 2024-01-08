import React, { useState } from "react";

const InputField = ({ setNumber, setInputNumberValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    if (inputValue.trim() !== "") {
      setNumber(parseInt(inputValue, 10));
      setInputValue("");
    }
  };

  return (
    <div>
      <label htmlFor="numberInput">Number:</label>
      <input
        type="number"
        id="numberInput"
        value={inputValue}
        onChange={handleInputChange}
        required
      />
      <button type="button" onClick={handleAddNumber}>
        Set Number
      </button>
      <hr/>
      <label htmlFor="setNumber">Set Number:</label>
      <h4 id="setNumber">{setInputNumberValue}</h4>
    </div>
  );
};

export default InputField;
