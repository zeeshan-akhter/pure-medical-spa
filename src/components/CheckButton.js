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
// import { toast } from "react-toastify";
import Modal from "react-modal";

const CheckButton = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCheck = async () => {
    try {
      if (inputNumber.trim() !== "") {
        const response = await axios.get(
          `https://puremedspa-dnc-backend-production.up.railway.app/numbers/check/${inputNumber}`
        );
        setApiResponse(response.data.message);
        setModalIsOpen(true);
        // if (
        //   response.data.message === "Number does not exist in the database."
        // ) {
        //   toast.error(response.data.message);
        // } else if (response.data.message === "Number exists in the database.") {
        //   toast.success(response.data.message, {
        //     position: "top-center",
        //     // toastClassName: "Toastify__toast-container--top-center",
        //   });
        // }
        // setInputNumber("");
      }
    } catch (error) {
      // toast.error("Error checking data!! ");
      setApiResponse("Error checking data!! ");
      setModalIsOpen(true);
      console.error("Error checking data:", error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setApiResponse(null);
  };

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  const customModalStyle = {
    overlay: {
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      width: "300px",
      margin: "115px auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fff",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      
    },
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
      <button className="button" type="button" onClick={handleCheck}>
        Check
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Number Check Modal"
        style={customModalStyle}
      >
        <div>
          <img
            className="response-img"
            src={
              apiResponse === "Number exists in the database."
                ? "/success.png"
                : "/warning.png"
            }
            alt="Response"
          />
          <h2>{apiResponse}</h2>
          <button
            className="button-secondary"
            type="button"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CheckButton;
