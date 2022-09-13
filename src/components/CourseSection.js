import React from "react"
import courseData from "../data/course_card_data.js";
import CourseCard from "./CourseCard.js";
import SectionHeadings from "./SectionHeadings.js";



export default function CourseSection(){
  const courses = courseData.map(item => {
      return (
        <CourseCard 
          key= {item.id}
          courseImg={item.courseImg}
          courseName= {item.courseName}
          coursePrice={item.coursePrice}
        />
      )
  })
  return <div className="courses-card container">
    <SectionHeadings 
      h2Name= "Courses"
      subHead= "These courses are to provide you in depth knowledge of how choosing the yogic practices."
    />
    <div className="courses-area">

      {courses}
    </div>

  </div>
}






 