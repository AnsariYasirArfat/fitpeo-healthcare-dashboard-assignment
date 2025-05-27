import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";

export const OverviewWrapper = styled.div`
  padding: 1rem;
  flex: 1;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0;
    flex-direction: column;
    gap: 0.8rem;
  }
  h1 {
    font-size: 1.5rem;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.3rem;
    }
  }
`;

export const Top = styled.div`
  flex: 1;
  display: flex;
  gap: 3rem;

  justify-content: space-between;
  padding: 1rem;

  @media (max-width: ${breakpoints.laptop}) {
    gap: 3rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 2rem;
    padding: 0;
  }
  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
    padding: 0;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
  }
`;
