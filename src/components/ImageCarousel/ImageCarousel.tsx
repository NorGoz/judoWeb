import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const Viewport = styled.div`
  overflow: hidden;
  border-radius: 12px;
`;

const Container = styled.div`
  display: flex;
  user-select: none;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  position: relative;
  /* Trochę wyższy kadr niż klasyczne 16:9 – lepiej dla zdjęć z hali */
  aspect-ratio: 3 / 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* lekko do góry, żeby nie ucinało głów */
    object-position: center top;
    display: block;
  }

  @media (max-width: 768px) {
    /* Na mobile jeszcze trochę wyżej, żeby ludzie byli dobrze widoczni */
    aspect-ratio: 4 / 3;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 34px;
    height: 34px;
    font-size: 16px;
  }
`;

const Prev = styled(Arrow)`
  left: 12px;
`;
const Next = styled(Arrow)`
  right: 12px;
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
  @media (max-width: ${BREAKPOINTS.mobile}) {
    gap: 6px;
  }
`;

const DotBtn = styled.button<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: none;
  background: ${({ active }) => (active ? "#004aad" : "#cfcfcf")};
  cursor: pointer;
`;

type ImageCarouselProps = {
  images: string[];
  options?: any; // light typing, wystarczy tutaj
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  options = { loop: true },
}) => {
  // Autoplay plugin – trzymamy instancję w ref
  const autoplay = useRef<any>(
    Autoplay({ delay: 4500, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // 🔹 reset timera autoplay po interakcji użytkownika
  const resetAutoplay = useCallback(() => {
    if (!autoplay.current) return;
    // Autoplay plugin ma metodę reset – zaczynamy od nowa od tego momentu
    autoplay.current.reset();
  }, []);

  const handlePrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    resetAutoplay();
  };

  const handleNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    resetAutoplay();
  };

  const handleDotClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    resetAutoplay();
  };

  return (
    <div>
      <Wrapper>
        <Viewport ref={emblaRef as any}>
          <Container>
            {images.map((src, i) => (
              <Slide key={i}>
                <img src={src} alt={`Slide ${i + 1}`} />
              </Slide>
            ))}
          </Container>
        </Viewport>

        <Prev onClick={handlePrev} aria-label="previous">
          ‹
        </Prev>
        <Next onClick={handleNext} aria-label="next">
          ›
        </Next>
      </Wrapper>

      <Dots>
        {images.map((_, i) => (
          <DotBtn
            key={i}
            active={i === selected}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </Dots>
    </div>
  );
};

export default ImageCarousel;
