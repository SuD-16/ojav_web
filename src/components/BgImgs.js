import React from "react";
import coffee_img_bg from "../assets/images/retreat_page_images/coffee-icon-big.svg";
import couch_img_bg from "../assets/images/retreat_page_images/couch-img-bg.svg"
import news_img_bg from "../assets/images/retreat_page_images/news-illustration-bg.svg"
import map_img_bg from "../assets/images/retreat_page_images/map-illustration-bg.svg"
import weather_img_bg from "../assets/images/retreat_page_images/weather-icon-big.svg"



function BgImg2(){
    return (<div className="location-bg-illustrations">
            <img className="coffee-illustration" src={coffee_img_bg}/>
            <img className="couch-illustration" src={couch_img_bg}/>
    </div>)
}



function BgImg3(){
    return (<div class="location-bg-illustrations">
        <img class="news-illustration" src={news_img_bg}/>
        <img  class="map-illustration" src={map_img_bg}/>
    </div>)
}

function BgImg4(){

    return(<div class="side-illustration-box">
      <img class="weather-icon" src={weather_img_bg}/>
      <img class="coffee-icon" src={coffee_img_bg}/>
    </div>)
}





export {BgImg2, BgImg3, BgImg4};