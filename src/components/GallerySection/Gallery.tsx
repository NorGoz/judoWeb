import React from "react";
import styled from "styled-components";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import img1 from "../../assets/images/gallery/judo1.jpeg";
import img2 from "../../assets/images/gallery/judo2.jpg";
import img3 from "../../assets/images/gallery/judo3.jpg";
import img4 from "../../assets/images/gallery/judo4.jpeg";
import img5 from "../../assets/images/gallery/judo5.jpg";

import img7 from "../../assets/images/gallery/judo7.jpeg";
import img8 from "../../assets/images/gallery/judo8.jpg";
import img9 from "../../assets/images/gallery/judo9.jpeg";
import img10 from "../../assets/images/gallery/judo10.jpeg";
import img11 from "../../assets/images/gallery/judo11.jpeg";
import img12 from "../../assets/images/gallery/judo12.jpeg";
import img13 from "../../assets/images/gallery/judo13.jpeg";
import img14 from "../../assets/images/gallery/judo14.jpeg";
import img15 from "../../assets/images/gallery/judo15.jpg";

import img17 from "../../assets/images/gallery/judo17.jpeg";
import img18 from "../../assets/images/gallery/judo18.jpeg";
import img19 from "../../assets/images/gallery/judo19.jpg";
import img20 from "../../assets/images/gallery/judo20.jpg";

const Section = styled.section`
  padding: 0;
`;

const Gallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,

    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,

    img17,
    img18,
    img19,
    img20,
  ];

  return (
    <Section>
      {/* <Title>Galeria zdjęć</Title> */}
      <ImageCarousel images={images} options={{ loop: true }} />
    </Section>
  );
};

export default Gallery;
