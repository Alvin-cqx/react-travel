import React from "react";
import { Carousel as AntCarousel, Image } from "antd";
import styles from "./carousel.moduel.css";
import carousel_1 from "../../assets/images/carousel_1.jpg";
import carousel_2 from "../../assets/images/carousel_2.jpg";
import carousel_3 from "../../assets/images/carousel_3.jpg";
export const Carousel: React.FC = () => {
  return (
    <AntCarousel className={styles["sliderS"]}>
      <Image src={carousel_1} height={240} width={"100%"}></Image>
      <Image src={carousel_2} height={240} width={"100%"}></Image>
      <Image src={carousel_3} height={240} width={"100%"}></Image>
    </AntCarousel>
  );
};
