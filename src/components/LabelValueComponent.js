import React from "react"
import react_page_css from "../assets/css/retreat.scss"


export default function LabelValueComponent(props){

  return (
      <div className="label--value--comp">
        <span className="label-name">{props.label}</span>
        <span className="value-name">{props.value}</span>
      </div>)
}
