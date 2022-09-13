import React from "react";


export default function Treatment(props){
  return <div className="treatment-card">
    <img src={require (`../assets/images/home_page_images/${props.treatmentImg}`)}/>
    <div className="treatment-text-content">
      <p className="treatment-name">{props.treatmentName}</p>
      <p className="secondary-text">{props.treatmentText}</p>
      <p className="benefits-text secondary-text">
          <strong>Benefits:</strong> {props.treatmentBenefits}
      </p>
    </div>
  </div>
}