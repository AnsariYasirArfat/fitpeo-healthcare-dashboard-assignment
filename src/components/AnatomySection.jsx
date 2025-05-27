import React from "react";
import anatomyIndicators from "@/data/anatomyData";
import {
  AnatomyContainer,
  AnatomyImageWrapper,
  AnatomyImage,
  Indicator,
  Magnifier,
} from "@/styles/components/AnatomySection.styles";
import { ZoomIn } from "lucide-react";

const anatomyImg = "/assets/human_body.png";

const AnatomySection = () => (
  <AnatomyContainer>
    <Magnifier>
      <ZoomIn />
    </Magnifier>
    <AnatomyImageWrapper>
      <AnatomyImage src={anatomyImg} alt="Human Anatomy" />
      {anatomyIndicators.map((ind) => (
        <Indicator
          key={ind.label}
          bgColor={ind.bgColor}
          color={ind.color}
          left={ind.left}
          top={ind.top}
        >
          <span>{ind.icon}</span> {ind.label}
        </Indicator>
      ))}
    </AnatomyImageWrapper>
  </AnatomyContainer>
);

export default AnatomySection;
