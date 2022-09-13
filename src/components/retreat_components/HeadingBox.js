import React from "react";

export default function HeadingBox(props){
  return ( <div className="program-heading-box">
    <img className="highlight-icon" src={props.iconImg}/>
    <h2 className="retreat--h2">{props.retreatH2}</h2>
    <rect className="h2-bg-rectangle"></rect>
  </div>)
}