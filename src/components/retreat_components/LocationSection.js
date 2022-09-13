import React from "react";
import HeadingBox from "./HeadingBox.js";
import ScheduleContentCard from "./ScheduleContentCard.js";
import TransportTypeComp from "./TransportTypeComp.js"
import location_icon from "../../assets/images/retreat_page_images/location-icon.svg";
import location_img from "../../assets/images/retreat_page_images/location-img.svg";

export default function LocationSection(){
  return (<section className="loaction-section">

    <HeadingBox 
      iconImg = {location_icon}
      retreatH2 = "Location"
    />

    <div className="loaction-content-card container">
      <div className="adress-box">
          <div>
              <p className="address-text">Vardan Foundation, Rattapani, Neelkanth Road, Near Rishikesh, Uttarakhand Himalayas (INDIA)</p>
              <p className="address-decription">The location is far from the crowded city in the lap of nature. 
              Taxis can be arranged at a nominal price to visit the city easily.</p>
          </div>
          <div className="location-visual-box">
              <img className="location-img" src={location_img}/>
              <button className="view-map-btn">View Map</button>
          </div>
      </div>
      <div className="transport-box">
        <h4 className="retreat--h4">How to Reach</h4>
        <TransportTypeComp 
          img="by-air-icon.svg"
          transportType="By Air"
          label1="Nearest Airport"
          value1="DED - Jolly Grant Airport"
          distance1="24 Kms"
          label2="International Airport"
          value2="DEL - Indira Gandhi International Airport"
          distance2="260 Kms"
        />

        <TransportTypeComp 
          img="by-bus-icon.svg"
          transportType="By Bus"
          label1="Nearest Bus Station"
          value1="Rishikesh Bus Stand"
          distance1="15 Kms"
          // label2="International Airport"
          // value2="DEL - Indira Gandhi International Airport"
          // distance2="260 Kms"
        />

        <TransportTypeComp 
          img="by-train-icon.svg"
          transportType="By Train"
          label1="Nearest Railway Station"
          value1="New Rishikesh"
          distance1="17 Kms"
          // label2="International Airport"
          // value2="DEL - Indira Gandhi International Airport"
          // distance2="260 Kms"
        />
      </div>

    </div>
    <rect className="background-rect-filled"></rect>
    <rect className="background-rect-border"></rect>
  </section>)
}