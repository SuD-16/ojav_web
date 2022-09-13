
import React from "react"
import H2Comp from "../H2Comp.js";
import LabelValueComponent from "../LabelValueComponent.js"

export default function CourseAccomodation(){
  return (<div className="content-card">
    <H2Comp
        h2Text="Accomodation"
      />
    <div className="label--value--set margin-32">
        <LabelValueComponent
          label="Check-in Time"
          value="13:00"
        />

        <LabelValueComponent
          label="Check-out Time"
          value="11:00"
        />
      </div>

      <p>
        Stay in a comfortable room at Vardan Foundation: An ideal place to 
        stay at a very peaceful, out of Hustle-n-Bustle of the Crowded City 
        in the lap of Mother Nature in the Valley of Mountains and nearby 
        waterfall and rivers, which are at a stone’s throw distance to 
        experience small Nature-trails.
      </p>

      <ul>
          <li>Options for Single and Double rooms depending upon one’s Needs</li>
          <li>Wifi is available at Common Places</li>
          <li>Hot Water</li>
      </ul>
  </div>)
}