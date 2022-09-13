import React from "react";
import LabelValueComponent from "../LabelValueComponent.js"
import TransportTypeHeader from "./TransportTypeHeader.js"





export default function TransportTypeComp(props){


  return (<div className="transport">
      <TransportTypeHeader 
        img={props.img}
        transportType={props.transportType}
      />

      <div className="transport-destination">
        <div>
          <LabelValueComponent 
          label= {props.label1}
          value= {props.value1}
          />
          <span className="value-name distance">{props.distance1}</span>
        </div>
        <div>
          <LabelValueComponent 
          label= {props.label2}
          value= {props.value2}
          />
          <span className="value-name distance">{props.distance2}</span>

        </div>
      </div>
  </div>)
}

// "International Airport"
// "DEL - Indira Gandhi International Airport"