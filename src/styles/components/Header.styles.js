import styled from "styled-components";
import breakpoints from "@/styles/breakpoints";
import colors from "@/styles/colors";

export const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: ${breakpoints.tablet}) {
    width: 95vw;

    padding: 1.5rem;
    margin: 1rem 0;
    height: auto;
    gap: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90vw;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
    padding: 1rem 0.5rem;
    margin: 0.5rem 0;
    align-items: stretch;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: -1px;
  span {
    color: ${colors.accentCyan};
  }
  margin-right: 100px;
  margin-left: 36px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
    margin-right: 40px;
    margin-left: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex-grow: 1;

  @media (max-width: ${breakpoints.mobile}) {
    flex-grow: 0;
  }
`;

export const SearchInput = styled.input`
  width: 420px;
  height: 36px;
  padding: 0 1.2rem 0 4rem;
  border: 2px solid ${colors.lightGrey};
  border-radius: 12px;
  font-size: 1rem;
  outline: none;

  @media (max-width: ${breakpoints.laptop}) {
    width: 300px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 240px;

    max-width: none;
    margin: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 180px;
    padding: 0 0.2rem 0 2rem;
    font-size: 0.9rem;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;

  @media (max-width: ${breakpoints.mobile}) {
    left: 0.8rem;
    font-size: 1rem;
  }
`;

export const BellWrapper = styled.div`
  border: 2px solid ${colors.lightGrey};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  @media (max-width: ${breakpoints.mobile}) {
    width: 32px;
    height: 32px;
  }
`;

export const RightSection = styled.div`
  align-self: flex-end;

  display: flex;
  align-items: center;
  gap: 1.3rem;
  margin-right: 36px;
  @media (max-width: ${breakpoints.tablet}) {
    gap: 0.8rem;
    margin-right: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.5rem;
    margin-right: 0;
  }
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background: ${colors.accentCyan};
  border-radius: 12px;
 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #fff;
 box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);
  @media (max-width: ${breakpoints.mobile}) {
    width: 32px;
    height: 32px;
    font-size: 1.1rem;
  }
`;

export const AddButton = styled.button`
  background: ${colors.violetDark};
  color: #fff;
  border: none;
  border-radius: 12px;
  width: 36px;
  height: 36px;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.06);
  transition: background 0.2s;
  &:hover {
    background: #2563eb;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 32px;
    height: 32px;
  }
`;
