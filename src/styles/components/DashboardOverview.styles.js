import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";

export const OverviewWrapper = styled.div`
  padding: 0.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 1rem;
  }
  h1 {
    font-size: 1.5rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }
`;
