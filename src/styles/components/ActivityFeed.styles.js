import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const ActivityBox = styled.div`
  background: ${colors.backgroundLight};
  border-radius: 20px;
  padding: 1.5rem 1rem;
  margin-top: 1rem;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.2rem 0.8rem;
    border-radius: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem 0.5rem;
    border-radius: 14px;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 1.4rem;
  color: #22223b;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const SubText = styled.div`
  color: #8e9aac;
  font-size: 1.15rem;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 14px;
  margin-top: 0.1rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bar = styled.div`
  width: 6px;
  border-radius: 8px;
  background: ${({ color }) => color};
  height: ${({ height }) => height};
  margin-bottom: 4px;
  @media (max-width: ${breakpoints.tablet}) {
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

export const DayLabel = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.textSecondary};
  margin-top: 0.3rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.6rem;
  }
`;
