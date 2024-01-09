// import React from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const CheckButton = ({ inputNumber }) => {
//   const handleCheck = async () => {
//     try {
//       if (inputNumber !== null) {
//         const response = await axios.get(
//           `https://puremedspa-backend-production.up.railway.app/numbers/check/${inputNumber}`
//         );
//         if (
//           response.data.message === "Number does not exist in the database."
//         ) {
//           toast.error(response.data.message);
//         } else if (response.data.message === "Number exists in the database.") {
//           toast.success(response.data.message);
//         }
//       }
//     } catch (error) {
//       toast.error("Error checking data!! ");
//       console.error("Error checking data:", error);
//     }
//   };

//   return (
//     <button type="button" onClick={handleCheck}>
//       Check
//     </button>
//   );
// };

// export default CheckButton;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CheckButton = () => {
  const [inputNumber, setInputNumber] = useState("");

  const handleCheck = async () => {
    try {
      if (inputNumber.trim() !== "") {
        const response = await axios.get(
          `https://puremedspa-backend-production.up.railway.app/numbers/check/${inputNumber}`
        );
        if (
          response.data.message === "Number does not exist in the database."
        ) {
          toast.error(response.data.message);
        } else if (response.data.message === "Number exists in the database.") {
          toast.success(response.data.message);
        }
        // setInputNumber("");
      }
    } catch (error) {
      toast.error("Error checking data!! ");
      console.error("Error checking data:", error);
    }
  };

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <div>
      <label htmlFor="numberInput">Number:</label>
      <input
        type="number"
        id="numberInput"
        value={inputNumber}
        onChange={handleInputChange}
        required
      />
      <button type="button" onClick={handleCheck}>
        Check
      </button>
    </div>
  );
};

export default CheckButton;
