import React from 'react';
import retreatCreativeImg from "../assets/images/home_page_images/retreat_creative.svg"

export default function RetreatCard() {
  return  <div class="retreat-box-area container">
      <div class="retreat-text-content">
          <p class="retreat-duration">1 Week</p>
          <p class="retreat-heading">Ayurveda, Yoga & Spiritual Retreat</p>
          <p class="retreat-subhead">In the Lap of Nature near <strong>Rishikesh</strong></p>
          <button class="primary-btn-dark">Know More</button>
      </div>
      <img src={retreatCreativeImg}/>

  </div>

}