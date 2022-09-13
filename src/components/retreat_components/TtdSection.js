import React from "react";
import HeadingBox from "./HeadingBox.js";
import ttd_icon from "../../assets/images/retreat_page_images/ttd-icon.svg"
import {BgImg2,BgImg3, BgImg4} from "../BgImgs.js"


export default function TtdSection(){
  return (<section className="ttd-section">


    <HeadingBox 
      iconImg = {ttd_icon}
      retreatH2 = "Things To Do"
    />
    <div class="ttd-content-card container">
      <p>Below are the most amazing things to do in Rishikesh. 
          These activities are not included in the package but 
          Ayurvedyam can arrange upon request. These are not 
          included in tha package</p>

      <ul class="card-content-ul">
        <li>River rafting - the most popular thing to do in Rishikesh</li>
        <li>Bungee jumping</li>
        <li>Mountain biking</li>
        <li>Flying fox</li>
        <li>Cliff jumping</li>
        <li>Trekking</li>
        <li>Rappelling and rock climbing</li>
        <li>Kayaking</li>
        <li>Ayurvedic massage and therapies</li>
        <li>Parasailing and paragliding</li>
        <li>Experience the traditional Indian culture</li>
      </ul>
    </div>
    <BgImg4 />
    <rect class="background-rect-filled"></rect>
    <rect class="background-rect-border"></rect>
  </section>)
}