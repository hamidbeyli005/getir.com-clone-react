import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import bannerData from "../api/banners.json";

function Compaign() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(bannerData);
  }, []);

  

  var settings={
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  };
  
  return (
    <div className="Compaign">
      <h6>Kampanyalar</h6>
      <Slider {...settings}>
        {banners.map((banner) => (
          <div className="banner" key={banner.id}>
            <img src={banner.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Compaign;
