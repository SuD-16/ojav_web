import React from "react";
import PrimaryButtonDark from "../components/PrimaryButtonDark.js";
import SecondaryButton from "../components/SecondaryButton.js";

export default function ButtonsArea(){
  return (
    <div className="button-area">
      <div className="buttons">
        <SecondaryButton 
          buttonText="Ask a Query"
        />
        <PrimaryButtonDark 
          buttonText = "Book Consultation Now"
        />
      </div>
    </div>
  )
}