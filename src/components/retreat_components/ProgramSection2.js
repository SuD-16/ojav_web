import React from "react";



export default function ProgramSection2(props){
  return (<div className="program-section2">
      <p className="program-heading2">What You will learn</p>
      <hr className="solid"/>
      <div className="unordered-list-section container">
          <ul>
              <li>{props.ulList1.a}</li>
              <li>{props.ulList1.b}</li>
              <li>{props.ulList1.c}</li>
          </ul>

          <ul>
              <li>{props.ulList2.a}</li>
              <li>{props.ulList2.b}</li>
              <li>{props.ulList2.c}</li>
          </ul>

          <ul>
              <li>{props.ulList3.a}</li>
              <li>{props.ulList3.b}</li>
              <li>{props.ulList3.c}</li>
          </ul>
      </div>
  </div>)
}