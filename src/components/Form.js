import React, { useState } from "react";
import InputField from "./InputField";
import AddButton from "./AddButton";
import CheckButton from "./CheckButton";

const Form = () => {
  const [apiResponse, setApiResponse] = useState("");
  const [inputNumber, setInputNumber] = useState(null);

  return (
    <div>
      <InputField
        setNumber={setInputNumber}
        setInputNumberValue={inputNumber}
      />
      <AddButton setApiResponse={setApiResponse} inputNumber={inputNumber} />
      <CheckButton setApiResponse={setApiResponse} inputNumber={inputNumber} />
      <div className="response-container">
        {apiResponse && <p>{apiResponse}</p>}
      </div>
    </div>
  );
};

export default Form;
