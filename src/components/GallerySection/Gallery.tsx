import React from "react";
import styled from "styled-components";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import img1 from "../../assets/images/gallery/testZdjecia1.jpg";
import img2 from "../../assets/images/gallery/testZdjecia2.jpeg";
import img3 from "../../assets/images/gallery/testZdjecia3.jpg";
import img4 from "../../assets/images/gallery/testZdjecia4.jpg";
import img5 from "../../assets/images/gallery/testZdjecia5.jpg";

const Section = styled.section`
  padding: 0;
`;

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <Section>
      {/* <Title>Galeria zdjęć</Title> */}
      <ImageCarousel images={images} options={{ loop: true }} />
    </Section>
  );
};

export default Gallery;
