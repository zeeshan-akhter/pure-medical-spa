import React from "react";
import axios from "axios";

const CheckButton = ({ setApiResponse, inputNumber }) => {
  const handleCheck = async () => {
    try {
      if (inputNumber !== null) {
        const response = await axios.get(
          `https://53bc957d-7001-43e4-9b84-298fed7cb25b-00-3714vg5vl0kf8.riker.replit.dev/numbers/check/${inputNumber}`
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
