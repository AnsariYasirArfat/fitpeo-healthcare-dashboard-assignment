import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const MainContentWrapper = styled.div`
  flex: 1;

  display: flex;

  @media (max-width: ${breakpoints.laptop}) {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.5rem;
  }
`;

export const LeftColumn = styled.div`
  padding-top: 8rem;
  @media (max-width: ${breakpoints.tablet}) {
  }
`;

export const RightColumn = styled.div`
  background: ${colors.backgroundLight};
  margin: 8px;
flex:1;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
  padding: 8rem 2rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }
`;
