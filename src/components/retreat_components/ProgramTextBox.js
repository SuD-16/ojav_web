import React from "react"
import program_yoga_girl from "../../assets/images/retreat_page_images/program-yoga-girl.svg";


export default function ProgramTextBox(props){
  return (<div className="program-text-box container">
    <img className="program-yoga-girl-img" src={program_yoga_girl}/>
    <p>{props.pText1}</p>
    <p>{props.pText2}</p>
    <p>{props.pText3}</p>
  </div>)
}