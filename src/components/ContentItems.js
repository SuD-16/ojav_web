import React from 'react';
import H2Comp from "./H2Comp.js";
import H4Comp from "./H4Comp.js";
import H5Comp from "./H5Comp.js"
import ParaComp from "./ParaComp.js";
import ULComp from "./ULComp.js";

export default function ContentItems(props){
  return (<div className="content--items">
  
    <H4Comp
      h4Text={props.h4Text}
    />



    <H5Comp
      h5Text={props.h5Text}
    />
    <ParaComp 
      pText={props.pText}
    />

    <ULComp
      listItems={props.listItems}/>

  </div>)
}