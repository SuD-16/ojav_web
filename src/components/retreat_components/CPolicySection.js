import React from "react";
import HeadingBox from "./HeadingBox.js";
import cPolicy_icon from "../../assets/images/retreat_page_images/c-policy-icon.svg"


export default function TtdSection(){
  return (<section className="c-policy-section">
  	<HeadingBox 
      iconImg = {cPolicy_icon}
      retreatH2 = "Cancellation Policy"
    />

    <div class="c-policy-card container">
      <ul class="card-content-ul">
        <li>A reservation requires a deposit of 30% of the total price.</li>
        <li>The deposit is non-refundable, if the booking is cancelled.</li>
        <li>The deposit is non-refundable, if the booking is cancelled.</li>
      </ul>
    </div>
    <rect class="background-rect-filled"></rect>
    <rect class="background-rect-border"></rect>
  </section>)
}