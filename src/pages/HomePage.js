import React from 'react';


import TopNavigation from "../components/TopNavigation.js";
import header_image from "../assets/images/home_page_images/header_image.png";
import HeaderImage from "../components/HeaderImage.js";
import OurOfferingsBox from "../components/OurOfferingsBox.js";
import RetreatCard from "../components/RetreatCard.js";
import CourseSection from "../components/CourseSection.js";
import TestimonialsSection from "../components/TestimonialsSection.js";
import AyurvedicTreatmentSection from "../components/AyurvedicTreatmentSection";


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="home-page">
      
      <TopNavigation />
      <HeaderImage 
        href={header_image}
      />
      <OurOfferingsBox />
      <RetreatCard />
      <CourseSection />
      <TestimonialsSection />
      <AyurvedicTreatmentSection />
    </div>;
  }
}

export default HomePage;