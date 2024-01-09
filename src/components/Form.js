import React, { useState } from "react";
import InputField from "./InputField";
import CheckButton from "./CheckButton";

const Form = () => {
  const [inputNumber, setInputNumber] = useState(null);

  return (
    <div>
      <InputField
        setNumber={setInputNumber}
        setInputNumberValue={inputNumber}
      />
      <CheckButton inputNumber={inputNumber} />
    </div>
  );
};

export default Form;
