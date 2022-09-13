import React from "react";



import Category from "./Category.js";

// Import Data
import data from "../data/categoryData.js";



export default function OurOfferingsBox() {

  const categories = data.map(item => {
      return (
        <Category 
          key= {item.id}
          categoryImg={item.categoryImg}
          categoryName= {item.categoryName}
        />
      )
  })

  

  return <div className="category-box-area container">    
    
    <div className="h1-area">
      <h1>Our Offerings</h1>
      <div className="h1-background"></div>
    </div>

    <div className="category-box">
      {categories}
    </div>
  
  </div>
}


