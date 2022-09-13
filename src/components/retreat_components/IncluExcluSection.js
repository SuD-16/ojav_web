import React from "react";
import HeadingBox from "./HeadingBox.js";
import ScheduleContentCard from "./ScheduleContentCard.js"
import inclusion_icon from "../../assets/images/retreat_page_images/inclusion-icon.svg";
import exclusion_icon from "../../assets/images/retreat_page_images/exclusion-icon.svg";
import glasshour_img from "../../assets/images/retreat_page_images/processing-2872696-2409412.png";
import rock_img from "../../assets/images/retreat_page_images/business-3d-mountain-rocks.png"



export default function IncluExcluSection(){
  return (<section class="inclusionExclusion-section container">
     <div class="inclusion-Section">
        <HeadingBox 
          iconImg = {inclusion_icon}
          retreatH2 = "Inclusion"
        />

      <div class="inclusion-card">
        <ul class="card-content-ul">
            <li>Retreat fee</li>
            <li>3 nights accommodation with private washroom</li>
            <li>3-course nutritious meals each day</li>
            <li>Daily Yoga Classes</li>
            <li>Daily Meditation Practice</li>
            <li>Daily Pranayama and Breath Awareness Practice</li>
            <li>Daily Mantra Recitations</li>
            <li>Wi-Fi connection</li>
            <li>Local Sightseeing and Pilgrimage Tour</li>
            <li>Participation Certification from Vardan Foundation</li>
        </ul>
      </div>

{/*      <rec class="sqare-border"></rec>*/}
      <div class="inclu-circle"></div>
    </div>

    <div class="exclusion-Section">
      <HeadingBox 
        iconImg = {exclusion_icon}
        retreatH2 = "Exclusion"
      />
      <div class="exclusion-card">
        <ul class="card-content-ul">
          <li>Airfare</li>
          <li>Airport transfers</li>
          <li>Additional Meals and Activities</li>
          <li>Personal expenses</li>
          <li>Air-conditioned room charge</li>
        </ul>
      </div>
      <div class="exclu-circle"></div>
    </div>
  </section>)
}