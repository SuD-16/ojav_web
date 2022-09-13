import React from "react"
import ayurvedicTreatmentData from "../data/ayurvedic_treatment_data.js";
import Treatment from "./Treatment.js";
import SectionHeadings from "../components/SectionHeadings.js";
import ButtonsArea from "../components/ButtonsArea.js";
import PrimaryButtonDark from "../components/PrimaryButtonDark.js";
import SecondaryButton from "../components/SecondaryButton.js";

export default function AyurvedicTreatmentSection(props){
    
  const treatments = ayurvedicTreatmentData.map(item => {
      return (
        <Treatment 
          key= {item.id}
          treatmentImg={item.treatmentImg}
          treatmentName= {item.treatmentName}
          treatmentText= {item.treatmentText}
          treatmentBenefits= {item.treatmentBenefits}
        />
      )
  })

  return <div className="treatments-card container">
    
    <div className="treatment-headings">
      <SectionHeadings 
        h2Name= "Ayurvedic Treatments"
        subHead= "Consultation is provided by an experienced 
        ayurveda doctor who determines your prakruti (body type) 
        & set up combinations of the treatments for you."
      />
    </div>
     
    <div className="treatments-area">
      {treatments}
    </div>
    
    <ButtonsArea />
  </div>
}

console.log(AyurvedicTreatmentSection)