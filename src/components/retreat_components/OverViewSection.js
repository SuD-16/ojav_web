import React from "react"
// import overview_section_data from "../../data/react_data/overview_section_data.js";
import LabelValueComponent from "../LabelValueComponent.js";



export default function OverViewSection(props){

  return <div className="overview-section">
    
    <div className="overvie-image-area">
        <img src={require (`../../assets/images/retreat_page_images/${props.img}`)}/>
    </div>

    <div className="overview-content-box">
      <h4 className="retreat--h4" id="overview">{props.h4Text}</h4>
      <p>{props.pText}</p>
      <div className="label--value--set">
        <LabelValueComponent
          label= "Available Retreat Durations"
          value= "3 Days | 5 Days | 7 Days"
        />
        <LabelValueComponent
          label= "Price Range"
          value= "₹ 20,000 - 100,000"
        />
      </div>
    </div>
  </div>
}