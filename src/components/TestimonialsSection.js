import React from "react"
import sophieImg from "../assets/images/home_page_images/sophie_img.svg";
import testimonialData from "../data/testimonial_data.js";
import Testimonial from "./Testimonial.js"

export default function TestimonialsSection(){
    
  const testimonials = testimonialData.map(item => {
      return (
        <Testimonial 
          key= {item.id}
          studentImg={item.studentImg}
          studentName= {item.studentName}
          testimonialText= {item.testimonialText}
        />
      )
  })

  return <div className="testimonial-card container ">
    <p className="testimonial-heading">What Our Students Say</p>
    {testimonials}  
    

  </div>
}