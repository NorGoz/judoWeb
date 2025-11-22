import React from "react";
import { SponsorLogo, SponsorWrapper } from "./SponsorSectionStyle";
import sponsor1 from "../../assets/sponsors/sponsor1.jpeg";

const SponsorSection = () => {
  return (
    <SponsorWrapper>
      <SponsorLogo>
        <img src={sponsor1} alt="Sponsor 1" />
      </SponsorLogo>
      <SponsorLogo>
        <img src={sponsor1} alt="Sponsor 2" />
      </SponsorLogo>
      <SponsorLogo>
        <img src={sponsor1} alt="Sponsor 3" />
      </SponsorLogo>
      <SponsorLogo>
        <img src={sponsor1} alt="Sponsor 4" />
      </SponsorLogo>
    </SponsorWrapper>
  );
};
export default SponsorSection;
