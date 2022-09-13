import React from 'react';
import CourseOverview from "./CourseOverview.js";
import CourseProgram from "./CourseProgram.js";
import CourseSchedule from "./CourseSchedule.js";
import CourseAccomodation from "./CourseAccomodation.js";
import CourseFood from "./CourseFood.js";
import CourseIncluExclu from "./CourseIncluExclu.js"

export default function MainContainer(){
  return (<div className="main-container">
      <div className = "course-content-container">
      <CourseOverview />
      <CourseProgram />
      <CourseSchedule />
      <CourseAccomodation />
      <CourseFood />
      <CourseIncluExclu />
        
      </div>

      <div className="form-container">

        
      </div>
  </div>)
}
