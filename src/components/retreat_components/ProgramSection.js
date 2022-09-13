import React from "react";
import HeadingBox from "./HeadingBox.js";
import ProgramTextBox from "./ProgramTextBox.js";
import program_icon from "../../assets/images/retreat_page_images/program-icon.svg";
import program_yoga_girl from "../../assets/images/retreat_page_images/program-yoga-girl.svg";
import program_grass_illustration from "../../assets/images/retreat_page_images/program-grass-illustration.svg";
import program_section_data from "../../data/retreat_data/program_section_data";
import ProgramSection2 from "./ProgramSection2.js"

export default function ProgramSection(){
  
  const program_text_box = program_section_data.map(item => {
    return (<ProgramTextBox
      pText1={item.pText1}
      pText2={item.pText2}
      pText3={item.pText3}

    />)
    })

    const program_section_2 = program_section_data.map(item => {
      return (
        <ProgramSection2 
          ulList1={item.ulList1}
          ulList2={item.ulList2}
          ulList3={item.ulList3}
      />)
    })
  
  return ( <section className="program-section">
    <HeadingBox 
      iconImg = {program_icon}
      retreatH2 = "Program"
    />
    
    {program_text_box}
    {program_section_2}


    <img className="program-grass-img" src={program_grass_illustration}/>
    <rect className="background-rect-filled"></rect>
    <rect className="background-rect-border"></rect>
  </section>)
}