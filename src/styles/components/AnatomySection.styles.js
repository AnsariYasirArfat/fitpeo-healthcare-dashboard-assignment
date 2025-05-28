import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const AnatomyContainer = styled.div`
  position: relative;
  background: ${colors.backgroundLight};
  border-radius: 28px;
  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
    border-radius: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    border-radius: 20px;
  }
`;

export const AnatomyImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnatomyImage = styled.img`
  height: 480px;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08));
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 220px;
  }
`;

export const Indicator = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border-radius: 14px;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ color }) => color || colors.textPrimary};
  background: ${({ bgColor }) => bgColor || colors.violetMedium};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  z-index: 2;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);
  svg,
  span {
    margin-right: 0.6rem;
    font-size: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 0.4rem 0.4rem;
    border-radius: 10px;
    svg,
    span {
      margin-right: 0.4rem;
      font-size: 1.2rem;
    }
  }
`;

export const Magnifier = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #8e9aac;
  cursor: pointer;
  z-index: 3;

  @media (max-width: ${breakpoints.mobile}) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
`;
