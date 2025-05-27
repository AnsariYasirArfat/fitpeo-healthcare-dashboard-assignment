import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const Card = styled.div`
  background: ${colors.violetMedium};
  border-radius: 20px;
  padding: 1.3rem 1.7rem;
  box-shadow: 0 2px 12px rgba(79, 140, 255, 0.06);
  margin: 0.5rem 0;
  font-size: 1rem;

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
`;

export const Icon = styled.span`
  font-size: 1.2rem;
`;
