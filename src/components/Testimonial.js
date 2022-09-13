import React from "react"

export default function Testimonial(props){
  return <div className="testimonial-content-box">
    <img src={require (`../assets/images/home_page_images/${props.studentImg}`)}/>
    <div>
      <p className="testimonial-text">{props.testimonialText}</p>
      <p className="student-name">{props.studentName}</p>
    </div>
  </div>
}