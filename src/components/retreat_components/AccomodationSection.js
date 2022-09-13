import React from "react";
import HeadingBox from "./HeadingBox.js";
import LabelValueComponent from "../LabelValueComponent.js"
import accomodation_icon from "../../assets/images/retreat_page_images/accomodation_icon.svg";
import tree_img from "../../assets/images/retreat_page_images/tree-img.svg";
import pot_img from "../../assets/images/retreat_page_images/pot-img.svg";


export default function AccomodationSection(){
  return (<section class="accomodation-section">
    <HeadingBox
      iconImg = {accomodation_icon}
      retreatH2 = "Accomodation"
    />

    <div class="accomodation-text-box container">
      <div className="label--value--set">
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
    </div>

    <img class="tree-img" src={tree_img}/>
    <img class="pot-img" src={pot_img}/>
  </section>)
}