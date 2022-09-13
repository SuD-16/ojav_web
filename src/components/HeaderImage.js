import React from "react"

export default function TopHeader(props) {

  return <div className="top-header-area">    
    <header className="header-container">
      <img class= "top-header-image" src={props.href}/>
      <div className="header-dark-gradient course-h1-box">
        <div className="container">
          <h1 className="course-h1">{props.heading1}</h1>
        </div>
      </div>
    </header>
  </div>
}


