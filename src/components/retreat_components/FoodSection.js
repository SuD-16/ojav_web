import React from "react";
import HeadingBox from "./HeadingBox.js";
import food_icon from "../../assets/images/retreat_page_images/food-icon.svg";
import food_img1 from "../../assets/images/retreat_page_images/food-img1.png";
import food_img2 from "../../assets/images/retreat_page_images/food-img2.png";
import food_img3 from "../../assets/images/retreat_page_images/food-img3.png";


export default function FoodSection(){
  return (<section class="food-section">
    <HeadingBox 
      iconImg = {food_icon}
      retreatH2 = "Food"
    />

    <div class="food-content-card container">
      <div class="food-images-box">
          <img src={food_img1}/>
          <img src={food_img2}/>
          <img src={food_img3}/>
      </div>
      <p>
        You will be provided with Satvik (Organic and Vegetarian) meals (Breakfast, Lunch & Dinner) every day.
      </p>
    </div>


    </section>)
}