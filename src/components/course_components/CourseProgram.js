import React from 'react';
import ContentItems from "../ContentItems.js"
import course_program_data from "../../data/course_data/course_program_data.js";
import H2Comp from "../H2Comp.js";
import H4Comp from "../H4Comp.js";
import ParaComp from "../ParaComp.js";
import ULComp from "../ULComp.js";


export default function CourseProgram(){
 

  const program_content_items = course_program_data.map(item => {
    return (<ContentItems 
        h4Text={item.h4Text}
        h5Text={item.h5Text}
        pText={item.pText}
        listItems={item.listItems}
    />)
  })

  return (<div className="content-card">
    <H2Comp
        h2Text="Program"
      />
    {program_content_items}
  </div>)
}
