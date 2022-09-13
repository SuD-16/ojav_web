import React from "react"

export default function SectionHeadings(props){
  
  if( `${props.subHead}` === false){
    return <h2>{props.h2Name}</h2>
  }

  return <div class="Course-headings">
    <h2>{props.h2Name}</h2>
    <p>{props.subHead}</p>
  </div>
}