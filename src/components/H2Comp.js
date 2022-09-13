import React from "react"

export default function H2Comp(props){
  return (<div className="h2-comp"> 
    <h2 className="Common-h2">{props.h2Text}</h2> 
    <hr className="h2-underline"/> 
  </div>)

}