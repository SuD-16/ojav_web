import React from "react"




export default function Category(props) {

  return <div className="category">
    <img src={require(`../assets/images/home_page_images/${props.categoryImg}`)} className="category-img" />
    <button className="category-button">{props.categoryName}</button>
  </div>
}


