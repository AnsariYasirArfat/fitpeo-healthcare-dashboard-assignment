import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const ScheduleBox = styled.div`
  border-radius: 24px;
  padding: 1rem 0;
  margin-top: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
    border-radius: 20px;
    margin-top: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    border-radius: 16px;
    margin-top: 1rem;
  }
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const DaySection = styled.div`
  margin-bottom: 1.2rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1rem;
  }
`;

export const DayLabel = styled.div`
  color: ${colors.textSecondary};
  font-size: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`;
