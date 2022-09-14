import React, { useState } from "react";
import Classes from "./Banner.module.css";
import Carousel from "react-bootstrap/Carousel";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={Classes.Banner}>
        <img
          className="d-block w-100"
          src="https://www.soyosoft.com/wp-content/themes/soyosoft/images/banner1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className={Classes.Banner}>
        <img
          className="d-block w-100"
          src="https://about.zination.com/wp-content/uploads/2018/05/ecommerce-banner11.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className={Classes.Banner}>
        <img
          className="d-block w-100"
          src="https://4.bp.blogspot.com/-_hZid1rqRaw/WLpqg3JVBFI/AAAAAAAAAOM/P7jv1QzqvE0MrdFAHlVTd7w9LbibFw5bACLcB/s1600/Camera.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className={Classes.Banner}>
        <img
          className="d-block w-100"
          src="https://makunnguyen.files.wordpress.com/2016/11/flash-sale-1180x450.jpg?w=1100"
          alt="Third slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item className={Classes.Banner}>
        <img
          className="d-block w-100"
          src="https://secure.netfirms.com/images/templates/netfirms/graphics/bannere.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
