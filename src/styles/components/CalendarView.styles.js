import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const CalendarBox = styled.div`
  gap: 1rem;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.8rem;
  }
`;

export const Month = styled.div`
  font-weight: 700;
  font-size: 1.2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

export const NavArrows = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
  }
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
  padding: 1rem 0;
  border-radius: 10px;
  background: ${({ day }) => (day === "Tue" ? colors.violetLight : "inherit")};
  color: ${({ day }) => (day === "Sun" ? colors.textSecondary : "inherit")};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2px;
    border-radius: 8px;
  }
`;

export const DayLabel = styled.div`
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.5rem;
    margin-bottom: 0.1rem;
  }
`;

export const DateNum = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.4rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.6rem;
    padding: 0.15rem 0.5rem;
    margin: 0.1rem 0;
    border-radius: ${({ join, isFirst, isLast }) =>
      join ? (isFirst ? "6px 0 0 6px" : isLast ? "0 6px 6px 0" : "0") : "6px"};
  }
`;

export const AppointmentCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 0.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
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
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.8rem;
    border-radius: 24px;
    font-size: 0.9rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.7rem;
    border-radius: 20px;
    font-size: 0.8rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 800;
    margin: 0;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.8rem;
    }
  }
  p {
    font-size: 1rem;
    margin: 0;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.7rem;
    }
  }
`;
