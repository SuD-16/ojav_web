import React from "react"

export default function ULComp(props){
  
  const listItem = props.listItems.map(item => {
    return (<li>{item}</li>)
  })

  return (<ul>{listItem}</ul>)
}