import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
    flex-direction: row;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.8rem;
  }
`;

export const Card = styled.div`
  background: ${colors.backgroundLight};
  border-radius: 16px;
  padding: 1.5rem 1rem;
 box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.2rem 0.8rem;
    border-radius: 14px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8rem 1rem;
    border-radius: 12px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
`;

export const Icon = styled.span`
  font-size: 2.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const Date = styled.div`
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: #8e9aac;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }
`;

export const StatusBar = styled.div`
  width: 180px;
  height: 10px;
  border-radius: 6px;
  background: #e0e7ff;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
     width: 140px;
  }

  @media (max-width: ${breakpoints.mobile}) {
   height: 8px;
    width: 120px;
  }
`;

export const StatusFill = styled.div`
  width: ${({ status }) => (status === "good" ? "80%" : "40%")};
  height: 100%;
  background: ${({ color }) => color};
  border-radius: 6px;
`;
