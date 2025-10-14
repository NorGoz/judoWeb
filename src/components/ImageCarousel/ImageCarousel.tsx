import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styled from "styled-components";

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
  img {
    width: 100%;
    height: 440px;
    object-fit: cover;
    display: block;
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
  options?: any; // nie używamy EmblaOptionsType - safe fallback
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  options = { loop: true },
}) => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [, setSelected] = useState(0);
  const selectedIndexRef = useRef(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    selectedIndexRef.current = index;
    setSelected(index);
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

        <Prev onClick={() => emblaApi?.scrollPrev()} aria-label="previous">
          ‹
        </Prev>
        <Next onClick={() => emblaApi?.scrollNext()} aria-label="next">
          ›
        </Next>
      </Wrapper>

      <Dots>
        {images.map((_, i) => {
          const isActive = emblaApi
            ? emblaApi.selectedScrollSnap() === i
            : selectedIndexRef.current === i;
          return (
            <DotBtn
              key={i}
              active={isActive}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </Dots>
    </div>
  );
};

export default ImageCarousel;
