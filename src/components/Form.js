// import React, { useState } from "react";
// import InputField from "./InputField";
// import CheckButton from "./CheckButton";

// const Form = () => {
//   const [inputNumber, setInputNumber] = useState(null);

//   return (
//     <div>
//       <InputField
//         setNumber={setInputNumber}
//         setInputNumberValue={inputNumber}
//       />
//       <CheckButton inputNumber={inputNumber} />
//     </div>
//   );
// };

// export default Form;

import React from "react";
import CheckButton from "./CheckButton";

const Form = () => {
  // const [apiResponse, setApiResponse] = useState(null);

  return (
    <div>
      <CheckButton />
      {/* <div className="response-container">
        {apiResponse && <p>{apiResponse}</p>}
      </div> */}
    </div>
  );
};

export default Form;
