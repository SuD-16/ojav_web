import React from 'react';
import course_css from "../assets/css/course_page_css.scss"
import TopNavigation from "../components/TopNavigation.js";
import HeaderImage from "../components/HeaderImage.js"
import header_image from "../assets/images/home_page_images/course-img-header.png";
// import CourseOverview from "../components/course_components/CourseOverview.js"
import MainContainer from "../components/course_components/MainContainer.js"


class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
      <TopNavigation />
      <HeaderImage 
        href={header_image}
        heading1="Kundalini Yoga Teacher Training - 1 Week 100Hrs"
      />

      <MainContainer />

    </div>
  }
}

export default CoursePage;
