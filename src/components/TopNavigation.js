import React from "react"

// Import images

import logo from "../assets/images/home_page_images/logo.png";
import whats_app_btn from "../assets/images/home_page_images/whatsapp_button.svg";
// import user_icon from "../assets/images/home-page-images/noun_User_2328155"

export default function TopNavigation(){
  return <div class="top-navigation-bar">
      {/*// Logo*/}
      
      <a className="logo-box" href="/">
          <img  class="logo" src={logo}/>
      </a>
      
      {/*<!-- Primary Nav  -->*/}
      
      <nav>
          <a href="/course">Courses</a>
          <a href="/retreat">Retreats</a>
          <a href="#">Panchkarma</a>
          <a href="#">Ayurvedic Products</a>
          <a aria-label="Chat on WhatsApp" href="https://wa.me/916398669195?text=hi" className="whatsapp-btn"> <img  alt="Chat on WhatsApp" src={whats_app_btn} /> </a>
      
          {/*<a class="cart" href=""><img src={cart_icon}/>Cart</a>*/}
          <a class="login" href="#"><img src=""/>Login</a>
      </nav>

  </div>

}





