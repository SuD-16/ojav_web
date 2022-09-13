import React from "react";
import HeadingBox from "./HeadingBox.js";
import highlight_icon from "../../assets/images/retreat_page_images/highlight-icon.svg";
import doctor_img from "../../assets/images/retreat_page_images/doctor-img.svg";



export default function HighlightSection(){
  return ( <section className="highlight-section">
    <HeadingBox 
      retreatH2="Highlights"
      iconImg= {highlight_icon}
    />

    <div className="doc-img-box retreat-container">
        <img className="doctor-img" src={doctor_img} alt="doctor-3d-illustration"/>
    </div>

    <div className="highlight-text-box retreat-container">
      <div className="four-col-row">
          <div className="column"> <p>One to one Ayurveda Consultation with an Ayurvedic Doctor</p> </div>
          <div className="column"> <p>Dynamic and relaxing meditations with pranayama</p> </div>
          <div className="column"> <p>Vegetarian meals, herbal & Indian tea, snacks</p> </div>
          <div className="column"> <p>Ayurveda lesson to find out your natural personality</p> </div>
          <div className="column"> <p>Mantra chanting and kirtan</p> </div>
          <div className="column"> <p>Fire ceremony with mantra</p> </div>
          <div className="column"> <p>Indian philosophy session</p> </div>
          <div className="column"> <p>Comfortable accommodation</p> </div>
      </div>
{/*      <div className="row">
          <div className="column"> <p>Mantra chanting and kirtan</p> </div>
          <div className="column"> <p>Fire ceremony with mantra</p> </div>
          <div className="column"> <p>Indian philosophy session</p> </div>
          <div className="column"> <p>Comfortable accommodation</p> </div>
      </div>*/}
    </div>
  </section>)
}
