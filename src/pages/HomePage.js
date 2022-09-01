import React from 'react';
import home_page_css from '../assets/css/home_page_css.scss';
import header_image from "../assets/images/home_page_images/header_image.png";
import HeaderImage from "../components/HeaderImage.js";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="home-page">
      <HeaderImage 
        href={header_image}
      />
    </div>;
  }
}

export default HomePage;