import React from "react";
import axios from "axios";

const CheckButton = ({ setApiResponse, inputNumber }) => {
  const handleCheck = async () => {
    try {
      if (inputNumber !== null) {
        const response = await axios.get(
          `https://puremedspa-backend-production.up.railway.app/numbers/check/${inputNumber}`
        );

        setApiResponse(response.data.message);
      }
    } catch (error) {
      console.error("Error checking data:", error);
    }
  };

  return (
    <button type="button" onClick={handleCheck}>
      Check
    </button>
  );
};

export default CheckButton;
