import React from "react"
import H2Comp from "../H2Comp.js";
import incluexclu_data from "../../data/course_data/incluexclu_data.js"
import ContentItems from "../ContentItems.js"


export default function CourseIncluExclu(){

  const incluexclu_content = incluexclu_data.map(item => {
    console.log(item.h4Text)
    // return (<ContentItems 
    //         h4Text={item.h4Text}
    //         listItems={item.listItems}
    // />)
  })

  return (<div className="content-card">
    <H2Comp
        h2Text="Inclusions & Exclusions"
      />
      {incluexclu_content}

  </div>)

}