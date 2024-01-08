import React from "react";
import axios from "axios";

const AddButton = ({ setApiResponse, inputNumber }) => {
  const handleAdd = async () => {
    try {
      if (inputNumber !== null) {
        const response = await axios.post(
          "https://53bc957d-7001-43e4-9b84-298fed7cb25b-00-3714vg5vl0kf8.riker.replit.dev/numbers/add",
          {
            number: inputNumber,
          }
        );

        setApiResponse(response.data.message);
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <button type="button" onClick={handleAdd}>
      Add
    </button>
  );
};

export default AddButton;
