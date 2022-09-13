import React from "react";



export default function CourseCard(props){
  

  return <div class="course-card">
    <img src={require (`../assets/images/home_page_images/${props.courseImg}`)}/>
    <div>
      <p className="course-name">{props.courseName}</p>
      <div>
          <p className="price-text">price</p>
          <p className="price-amount">{`₹ ${props.coursePrice}`}</p>
          <span className="sharing-text">/Person on twin sharing</span>
      </div>
    </div>
  </div>
}



