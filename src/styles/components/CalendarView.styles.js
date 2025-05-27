import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const CalendarBox = styled.div`
  // padding: 0 1rem 0;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Month = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const NavArrows = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const DayCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border-radius: 10px;
  background: ${({ day }) => (day === "Tue" ? colors.violetLight : "inherit")};
  color: ${({ day }) => (day === "Sun" ? colors.textSecondary : "inherit")};
`;

export const DayLabel = styled.div`
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

export const DateNum = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
`;

export const TimeSlot = styled.div`
  background: ${({ active }) =>
    active === "primary"
      ? colors.violetDark
      : active === "secondary"
      ? colors.violetMedium
      : "inherit"};
  color: ${({ active }) =>
    active === "primary"
      ? colors.white
      : active === "secondary"
      ? colors.violetDark
      : "inherit"};
  border-radius: ${({ join, isFirst, isLast }) =>
    join ? (isFirst ? "8px 0 0 8px" : isLast ? "0 8px 8px 0" : "0") : "8px"};
  margin: 0.2rem 0;
  font-size: 0.8rem;
  font-weight: ${({ active }) => (active ? "bold" : "500")};
  transition: background 0.2s, color 0.2s;
  padding: 0.22rem 0.85rem;
  width: ${({ join }) => (join ? "80%" : "none")};
  border: none;
  text-align: center;
  box-shadow: ${({ active }) =>
    active === "primary" ? `0 2px 8px ${colors.shadow}` : "none"};
`;

export const AppointmentCards = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.6rem;
  // padding: 0 1rem 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const AppointmentCard = styled.div`
  background: ${({ primary }) =>
    primary ? colors.violetDark : colors.violetMedium};
  color: ${({ primary }) => (primary ? colors.white : "inherit")};
  border-radius: 28px;
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(79, 140, 255, 0.08);
`;
