import React from "react" 

export default function ParaComp(props){
  
  let paraText = props.pText.map(item => {
    return <p>{item}</p>
  })
  
  return (paraText)
}