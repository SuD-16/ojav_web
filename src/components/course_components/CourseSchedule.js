import React from 'react';
// import course_program_data from "../../data/course_data/course_program_data.js";
import ScheduleTableComp from "../ScheduleTableComp.js";
import schedule_data from "../../data/course_data/course_schedule_data.js";
import H2Comp from "../H2Comp.js";
import TableRowComp from "../TableRowComp.js"

export default function CourseSchedule(){
  const schedule_table_comp = schedule_data.map(item => {
    return (
    
      <ScheduleTableComp
        
        time = {item.time}
        activity={item.activity} />


 )
  })



  return (<div className="content-card">
    <H2Comp
        h2Text="Schedule"
      />
    
    <table className="schedule-table margin-32">
    {schedule_table_comp}
    </table>


  </div>)

}