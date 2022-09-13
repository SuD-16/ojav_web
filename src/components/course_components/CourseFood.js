import React from "react"
import H2Comp from "../H2Comp.js";
import LabelValueComponent from "../LabelValueComponent.js"
import food_img1 from "../../assets/images/retreat_page_images/food-img1.png";
import food_img2 from "../../assets/images/retreat_page_images/food-img2.png";
import food_img3 from "../../assets/images/retreat_page_images/food-img3.png";


export default function CourseFood(){
  return (<div className="content-card">
    <H2Comp
        h2Text="Food"
      />

      <div class="food-images-box margin-32">
          <img src={food_img1}/>
          <img src={food_img2}/>
          <img src={food_img3}/>
      </div>
      <p>
        You will be provided with Satvik (Organic and Vegetarian) meals (Breakfast, Lunch & Dinner) every day.
      </p>
  </div>)
}