import React from "react";


export default function TransportTypeHeader(props){
  return (<div className="transport-type-box">
    <img className="transport-icon" src={require(`../../assets/images/retreat_page_images/${props.img}`)}/>
    <span className="transport-type-text">{props.transportType}</span>
  </div>)
}