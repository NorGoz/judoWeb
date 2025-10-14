import React from "react";
import { Title, Meta, Link } from "react-head";

interface SeoMetaProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

export const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description = "Zapisz się na zajęcia i poznaj ofertę!",
  image = "/images/cover.jpg",
  url = "https://moja-strona.pl",
  keywords = "zajęcia, sport, fitness, rezerwacja, kalendarz",
}) => {
  return (
    <>
      {/* Podstawowe meta */}
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="keywords" content={keywords} />
      <Link rel="canonical" href={url} />

      {/* Open Graph (Facebook, Messenger, LinkedIn) */}
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:image" content={image} />
      <Meta property="og:url" content={url} />

      {/* Twitter meta */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={image} />
    </>
  );
};
