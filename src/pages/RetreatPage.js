import React from 'react';
import TopNavigation from "../components/TopNavigation.js";
import RetreatHeader from "../components/retreat_components/RetreatHeader.js";
import HighlightSection from "../components/retreat_components/HighlightSection.js";
import ProgramSection from "../components/retreat_components/ProgramSection.js";
import ScheduleSection from "../components/retreat_components/ScheduleSection.js";
import AccomodationSection from "../components/retreat_components/AccomodationSection.js";
import {BgImg2, BgImg3, BgImg4} from "../components/BgImgs.js";
import FoodSection from "../components/retreat_components/FoodSection.js";
import IncluExcluSection from "../components/retreat_components/IncluExcluSection.js";
import LocationSection from "../components/retreat_components/LocationSection.js";
import TtdSection from "../components/retreat_components/TtdSection.js";
import CPolicySection from "../components/retreat_components/CPolicySection.js";







class RetreatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
      <TopNavigation />
      <RetreatHeader />
      <HighlightSection />
      <ProgramSection />
      <ScheduleSection />
      <AccomodationSection />
      <BgImg2 />
      <FoodSection />
      <IncluExcluSection />
      <BgImg3 />
      <LocationSection />
      <TtdSection />
      <CPolicySection />

    </div>
  }
}

export default RetreatPage;