import React from "react";
import HeadingBox from "./HeadingBox.js";
import ScheduleContentCard from "./ScheduleContentCard.js"
import schedule_icon from "../../assets/images/retreat_page_images/schedule-icon.svg";
import glasshour_img from "../../assets/images/retreat_page_images/processing-2872696-2409412.png";
import rock_img from "../../assets/images/retreat_page_images/business-3d-mountain-rocks.png"



export default function ScheduleSection(){
  return (<section className="schedule-section">
    <div className="background-elements">
      <img className="glasshour-img" src={glasshour_img}/>
      <img className="rock-img" src={rock_img}/>
    </div>

    <HeadingBox 
      iconImg = {schedule_icon}
      retreatH2 = "Schedule"
    />

    <div className="circle"></div>
    <rec className="sqare-border"></rec>
    <div className="circle-small"></div>

    <ScheduleContentCard />



   </section>)
}