import React from "react";
import axios from "axios";

const AddButton = ({ setApiResponse, inputNumber }) => {
  const handleAdd = async () => {
    try {
      if (inputNumber !== null) {
        const response = await axios.post(
          "https://puremedspa-backend-production.up.railway.app/numbers/add",
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
