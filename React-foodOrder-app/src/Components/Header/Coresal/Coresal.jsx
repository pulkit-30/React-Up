import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Classes from "./Carousel.module.css";
import image1 from "../../../assets/img1.jpg";
import image2 from "../../../assets/img2.jpg";
import image3 from "../../../assets/img3.jpg";

export default function Coresal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const ImageClass = `d-black + ${Classes.image}`;
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={Classes.Carousel}
    >
      <Carousel.Item>
        <img className={ImageClass} src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={ImageClass} src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={ImageClass} src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
