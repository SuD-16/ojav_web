import React from "react";
import ScheduleTableComp from "../ScheduleTableComp.js"
import schedule_data from "../../data/retreat_data/schedule_data.js"

export default function ScheduleContentCard(){

const schedule_table_comp = schedule_data.map(item => {
    return (
    
      <ScheduleTableComp
        
        time = {item.time}
        activity={item.activity} />


 )
  })



  return (<div className="schedule-text-box retreat-container">
    <table className="schedule-table">
      {schedule_table_comp}
    </table>
  </div>)
}