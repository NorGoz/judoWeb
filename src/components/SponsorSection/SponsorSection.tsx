import React from "react";
import { SponsorLogo, SponsorWrapper } from "./SponsorSectionStyle";
import sponsor1 from "../../assets/sponsors/sponsor1.jpg";
import sponsor2 from "../../assets/sponsors/sponsor2.jpg";
import sponsor3 from "../../assets/sponsors/sponsor3.jpg";
import sponsor4 from "../../assets/sponsors/sponsor4.jpg";

const SponsorSection = () => {
  return (
    <SponsorWrapper>
      <SponsorLogo>
        <img src={sponsor1} alt="Sponsor 1" />
      </SponsorLogo>
      <SponsorLogo>
        <img src={sponsor2} alt="Sponsor 2" />
      </SponsorLogo>
      <SponsorLogo>
        <img src={sponsor3} alt="Sponsor 3" />
      </SponsorLogo>
      <SponsorLogo>
        <img src={sponsor4} alt="Sponsor 4" />
      </SponsorLogo>
    </SponsorWrapper>
  );
};
export default SponsorSection;
