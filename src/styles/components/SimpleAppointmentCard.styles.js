import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const Card = styled.div`
  background: ${colors.violetMedium};
  border-radius: 20px;
  padding: 1.3rem 1.7rem;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);
  margin: 0.5rem 0;
  font-size: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1rem 1.5rem;
    border-radius: 18px;
    font-size: 0.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    border-radius: 16px;
    font-size: 0.9rem;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  flex: 1;
`;

export const Time = styled.div`
  font-size: 1rem;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

export const Icon = styled.span`
  font-size: 1.2rem;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;
