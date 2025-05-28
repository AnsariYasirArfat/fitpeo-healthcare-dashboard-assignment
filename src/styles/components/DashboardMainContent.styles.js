import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const MainContentWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.laptop}) {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const LeftColumn = styled.div`
  padding-top: 8rem;
  flex: 1;
  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 8rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 12rem;
  }
`;

export const RightColumn = styled.div`
  background: ${colors.backgroundLight};
  margin: 10px;
  flex: 1;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
  padding: 8rem 1.5rem 2rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
    border-radius: 28px;
    padding: 1rem 1.5rem 1.5rem;
    gap: 1.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin: 0;
    border-radius: 20px;
    padding: 0.5rem;
    gap: 1rem;
  }
`;
