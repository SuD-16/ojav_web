import React from "react";
import overview_section_data from "../../data/retreat_data/overview_section_data.js";
import OverViewSection from "./OverViewSection.js";





export default function RetreatHeader(){
      
  const overviewSection = overview_section_data.map(item => {
  return <OverViewSection 
      img = {item.img}
      h4Text = {item.h4Text}
      pText = {item.pText}
      label = {item.lable}

    />
  })

  return  <div class="top-header container">
            
    <h1 className="retreat--h1">Ayurveda, Yoga & Meditation Retreat</h1>
    {overviewSection}
  </div>
}